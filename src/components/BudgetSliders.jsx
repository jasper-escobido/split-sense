import '../App.css'

function BudgetSliders(props) {
    const maxNeeds = 100 - (props.currentValue.wants + props.currentValue.savings);
    const maxWants = 100 - (props.currentValue.needs + props.currentValue.savings);
    const maxSavings = 100 - (props.currentValue.wants + props.currentValue.needs);

    return(
        <div className="flex flex-col gap-3">
            <div className='flex flex-col gap-2'>
                <label htmlFor='needSlider' className="text-pale-slate-100">Needs: </label>
                <input type="range" id="needSlider" className="accent-india-green-600 max-w-md" value={props.currentValue.needs} max={maxNeeds} onChange={(e) => props.onSliderChange("needs", Number(e.target.value))} />
            </div>
            
            <div className='flex flex-col gap-2'>
                <label htmlFor='wantSlider' className="text-pale-slate-100">Wants: </label>
                <input type="range" id="wantSlider" className="accent-india-green-600 max-w-md" value={props.currentValue.wants} max={maxWants} onChange={(e) => props.onSliderChange("wants", Number(e.target.value))} />
            </div>
           
            <div className='flex flex-col gap-2'>
                <label htmlFor='savingSlider' className="text-pale-slate-100">Savings: </label>
                <input type="range" id="savingSlider" className="accent-india-green-600 max-w-md" value={props.currentValue.savings} max={maxSavings} onChange={(e) => props.onSliderChange("savings", Number(e.target.value))} />
            </div>
        </div>

    )
}

export default BudgetSliders