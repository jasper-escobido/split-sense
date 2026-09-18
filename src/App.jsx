import './App.css'
import { useState } from 'react'
import Header from './components/Header.jsx'
import IncomeInput from './components/IncomeInput.jsx';

function App() {
  const [amount, setAmount] = useState(0);
  console.log("Current amount in App:", amount)

  return (
    <>
      <Header />
      <IncomeInput changeAmount={setAmount} />
    </>
  )
}

export default App
