import './App.css'
import { useState } from 'react'
import Header from './components/Header.jsx'
import IncomeInput from './components/IncomeInput.jsx';
import BudgetSliders from './components/BudgetSliders.jsx';
import PresetButtons from './components/PresetButtons.jsx';
import ResultsDisplay from './components/ResultsDisplay.jsx';

function App() {
  const [amount, setAmount] = useState(0);
  const [budgetSplit, setBudgetSplit] = useState({needs: 50, wants: 30, savings: 20});
  
  function updateBudget(category, newValue) {
    setBudgetSplit({...budgetSplit, [category]: newValue});
  }

  function applyPreset(newBudgetSplit) {
    setBudgetSplit(newBudgetSplit);
  }

  return (
    <div id="main-container" className='max-w-md mx-auto flex flex-col gap-3 p-14 bg-pale-slate-400'>
      <Header />
      <IncomeInput changeAmount={setAmount} />
      <BudgetSliders onSliderChange={updateBudget} currentValue={budgetSplit}  />
      <PresetButtons changePreset={applyPreset}/>
      <ResultsDisplay currentAmount={amount} currentBudgetSplit={budgetSplit} />
    </div>

  )
}

export default App
