import './App.css'
import { useState } from 'react'
import Header from './components/Header.jsx'
import IncomeInput from './components/IncomeInput.jsx';
import BudgetSliders from './components/BudgetSliders.jsx';
import PresetButtons from './components/PresetButtons.jsx';

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
    <>
      <Header />
      <IncomeInput changeAmount={setAmount} />
      <BudgetSliders onSliderChange={updateBudget} currentValue={budgetSplit}  />
      <PresetButtons changePreset={applyPreset}/>
      <ResultsDisplay /*Ill add the props for both amount and budgetSplit so that in the future ResultsDisplay will get the data it needed */ />
    </>
  )
}

export default App
