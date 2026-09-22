import '../App.css'

function PresetButtons (props) {


    return (
        <>
        <button type="button" onClick={() => props.changePreset({needs: 50, wants: 30, savings: 20})} >Default</button>
        <button type="button" onClick={() => props.changePreset({needs: 60, wants: 20, savings: 20})} >High Rent City</button>
        <button type="button" onClick={() => props.changePreset({needs: 30, wants: 20, savings: 50})} >Living with Parents</button>
        </>
    )
}

export default PresetButtons