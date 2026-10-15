# Split Sense

Split Sense is a simple budgeting tool for exploring how income could be divided between **needs**, **wants**, and **savings**. Start with the classic 50/30/20 budget, adjust the percentages, and see the monthly amounts and chart update together.

## Live Demo: https://split-sense-green.vercel.app/

## Features

- Enter monthly or hourly income. Hourly income is estimated as a monthly amount using the hours per week you enter and 52 weeks per year.
- Adjust the needs, wants, and savings percentages with sliders. The split is kept within 100%.
- Try the included budget presets: Default, High Rent City, and Living with Parents.
- View the resulting amounts in Philippine pesos and compare categories in a pie chart.
- Switch the displayed income basis between net and gross.

> Split Sense is for budgeting exploration and education. Its presets are examples, not personalized financial advice.

## Getting started

### Requirements

- Node.js and npm

### Install and run

```bash
npm install
npm run dev
```

Open the local URL printed by Vite in your terminal.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local development server. |
| `npm run build` | Build the app for production. |
| `npm run preview` | Preview the production build locally. |
| `npm run lint` | Run ESLint. |

## Built with

- React
- Vite
- Tailwind CSS
- Recharts

## How the budget is calculated

The default split assigns 50% to needs, 30% to wants, and 20% to savings. The app multiplies the entered monthly income (or hourly income converted to a monthly estimate) by each category's percentage. Amounts are formatted as PHP.

## Learning goals

This project brings together React state, reusable components, controlled range inputs, conditional UI, currency formatting with `Intl.NumberFormat`, and data visualization with Recharts.
