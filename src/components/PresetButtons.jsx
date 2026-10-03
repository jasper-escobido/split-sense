import '../App.css'

function PresetButtons (props) {
    const buttonStyle = "bg-india-green-600 text-onyx-900 px-2 py-1 rounded-md cursor-pointer hover:bg-india-green-500"

    return (
        <div className="flex gap-3 bg-pale-slate-800 p-3 rounded-md">
            <button type="button" className={buttonStyle} onClick={() => props.changePreset({needs: 50, wants: 30, savings: 20})} >Default</button>
            <button type="button" className={buttonStyle} onClick={() => props.changePreset({needs: 60, wants: 20, savings: 20})} >High Rent City</button>
            <button type="button" className={buttonStyle} onClick={() => props.changePreset({needs: 30, wants: 20, savings: 50})} >Living with Parents</button>
        </div>
    )
}

export default PresetButtons