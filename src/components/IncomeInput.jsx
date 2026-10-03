import '../App.css'

function IncomeInput(props) {

    return (
        <div className="bg-pale-slate-800 p-3 rounded-md">
            <label htmlFor="Amount" className="text-pale-slate-100">Enter Your Amount: </label>
            <input type="number" className="text-pale-slate-100 bg-pale-slate-700" id="Amount" onChange={(e) => props.changeAmount(Number(e.target.value))} />
        </div>
    )
}

export default IncomeInput