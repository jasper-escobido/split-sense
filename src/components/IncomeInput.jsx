import '../App.css'

function IncomeInput(props) {
    const buttonStyle = "bg-india-green-600 text-onyx-900 px-2 py-1 rounded-md cursor-pointer hover:bg-india-green-500"
    const currentBasis = props.incomeBasis;

    return (
        <div className="bg-pale-slate-800 p-3 rounded-md">
            <div id="inputAmount">
                <label htmlFor="Amount" className="text-pale-slate-100">Enter Your Amount: </label>
                <input type="number" className="text-pale-slate-100 bg-pale-slate-700 w-full" id="Amount" onChange={(e) => {
                    const userInput = Number(e.target.value);
                    if (userInput < 0) {
                          props.changeAmount(0);
                          props.giveWarning(true);
                          
                    } else {
                          props.changeAmount(userInput);
                          props.giveWarning(false);
                    }
                    }} />
                      {props.showWarning && 
                            <div className='bg-pale-slate-700 text-pale-slate-100 m-1 flex flex-col'>
                            <p className='text-pale-slate-100 p-1'>Negative Numbers are not recommended</p>
                            </div>
                          }
            </div>

            <div id="toggleButtons" className="py-2 flex gap-1">
                <button className={buttonStyle} onClick={() => props.onTypeChange()}>{props.currentType}</button>
                <button className={buttonStyle } onClick={() => {
                    if (props.incomeBasis === "Net") {
                        props.onIncomeBasisChange("Gross");
                    } else {
                        props.onIncomeBasisChange("Net");
                    }

                }}>{currentBasis}</button>
            </div>

             {props.currentType === "Hourly" && (
                <div id="toggleHoursPerWeek">
                    <label htmlFor="hoursPerWeek" className="text-pale-slate-100">Enter your Hours per week: </label>
                    <input id="hoursPerWeek" className="text-pale-slate-100 bg-pale-slate-700 w-full" type="number" value={props.hoursPerWeek} onChange={(e) => props.onHoursPerWeekChange(e.target.value)} />
                </div>
             )}
        </div>
    )
}

export default IncomeInput