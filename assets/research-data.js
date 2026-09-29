// Published Supplementary Table 3; local public example outputs; accuracy_figure.ipynb.
// See CONTENT_NOTES.md for exact provenance and scope.
window.CLASSROOM_DATA = {
  grades: [
    {
      key: "primary-low",
      name: "Lower elementary",
      range: "1–2",
      count: 71524,
    },
    {
      key: "primary-middle",
      name: "Middle elementary",
      range: "3–4",
      count: 324910,
    },
    {
      key: "primary-high",
      name: "Upper elementary",
      range: "5–6",
      count: 302485,
    },
    {
      key: "middle",
      name: "Middle school",
      range: "7–9",
      count: 275131,
    },
    {
      key: "high",
      name: "High school",
      range: "10–12",
      count: 130779,
    },
    {
      key: "adult",
      name: "College / adult",
      range: "13+",
      count: 182590,
    },
  ],
  datasets: [
    {
      key: "average",
      name: "Average · all four datasets",
    },
    {
      key: "synthetic",
      name: "GPT-4o questions",
    },
    {
      key: "scienceqa",
      name: "ScienceQA (open-ended)",
    },
    {
      key: "eli5",
      name: "ELI5_Category",
    },
    {
      key: "natural",
      name: "Natural Questions",
    },
  ],
  benchmark: [
    {
      name: "GPT-4o mini",
      datasets: {
        synthetic: {
          target: [0.13, 11.22, 36.22, 50.68, 27.3, 22.16],
          ari: [3.35, 3.77, 3.99, 4.36, 4.87, 5.4],
        },
        scienceqa: {
          target: [8.04, 16.8, 37.28, 54.3, 47.32, 21.95],
          ari: [2.67, 3.4, 3.84, 4.48, 5.1, 5.13],
        },
        eli5: {
          target: [0.05, 5.36, 37.99, 64.18, 32.58, 14.96],
          ari: [3.51, 3.77, 3.96, 4.32, 4.82, 5.35],
        },
        natural: {
          target: [0.25, 5.38, 25.42, 49.94, 35.55, 18.0],
          ari: [3.29, 3.75, 4.07, 4.4, 4.66, 4.9],
        },
      },
    },
    {
      name: "GPT-4o",
      datasets: {
        synthetic: {
          target: [0.27, 14.46, 31.62, 52.7, 35.14, 21.62],
          ari: [3.39, 3.61, 3.89, 4.26, 4.96, 5.31],
        },
        scienceqa: {
          target: [4.7, 14.17, 32.33, 52.39, 48.74, 16.95],
          ari: [2.98, 3.6, 3.95, 4.51, 5.14, 5.04],
        },
        eli5: {
          target: [0.13, 8.71, 41.29, 62.38, 26.47, 13.06],
          ari: [3.49, 3.63, 3.83, 4.21, 4.6, 5.22],
        },
        natural: {
          target: [1.2, 14.31, 34.09, 56.67, 35.34, 15.53],
          ari: [2.97, 3.36, 3.78, 4.22, 4.67, 4.92],
        },
      },
    },
    {
      name: "Llama 3.3 · 70B",
      datasets: {
        synthetic: {
          target: [0.14, 10.81, 31.89, 48.51, 29.19, 12.57],
          ari: [3.22, 3.65, 4.04, 4.44, 4.81, 5.19],
        },
        scienceqa: {
          target: [6.1, 17.69, 34.5, 47.81, 49.86, 14.66],
          ari: [2.48, 3.38, 3.89, 4.68, 5.16, 5.06],
        },
        eli5: {
          target: [0.02, 2.56, 18.3, 53.89, 47.74, 18.87],
          ari: [3.54, 3.92, 4.29, 4.73, 5.11, 5.35],
        },
        natural: {
          target: [0.59, 6.04, 17.73, 44.25, 41.8, 14.53],
          ari: [3.31, 3.86, 4.34, 4.72, 4.93, 5.08],
        },
      },
    },
    {
      name: "Llama 3.1 · 70B",
      datasets: {
        synthetic: {
          target: [0.27, 10.68, 34.6, 53.51, 24.73, 9.19],
          ari: [3.2, 3.69, 4.03, 4.39, 4.75, 5.1],
        },
        scienceqa: {
          target: [5.37, 18.98, 31.09, 49.43, 46.57, 11.74],
          ari: [2.49, 3.35, 3.96, 4.65, 4.96, 4.97],
        },
        eli5: {
          target: [0.03, 2.76, 19.89, 56.1, 43.5, 13.99],
          ari: [3.52, 3.87, 4.29, 4.7, 5.06, 5.3],
        },
        natural: {
          target: [0.66, 5.4, 16.32, 45.08, 39.04, 15.45],
          ari: [3.28, 3.9, 4.4, 4.67, 4.84, 5.07],
        },
      },
    },
    {
      name: "Llama 3.1 · 8B",
      datasets: {
        synthetic: {
          target: [0.14, 13.67, 40.96, 46.22, 27.7, 10.95],
          ari: [3.26, 3.58, 3.92, 4.35, 4.83, 5.18],
        },
        scienceqa: {
          target: [6.8, 23.76, 38.69, 49.52, 44.19, 10.21],
          ari: [2.5, 3.17, 3.78, 4.48, 4.91, 4.85],
        },
        eli5: {
          target: [0.02, 4.1, 24.85, 57.44, 43.17, 12.85],
          ari: [3.49, 3.77, 4.16, 4.64, 5.04, 5.27],
        },
        natural: {
          target: [0.49, 6.1, 17.98, 45.94, 39.77, 14.12],
          ari: [3.32, 3.82, 4.31, 4.61, 4.86, 5.06],
        },
      },
    },
    {
      name: "Qwen 2.5 · 72B",
      datasets: {
        synthetic: {
          target: [0.0, 9.87, 42.97, 63.38, 37.97, 13.24],
          ari: [3.59, 3.7, 3.8, 4.43, 5.07, 5.27],
        },
        scienceqa: {
          target: [4.16, 19.1, 45.65, 59.9, 51.51, 9.81],
          ari: [2.92, 3.33, 3.62, 4.42, 5.03, 4.86],
        },
        eli5: {
          target: [0.03, 5.19, 40.64, 68.9, 49.29, 8.88],
          ari: [3.57, 3.68, 3.87, 4.44, 5.1, 5.22],
        },
        natural: {
          target: [0.1, 5.07, 20.16, 47.16, 43.34, 15.57],
          ari: [3.52, 3.8, 4.28, 4.67, 4.97, 5.03],
        },
      },
    },
    {
      name: "Gemma 2 · 27B",
      datasets: {
        synthetic: {
          target: [1.14, 17.16, 41.76, 54.73, 25.14, 29.46],
          ari: [2.97, 3.36, 3.64, 3.94, 4.55, 5.38],
        },
        scienceqa: {
          target: [15.53, 37.91, 47.49, 46.32, 28.12, 12.65],
          ari: [1.92, 2.91, 3.28, 3.74, 4.47, 4.65],
        },
        eli5: {
          target: [0.13, 11.99, 43.18, 59.49, 27.61, 25.5],
          ari: [3.19, 3.53, 3.76, 4.11, 4.71, 5.42],
        },
        natural: {
          target: [7.58, 31.97, 40.49, 40.26, 21.74, 12.7],
          ari: [2.34, 2.77, 3.08, 3.58, 4.02, 4.22],
        },
      },
    },
    {
      name: "Phi-4 · 14B",
      datasets: {
        synthetic: {
          target: [0.0, 9.87, 39.46, 55.27, 31.49, 12.57],
          ari: [3.72, 3.86, 4.02, 4.35, 5.07, 5.43],
        },
        scienceqa: {
          target: [1.71, 16.12, 39.95, 58.25, 48.29, 12.65],
          ari: [3.05, 3.49, 3.81, 4.52, 5.2, 5.07],
        },
        eli5: {
          target: [0.0, 3.48, 35.27, 67.16, 46.45, 12.56],
          ari: [3.84, 3.93, 4.05, 4.47, 5.18, 5.51],
        },
        natural: {
          target: [0.1, 3.47, 17.51, 45.15, 47.91, 23.06],
          ari: [3.72, 4.05, 4.32, 4.77, 5.2, 5.17],
        },
      },
    },
    {
      name: "Mixtral · 8×7B",
      datasets: {
        synthetic: {
          target: [0.68, 7.57, 18.02, 50.81, 34.39, 21.94],
          ari: [3.83, 3.97, 4.62, 4.54, 4.92, 5.22],
        },
        scienceqa: {
          target: [1.96, 10.6, 15.96, 45.54, 45.73, 11.17],
          ari: [3.16, 3.87, 4.55, 4.61, 5.03, 4.75],
        },
        eli5: {
          target: [0.02, 2.0, 4.81, 44.56, 48.85, 20.65],
          ari: [4.28, 4.41, 5.1, 4.93, 5.25, 5.35],
        },
        natural: {
          target: [0.09, 2.16, 7.01, 41.49, 44.66, 13.32],
          ari: [3.96, 4.46, 4.94, 4.81, 5.04, 4.95],
        },
      },
    },
    {
      name: "Classroom AI",
      datasets: {
        synthetic: {
          target: [67.3, 82.97, 73.11, 70.54, 63.24, 73.78],
          ari: [1.32, 2.14, 3.42, 4.56, 5.33, 5.4],
        },
        scienceqa: {
          target: [65.99, 67.08, 52.74, 58.83, 65.4, 43.16],
          ari: [1.21, 2.2, 3.56, 4.45, 5.26, 5.67],
        },
        eli5: {
          target: [57.41, 72.82, 60.0, 65.18, 64.68, 66.16],
          ari: [1.36, 2.24, 3.55, 4.38, 5.34, 5.88],
        },
        natural: {
          target: [46.65, 61.9, 58.21, 58.71, 49.07, 33.54],
          ari: [1.37, 2.07, 3.27, 4.23, 4.99, 5.49],
        },
      },
    },
  ],
  examples: [
    {
      question: "What do plants need to grow?",
      title: "Growing plants",
      answers: [
        {
          text: "Plants need water to grow strong. They also need sunlight every day. Sunlight helps them make their food. Food is made from air too. Air has something called carbon dioxide. Plants use it to make food. They also need good soil always. Soil gives them the right support. Support helps them stand up tall. Tall plants can get more sunlight.",
          excerpt: true,
          source:
            "https://github.com/harryoh99/ClassroomAI/blob/main/src/example_results/results_finetuned_ppl/finetuned_gpt4o_mini_primary-low.txt",
        },
        {
          text: "Plants need water to grow strong. They also need sunlight every day. Air is important for plants too. It helps them make their food. Food is made from sunlight and air. Soil gives plants the nutrients they need. Nutrients help plants grow big and healthy.",
          excerpt: false,
          source:
            "https://github.com/harryoh99/ClassroomAI/blob/main/src/example_results/results_finetuned_ppl/finetuned_gpt4o_mini_primary-middle.txt",
        },
        {
          text: "Plants require several essential elements for growth. They need sunlight, which provides energy through photosynthesis. Water is also crucial, as it helps transport nutrients. Air, specifically carbon dioxide, is necessary for photosynthesis. Nutrients from soil, such as nitrogen and phosphorus, are vital. Temperature affects plant growth, with most thriving in moderate conditions. Humidity levels impact transpiration rates and overall health.",
          excerpt: true,
          source:
            "https://github.com/harryoh99/ClassroomAI/blob/main/src/example_results/results_finetuned_ppl/finetuned_gpt4o_mini_primary-high.txt",
        },
        {
          text: "Plants require several essential elements to thrive and develop properly. Firstly, they need water to facilitate various physiological processes. Water is crucial for photosynthesis, nutrient transport, and maintaining turgor pressure. It also helps regulate temperature and supports the plant's overall health. Secondly, plants need sunlight to produce energy through photosynthesis.",
          excerpt: true,
          source:
            "https://github.com/harryoh99/ClassroomAI/blob/main/src/example_results/results_finetuned_ppl/finetuned_gpt4o_mini_middle.txt",
        },
        {
          text: "Plants require several essential elements to thrive and develop properly. Firstly, they need water to transport nutrients and maintain turgor pressure within their cells. Water is absorbed through the roots and distributed throughout the plant via specialized tissues called xylem.",
          excerpt: true,
          source:
            "https://github.com/harryoh99/ClassroomAI/blob/main/src/example_results/results_finetuned_ppl/finetuned_gpt4o_mini_high.txt",
        },
        {
          text: "Plants require several essential elements to thrive and develop properly. Firstly, they need sunlight, which provides energy for photosynthesis, the process by which plants convert carbon dioxide and water into glucose and oxygen. This energy is crucial for plant growth and development. Secondly, plants need water, which is absorbed through their roots and transported to all parts of the plant.",
          excerpt: true,
          source:
            "https://github.com/harryoh99/ClassroomAI/blob/main/src/example_results/results_finetuned_ppl/finetuned_gpt4o_mini_adult.txt",
        },
      ],
    },
    {
      question: "What is a beat in music?",
      title: "Musical rhythm",
      answers: [
        {
          text: "A beat is a strong sound. It happens over and over. We feel it in our body. It makes us want to move. The beat is like a pulse. It keeps the music going. Imagine you are tapping foot. You tap on the floor. That tapping is like a beat. It helps us keep time. Time is when things happen.",
          excerpt: true,
          source:
            "https://github.com/harryoh99/ClassroomAI/blob/main/src/example_results/results_finetuned_ppl/finetuned_gpt4o_mini_primary-low.txt",
        },
        {
          text: "A beat is a regular sound. It's like a heartbeat, strong and steady. In music, beats are repeated sounds. They help us keep the rhythm going. Imagine clapping your hands to a song. You clap on every beat, right? That's because beats give music its pulse. Beats can be fast or slow too.",
          excerpt: true,
          source:
            "https://github.com/harryoh99/ClassroomAI/blob/main/src/example_results/results_finetuned_ppl/finetuned_gpt4o_mini_primary-middle.txt",
        },
        {
          text: "A beat in music is a rhythmic pulse or pattern. It's the underlying foundation that gives music its sense of time. Think of it like a heartbeat, steady and consistent. In music, beats are often grouped together to form measures. Measures are like containers that hold a specific number of beats.",
          excerpt: true,
          source:
            "https://github.com/harryoh99/ClassroomAI/blob/main/src/example_results/results_finetuned_ppl/finetuned_gpt4o_mini_primary-high.txt",
        },
        {
          text: "A beat in music refers to the rhythmic pulse or underlying pattern that gives music its sense of time and structure. It's the basic unit of time in music, often created by a combination of strong and weak accents, which helps to create a sense of forward motion and energy.",
          excerpt: true,
          source:
            "https://github.com/harryoh99/ClassroomAI/blob/main/src/example_results/results_finetuned_ppl/finetuned_gpt4o_mini_middle.txt",
        },
        {
          text: "A beat in music refers to a rhythmic pulse or pattern that provides the underlying structure and foundation for a musical composition. It is typically created by a combination of sounds, such as drums, percussion instruments, or other rhythmic elements, which are played in a repeating sequence.",
          excerpt: true,
          source:
            "https://github.com/harryoh99/ClassroomAI/blob/main/src/example_results/results_finetuned_ppl/finetuned_gpt4o_mini_high.txt",
        },
        {
          text: "A beat in music refers to the rhythmic pulse or underlying tempo that underlies a musical composition, providing a sense of forward motion and energy. It is created by the regular occurrence of strong and weak accents, typically produced by percussion instruments such as drums, but also sometimes by other instruments like bass or guitar.",
          excerpt: true,
          source:
            "https://github.com/harryoh99/ClassroomAI/blob/main/src/example_results/results_finetuned_ppl/finetuned_gpt4o_mini_adult.txt",
        },
      ],
    },
    {
      question: "What causes a rainbow?",
      title: "Rainbows",
      answers: [
        {
          text: "Rainbows are made by sunlight. Sunlight is made of colors. These colors are hidden inside. When sunlight hits raindrops, it bends. The bending makes the colors separate. This creates a circle of colors. We see this circle as a rainbow. It happens when the sun shines. The sun shines on raindrops outside. The raindrops are in the air.",
          excerpt: true,
          source:
            "https://github.com/harryoh99/ClassroomAI/blob/main/src/example_results/results_finetuned_ppl/finetuned_gpt4o_mini_primary-low.txt",
        },
        {
          text: "Rainbows happen when sunlight meets water. Sunlight is made up of many colors. These colors are like different kinds of light. When sunlight goes into the air, it bends. This bending makes the colors spread out. The colors then come together again. But they don't mix, they stay separate. Each color has its own special way.",
          excerpt: true,
          source:
            "https://github.com/harryoh99/ClassroomAI/blob/main/src/example_results/results_finetuned_ppl/finetuned_gpt4o_mini_primary-middle.txt",
        },
        {
          text: "A rainbow is formed when sunlight passes through water droplets in the air. The sunlight is made up of different colors, like red, orange, yellow, green, blue, indigo, and violet. When the sunlight hits the water droplet, it bends or refracts, changing direction slightly. As the light exits the water droplet, it separates into its different colors.",
          excerpt: true,
          source:
            "https://github.com/harryoh99/ClassroomAI/blob/main/src/example_results/results_finetuned_ppl/finetuned_gpt4o_mini_primary-high.txt",
        },
        {
          text: "A rainbow is formed when sunlight passes through water droplets in the air. The sunlight is made up of different colors, like red, orange, yellow, green, blue, indigo, and violet. When the sunlight enters a water droplet, it slows down and bends, which is called refraction.",
          excerpt: true,
          source:
            "https://github.com/harryoh99/ClassroomAI/blob/main/src/example_results/results_finetuned_ppl/finetuned_gpt4o_mini_middle.txt",
        },
        {
          text: "A rainbow is formed when sunlight passes through water droplets in the air, such as those found in mist or rain. The light is refracted, or bent, as it enters the water droplet, causing it to split into its individual colors. This process is called dispersion, and it occurs because different colors of light have slightly different wavelengths.",
          excerpt: true,
          source:
            "https://github.com/harryoh99/ClassroomAI/blob/main/src/example_results/results_finetuned_ppl/finetuned_gpt4o_mini_high.txt",
        },
        {
          text: "A rainbow is formed when sunlight passes through raindrops in the atmosphere, causing the light to refract, or bend, as it enters and exits the droplet. The bending of light occurs because different colors of light have varying wavelengths, which causes them to slow down and change direction at different rates when passing through a medium like water.",
          excerpt: true,
          source:
            "https://github.com/harryoh99/ClassroomAI/blob/main/src/example_results/results_finetuned_ppl/finetuned_gpt4o_mini_adult.txt",
        },
      ],
    },
  ],
  scienceqaAccuracy: {
    base: 89.42,
    tuned: [85.94, 85.64, 86.03, 85.59, 87.02, 86.4],
  },
};
