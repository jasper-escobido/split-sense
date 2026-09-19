import './App.css'
import { useState } from 'react'
import Header from './components/Header.jsx'
import IncomeInput from './components/IncomeInput.jsx';
import BudgetSlider from './components/BudgetSliders.jsx';

function App() {
  const [amount, setAmount] = useState(0);
  const [budgetSplit, setBudgetSplit] = useState({needs: 50, wants: 30, savings: 20});
  
  function updateNeeds(newValue) {
    setBudgetSplit({...budgetSplit, needs: newValue});
  }

  return (
    <>
      <Header />
      <IncomeInput changeAmount={setAmount} />
      <BudgetSlider />
    </>
  )
}

export default App
