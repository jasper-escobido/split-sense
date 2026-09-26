import '../App.css'

function IncomeInput(props) {

    return (
        <>
        <label htmlFor="Amount" className="text-pale-slate-100">Enter Your Amount: </label>
        <input type="number" className="text-pale-slate-100 bg-pale-slate-800" id="Amount" onChange={(e) => props.changeAmount(Number(e.target.value))} />

        </>
    )
}

export default IncomeInput