# split-sense (Budget Allocator)

React-based financial tool designed for young professionals and fresh graduates to visualize and allocate their salary using customizable budgeting rules (like the 50/30/20 rule). 

[**Link to Live Demo**] (Add your Vercel/Netlify link here later!)

## 📸 Preview
*(Add a screenshot or GIF of your working calculator here once it is finished!)*

## 🎯 The Problem It Solves
Fresh graduates entering the workforce often lack a simple, visual framework to map their first real salaries against the actual costs of independent living. SplitSense allows users to input their expected salary and dynamically allocate their budget to see if they can comfortably afford their living situation.

## ✨ Features
* **Dynamic Budget Sliders:** Interconnected sliders (Needs, Wants, Savings) that mathematically constrain each other so the total never exceeds 100%.
* **Situation Presets:** Quick-select buttons for common scenarios (e.g., "High Rent City", "Living with Parents").
* **Flexible Income Input:** Toggle between Monthly Salary and Hourly Wage.
* **Real-Time Calculation:** Instant, text-based financial breakdown as the user adjusts their percentages.

## 🛠️ Tech Stack
* **React.js (Vite):** Chosen specifically to handle the complex state management of the interconnected sliders, ensuring the UI updates instantly without page reloads.
* **Tailwind CSS:** Used for rapid, responsive UI development and clean utility-class styling.

## 🧠 Architecture & Planning
For a deep dive into the component structure, state management plan, and future stretch goals, please see the [Project Specification Document](./PROJECT_SPEC.md).

## 🚀 How to Run Locally

1. Clone the repository:

   ```bash
   git clone [https://github.com/yourusername/split-sense.git](https://github.com/yourusername/split-sense.git)

2. Navigate to the project directory:

    ```bash
    cd split-sense

3. Install dependencies:

    ```bash
    npm install

4. Start the development server:

     ```bash
     npm run dev