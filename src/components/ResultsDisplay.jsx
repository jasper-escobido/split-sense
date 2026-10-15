import '../App.css'

function ResultsDisplay(props) {
    let totalMonthlyAmount;

    const pesoFormatter = new Intl.NumberFormat('en-PH', {
        style: 'currency',
        currency: 'PHP'
    })

    if (props.currentType === "Hourly") {
        totalMonthlyAmount = props.currentAmount * (props.hoursPerWeek * 52 / 12);
    } else {
        totalMonthlyAmount = props.currentAmount;
    }

    const resultNeeds = totalMonthlyAmount * (props.currentBudgetSplit.needs / 100);
    const resultWants = totalMonthlyAmount * (props.currentBudgetSplit.wants / 100);
    const resultSavings = totalMonthlyAmount * (props.currentBudgetSplit.savings / 100);


    return (
        <div className="flex flex-col gap-3 bg-pale-slate-800 p-3 rounded-md">
            <p id="incomeBasis" className="text-pale-slate-100">Breakdown based on {props.incomeBasis} income.</p>
            <p id="amountNeeds" className="text-pale-slate-100">For Needs: {pesoFormatter.format(resultNeeds.toFixed(2))}</p>
            <p id="amountWants" className="text-pale-slate-100">For Wants: {pesoFormatter.format(resultWants.toFixed(2))}</p>
            <p id="amountSavings" className="text-pale-slate-100">For Savings: {pesoFormatter.format(resultSavings.toFixed(2))}</p>
        </div>
    )
}

export default ResultsDisplay
