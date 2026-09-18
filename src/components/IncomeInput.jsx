import '../App.css'

function IncomeInput(props) {

    return (
        <>
        <label htmlFor="Amount">Enter Your Amount: </label>
        <input type="number" id="Amount" onChange={(e) => props.changeAmount(Number(e.target.value))} />

        </>
    )
}

export default IncomeInput