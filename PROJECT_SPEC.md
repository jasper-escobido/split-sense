**Problem & Goal**

Problem: Fresh graduates entering the workforce lack a simple, visual framework to map their first real salaries against the actual costs of independent living.

Goal: Create an interactive web application that allows users to input their expected salary and dynamically allocate their budget using the 50/30/20 rule (Needs, Wants, Savings), helping them make informed financial decisions before accepting a job or moving out.

**Target User**

Recent college graduates and young professionals who are setting up their first independent budget and have little to no personal finance experience.

**MVP Feature List**

 - Income Input: A clean input field for gross/net income with a toggle to switch between Monthly Salary and Hourly Wage calculations.

 - Dynamic Sliders (The "Make Room" approach): Three interconnected sliders (Needs, Wants, Savings). If a user wants to increase one category, they must first lower another to "make room," ensuring the total never exceeds 100%.

 - Situation Presets: Quick-select buttons that auto-adjust the sliders for common scenarios (e.g., "Default 50/30/20", "High Rent City 60/20/20", "Living with Parents 30/20/50").

 - Contextual Tooltips: Small, subtle info icons that explain why a user might want to adjust their percentages based on their living situation.

 - Real-Time Text Output: A clean, instantly updating text summary breaking down the exact monetary value for each category based on the current slider percentages.

**Stretch Goals (Version 2+)**

 - Data visualization (Donut charts or bar graphs using a library like Chart.js or Recharts).

 - Export feature (Download the budget breakdown as a PDF or Image).

 - Dark Mode toggle.

 - Backend integration (User authentication to save different budget scenarios to a database).

**Tech Stack**

Framework: React.js (via Vite).

    - Reasoning: The core feature of this app is highly interactive state management (sliders affecting math, which instantly affects the UI). React's component-based architecture and state hooks (useState) are perfectly suited for this, eliminating the need for messy vanilla DOM manipulation.

Styling: Tailwind CSS.

    - Reasoning: Allows for rapid, modern UI development. Since the MVP doesn't have complex animations, utility classes will keep the bundle size small and the design clean and responsive.

**Core Components / Architecture**
This is a purely frontend application for the MVP. All data lives in the React state.

 - State (App.jsx): Manages incomeAmount (number), incomeType (string), and budgetSplit (object).

 - Header / Layout: Main container wrapper.

 - IncomeInput: Handles the money input and hourly/monthly toggle.

 - PresetButtons: Buttons that update the budgetSplit state on click.

 - BudgetSliders: The core logic component ensuring the three sliders sum to 100%.

 - ResultsDisplay: Pure UI component that takes the state as props and renders the final math.