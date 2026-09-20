import '../App.css'

function BudgetSliders(props) {

    return(
        <>
        <label htmlFor='needSlider'>Needs: </label>
        <input type="range" id="needSlider" value={props.currentValue.needs} onChange={(e) => props.onSliderChange("needs", Number(e.target.value))} />

        <label htmlFor='wantSlider'>Wants: </label>
        <input type="range" id="wantSlider" value={props.currentValue.wants} onChange={(e) => props.onSliderChange("wants", Number(e.target.value))} />

        <label htmlFor='savingSlider'>Savings: </label>
        <input type="range" id="savingSlider" value={props.currentValue.savings} onChange={(e) => props.onSliderChange("savings", Number(e.target.value))} />
        </>
    )
}

export default BudgetSliders