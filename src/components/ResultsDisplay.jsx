import '../App.css'

function ResultsDisplay(props) {
    const resultNeeds = props.currentAmount * (props.currentBudgetSplit.needs / 100);
    const resultWants = props.currentAmount * (props.currentBudgetSplit.wants / 100);
    const resultSavings = props.currentAmount * (props.currentBudgetSplit.savings / 100);

    return (
        <>
        <p id="amountNeeds">For Needs: {resultNeeds.toFixed()}</p>
        <p id="amountWants">For Wants: {resultWants.toFixed()}</p>
        <p id="amountSavings">For Savings: {resultSavings.toFixed()}</p>
        </>
    )
}

export default ResultsDisplay