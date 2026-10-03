import '../App.css'

function ResultsDisplay(props) {
    let totalMonthlyAmount = 0;

    if (props.currentType === "Hourly") {
        totalMonthlyAmount = props.currentAmount * 160;
    } else {
        totalMonthlyAmount = props.currentAmount;
    }

    const resultNeeds = totalMonthlyAmount * (props.currentBudgetSplit.needs / 100);
    const resultWants = totalMonthlyAmount * (props.currentBudgetSplit.wants / 100);
    const resultSavings = totalMonthlyAmount * (props.currentBudgetSplit.savings / 100);


    return (
        <div className="flex flex-col gap-3 bg-pale-slate-800 p-3 rounded-md">
            <p id="amountNeeds" className="text-pale-slate-100">For Needs: {resultNeeds.toFixed()}</p>
            <p id="amountWants" className="text-pale-slate-100">For Wants: {resultWants.toFixed()}</p>
            <p id="amountSavings" className="text-pale-slate-100">For Savings: {resultSavings.toFixed()}</p>
        </div>
    )
}

export default ResultsDisplay