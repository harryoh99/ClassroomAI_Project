"use strict";

const data = window.CLASSROOM_DATA;
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

document.documentElement.classList.add("js");
$$("[data-enhanced]").forEach((element) => {
  element.hidden = false;
});
const menu = $(".menu-toggle");
const nav = $("#navigation");
menu.hidden = false;
function closeMenu() {
  nav.classList.remove("is-open");
  menu.setAttribute("aria-expanded", "false");
}
menu.addEventListener("click", () => {
  const open = menu.getAttribute("aria-expanded") !== "true";
  nav.classList.toggle("is-open", open);
  menu.setAttribute("aria-expanded", String(open));
});
nav.addEventListener("click", (event) => {
  if (event.target.closest("a")) closeMenu();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && nav.classList.contains("is-open")) {
    closeMenu();
    menu.focus();
  }
});

// All lesson excerpts are contiguous prefixes from the public repository's
// recorded model outputs. No inference service or fabricated live output.
let selectedGrade = 0;
function renderLesson() {
  const lessonIndex = Number($("#lesson-select").value);
  const lesson = data.examples[lessonIndex];
  const grade = data.grades[selectedGrade];
  const answer = lesson.answers[selectedGrade];
  $("#lesson-question").textContent = lesson.question;
  $("#lesson-count").textContent =
    `${String(lessonIndex + 1).padStart(2, "0")} / 03`;
  $("#lesson-level").textContent = grade.name.toUpperCase();
  $("#lesson-range").textContent =
    `${selectedGrade === 5 ? "GRADE" : "GRADES"} ${grade.range}`;
  $("#lesson-answer").textContent = answer.text;
  $(".excerpt-marker").hidden = !answer.excerpt;
  $("#lesson-source").href = answer.source;
  $$(".grade-buttons button").forEach((button) => {
    button.setAttribute(
      "aria-pressed",
      String(Number(button.dataset.grade) === selectedGrade),
    );
  });
}
$("#lesson-select").addEventListener("change", renderLesson);
$$(".grade-buttons button").forEach((button) => {
  button.addEventListener("click", () => {
    selectedGrade = Number(button.dataset.grade);
    renderLesson();
  });
  button.addEventListener("keydown", (event) => {
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
    event.preventDefault();
    const buttons = $$(".grade-buttons button");
    const index = Number(button.dataset.grade);
    const next =
      event.key === "Home"
        ? 0
        : event.key === "End"
          ? 5
          : (index + (event.key === "ArrowRight" ? 1 : 5)) % 6;
    buttons[next].focus();
    buttons[next].click();
  });
});

const scoreFormat = new Intl.NumberFormat("en-US", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});
function scoresFor(model, dataset, metric) {
  if (dataset !== "average") return model.datasets[dataset][metric];
  const sets = Object.values(model.datasets);
  return data.grades.map(
    (_, index) =>
      sets.reduce((sum, set) => sum + set[metric][index], 0) / sets.length,
  );
}
function makeElement(tag, className, text) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text !== undefined) element.textContent = text;
  return element;
}
function renderResults() {
  const dataset = $("#dataset-select").value;
  const baseline = data.benchmark[Number($("#baseline-select").value)];
  const tuned = data.benchmark[9];
  const baseScores = scoresFor(baseline, dataset, "target");
  const tunedScores = scoresFor(tuned, dataset, "target");
  const baseAri = scoresFor(baseline, dataset, "ari");
  const tunedAri = scoresFor(tuned, dataset, "ari");
  const chart = document.createDocumentFragment();
  const table = document.createDocumentFragment();
  data.grades.forEach((grade, index) => {
    const row = makeElement("div", "chart-row");
    row.setAttribute("role", "img");
    row.setAttribute(
      "aria-label",
      `${grade.name}, grades ${grade.range}: ${baseline.name} with prompting ${scoreFormat.format(baseScores[index])} percent; Classroom AI ${scoreFormat.format(tunedScores[index])} percent.`,
    );
    const label = makeElement("div", "chart-grade", grade.name);
    label.append(makeElement("small", "", `Grades ${grade.range}`));
    const pair = makeElement("div", "chart-pair");
    [baseScores[index], tunedScores[index]].forEach((value, series) => {
      const track = makeElement("div", "chart-track");
      const bar = makeElement("div", `chart-bar${series ? " tuned" : ""}`);
      bar.style.setProperty("--value", `${value}%`);
      bar.append(
        makeElement("span", "bar-value", `${scoreFormat.format(value)}%`),
      );
      track.append(bar);
      pair.append(track);
    });
    row.append(label, pair);
    chart.append(row);
    const tr = document.createElement("tr");
    const heading = makeElement("th", "", `${grade.name} (${index + 1})`);
    heading.scope = "row";
    tr.append(heading);
    [
      baseScores[index],
      tunedScores[index],
      baseAri[index],
      tunedAri[index],
    ].forEach((value) =>
      tr.append(makeElement("td", "", scoreFormat.format(value))),
    );
    table.append(tr);
  });
  $("#comparison-chart").replaceChildren(chart);
  $("#results-table-body").replaceChildren(table);
  $("#baseline-legend").textContent = `${baseline.name} + prompting`;
  const change =
    tunedScores.reduce(
      (sum, value, index) => sum + value - baseScores[index],
      0,
    ) / 6;
  const strong = makeElement(
    "strong",
    "",
    `${change >= 0 ? "+" : "−"}${scoreFormat.format(Math.abs(change))} percentage points`,
  );
  $("#comparison-summary").replaceChildren(
    strong,
    document.createTextNode(" on average across the six target levels."),
  );
  const description =
    dataset === "average"
      ? "An unweighted average across four datasets."
      : `Dataset: ${data.datasets.find((item) => item.key === dataset).name}.`;
  $("#chart-caption").textContent =
    `${description} Each value is the percentage of answers assigned to the requested grade by the integrated readability measure. This is reading-level alignment, not question-answer accuracy.`;
  $("#results-caption").textContent =
    `${description} ${baseline.name} with prompting versus fine-tuned GPT-4o mini. ARI is mapped to six grade bands; closeness to the target band is better.`;
}
$("#dataset-select").addEventListener("change", renderResults);
$("#baseline-select").addEventListener("change", renderResults);
if (data) {
  renderLesson();
  renderResults();
}

let scrollQueued = false;
function updateProgress() {
  const available = document.documentElement.scrollHeight - window.innerHeight;
  const percentage =
    available > 0
      ? Math.max(0, Math.min(100, (window.scrollY / available) * 100))
      : 0;
  $("#reading-progress").style.width = `${percentage}%`;
  scrollQueued = false;
}
function queueProgress() {
  if (!scrollQueued) {
    scrollQueued = true;
    window.requestAnimationFrame(updateProgress);
  }
}
window.addEventListener("scroll", queueProgress, { passive: true });
window.addEventListener("resize", queueProgress);
$$("details").forEach((details) =>
  details.addEventListener("toggle", queueProgress),
);
updateProgress();

const copyButton = $("#copy-citation");
copyButton.addEventListener("click", async () => {
  const citation = $("#bibtex").textContent;
  let success = false;
  if (window.isSecureContext && navigator.clipboard) {
    try {
      await navigator.clipboard.writeText(citation);
      success = true;
    } catch {
      /* Fall back to local copying. */
    }
  }
  if (!success) {
    const textarea = document.createElement("textarea");
    textarea.value = citation;
    textarea.setAttribute("readonly", "");
    textarea.style.cssText = "position:fixed;left:-9999px;top:0";
    document.body.append(textarea);
    textarea.select();
    try {
      success = document.execCommand("copy");
    } catch {
      success = false;
    }
    textarea.remove();
    copyButton.focus({ preventScroll: true });
  }
  if (success) {
    copyButton.textContent = "Copied!";
    $("#copy-status").textContent = "Citation copied to clipboard.";
    window.setTimeout(() => {
      copyButton.textContent = "Copy citation";
    }, 2200);
  } else {
    const range = document.createRange();
    range.selectNodeContents($("#bibtex"));
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    copyButton.textContent = "Citation selected";
    $("#copy-status").textContent =
      "Use your keyboard to copy the selected citation, or download the BibTeX file.";
  }
});
