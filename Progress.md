# PROGRESS

Project: 50/30/20 Budget Planner (React + Vite + Tailwind)
Last milestone: At a 320px viewport, the income input fits and preset buttons stack full-width without overflow 
Next smallest step: decide how to explain the 160-hours-per-month assumption in Hourly mode

MVP status: all five MVP features working (income input + toggle, sliders, presets, tooltips, live results)
Stretch goals done: BudgetChart (Recharts pie chart)

## Concepts understood
- Slider max={100} sets the visual scale; the JS `if` enforces the "make room" rule
- e vs e.target.value (event object vs the input's value)
- Parameters: a function handed the parts that change (category, max, newValue)
- Debug loop with console.log: log where a value enters and where it is used; compare the two
- Props names come from the attribute names in the parent's JSX; the child can only use those names
- Props that hold values are read without `()`; props that hold setter functions are called with `()`
- React props: value props are read directly; function props are called to trigger behavior
- Shared parent state: pass values down as props and callbacks down so children can request updates 
- Decimal display: the argument to `.toFixed()` controls how many decimal places are shown 
- `Intl.NumberFormat`: creates a reusable locale-aware formatter for displaying numbers, including currency 
- Hourly estimate: weekly hours × 52 ÷ 12 gives average monthly hours; multiply by hourly rate for monthly income 
- Numeric inputs: keep the input value as text while editing so it can be temporarily empty; JavaScript converts numeric strings during arithmetic 
- Conditional rendering with `&&`: `{condition && <JSX />}` shows the JSX only when the condition is true
- JSX that draws the screen goes in the `return` area, not inside event handlers
- Separate state for separate questions (`amount` = how much; warning = should the message show)

## Decisions
- Negative income is treated as 0 and a warning appears below the input (chosen over blocking input or alert())
- Input box may still display the negative number while results use 0; accepted for the MVP because the warning explains it
- Warning state lives in App.jsx (works fine; could be moved closer to IncomeInput later)
- Gross/Net choice labels the entered amount; it does not estimate taxes or deductions
- JavaScript floating-point rounding can show 37.03 for a calculated 37.035; accepted as a rare display limitation for the MVP
- Range slider pointer-drag precision is accepted as a stretch goal; keyboard arrow adjustment works smoothly

## Log
- Refactoring repeated code: merged 3 slider handlers into handleSlidersChange(maxCategory, newCategory, newValue); parts that differ are handed in as parameters; e.target.value is always a string, so Number() is needed 
- Negative income bug: traced with console.log; the value passed unchanged from IncomeInput to ResultsDisplay, so no validation existed — 2026-10-10
- Input validation: negative income becomes 0 and sets a warning state in App; the message shows via conditional rendering with && on the showWarning prop — 2026-10-10
- Props and naming: a prop name mismatch (newWarningText vs giveWarning) caused a red error; read the error, compared the names in parent and child — 2026-10-10
- Conditional rendering (&&) with a prop value: read values without (), call setters with (); .warningText failed because the prop holds true/false directly — 2026-10-10
- Gross/Net basis toggle: selection updates the result label; budget calculations stay the same — 2026-10-13
- 320px overflow: the income input's default 231px width exceeded the card; `w-full` fixed it, and preset buttons now stack full-width on narrow screens — 2026-10-14

## Unresolved / revisit
- Input box still displays the negative number while results use 0 (accepted for now; revisit "controlled components")
- Remove leftover console.log lines (ResultsDisplay and IncomeInput) if any remain
- No dedicated desktop design; the mobile-first max-width layout is used on desktop too
- Warning style is plain text; yellow outline on the input is an optional follow-up using the same state

## Next options
- Style BudgetChart.jsx
- Improve range slider pointer-drag precision (stretch goal)
- Later: dark/light mode toggle, export feature
