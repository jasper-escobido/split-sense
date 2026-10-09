import '../App.css'
import { useState } from 'react'

function BudgetSliders(props) {
    const maxNeeds = 100 - (props.currentValue.wants + props.currentValue.savings);
    const maxWants = 100 - (props.currentValue.needs + props.currentValue.savings);
    const maxSavings = 100 - (props.currentValue.wants + props.currentValue.needs);
    const [needsToolTip, setNeedsToolTip] = useState(false);
    const [wantsToolTip, setWantsToolTip] = useState(false);
    const [savingsToolTip, setSavingsToolTip] = useState(false);

  function handleSlidersChange(maxCategory, newCategory, newValue) {
    if (newValue > maxCategory) {
        return;
    } else {
        props.onSliderChange(newCategory, newValue);
    }
  }

    return(
        <div className="flex flex-col gap-3 bg-pale-slate-800 p-3 rounded-md">
            
            <div className='flex flex-col gap-2'>
                <div className='flex gap-2 relative'>
                     <label htmlFor='needSlider' className="text-pale-slate-100">Needs: {props.currentValue.needs}% </label> 
                     <button id='tool-Tip-needs' className='text-pale-slate-100' onClick={() => setNeedsToolTip(!needsToolTip)}>ⓘ</button>
                     {needsToolTip && 
                     <div className='bg-pale-slate-700 text-pale-slate-100 absolute p-1 top-8 left-8 z-10 w-48 flex flex-col'>
                        <button className='text-pale-slate-100 cursor-pointer hover:bg-pale-slate-300 rounded-full w-6 h-6 self-end' onClick={() => setNeedsToolTip(false)}>X</button>
                        <p className='text-pale-slate-100 p-1'>Needs (50%): Rent, groceries, utilities, and essential transport.</p>
                    </div>}
                </div>
                <input type="range" id="needSlider" className="accent-india-green-600 max-w-md" value={props.currentValue.needs} max={100} onChange={(e) => handleSlidersChange(maxNeeds, "needs", Number(e.target.value))} />
            </div>
            
            <div className='flex flex-col gap-2'>
                <div className='flex gap-2 relative'>
                    <label htmlFor='wantSlider' className="text-pale-slate-100">Wants: {props.currentValue.wants}% </label>
                     <button id='tool-Tip-wants' className='text-pale-slate-100' onClick={() => setWantsToolTip(!wantsToolTip)}>ⓘ</button>
                     {wantsToolTip && 
                     <div className='bg-pale-slate-700 text-pale-slate-100 absolute p-1 top-8 left-8 z-10 w-48 flex flex-col'>
                        <button className='text-pale-slate-100 cursor-pointer hover:bg-pale-slate-300 rounded-full w-6 h-6 self-end' onClick={() => setWantsToolTip(false)}>X</button>
                        <p className='text-pale-slate-100 p-1'>Wants (30%): Dining out, entertainment, subscriptions, and hobbies.</p>
                    </div>}
                </div>
                <input type="range" id="wantSlider" className="accent-india-green-600 max-w-md" value={props.currentValue.wants} max={100} onChange={(e) => handleSlidersChange(maxWants, "wants", Number(e.target.value))} />
            </div>
           
            <div className='flex flex-col gap-2'>
                <div className='flex gap-2 relative'>
                    <label htmlFor='savingSlider' className="text-pale-slate-100">Savings: {props.currentValue.savings}% </label>
                    <button id='tool-Tip-savings' className='text-pale-slate-100' onClick={() => setSavingsToolTip(!savingsToolTip)}>ⓘ</button>
                    {savingsToolTip && 
                    <div className='bg-pale-slate-700 text-pale-slate-100 absolute p-1 top-8 left-8 z-10 w-48 flex flex-col'>
                        <button className='text-pale-slate-100 cursor-pointer hover:bg-pale-slate-300 rounded-full w-6 h-6 self-end' onClick={() => setSavingsToolTip(false)}>X</button>
                        <p className='text-pale-slate-100 p-1'>Savings (20%): Emergency fund, investments, and debt repayment.</p>
                    </div>}
                </div>
                <input type="range" id="savingSlider" className="accent-india-green-600 max-w-md" value={props.currentValue.savings} max={100} onChange={(e) => handleSlidersChange(maxSavings, "savings", Number(e.target.value))} />
            </div>
        </div>

    )
}

export default BudgetSliders