import '../App.css'

function BudgetSliders(props) {
    const maxNeeds = 100 - (props.currentValue.wants + props.currentValue.savings);
    const maxWants = 100 - (props.currentValue.needs + props.currentValue.savings);
    const maxSavings = 100 - (props.currentValue.wants + props.currentValue.needs);

    return(
        <>
        <label htmlFor='needSlider'>Needs: </label>
        <input type="range" id="needSlider" value={props.currentValue.needs} max={maxNeeds} onChange={(e) => props.onSliderChange("needs", Number(e.target.value))} />

        <label htmlFor='wantSlider'>Wants: </label>
        <input type="range" id="wantSlider" value={props.currentValue.wants} max={maxWants} onChange={(e) => props.onSliderChange("wants", Number(e.target.value))} />

        <label htmlFor='savingSlider'>Savings: </label>
        <input type="range" id="savingSlider" value={props.currentValue.savings} max={maxSavings} onChange={(e) => props.onSliderChange("savings", Number(e.target.value))} />
        </>
    )
}

export default BudgetSliders