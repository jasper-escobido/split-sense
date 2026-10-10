import '../App.css'

function IncomeInput(props) {
    const buttonStyle = "bg-india-green-600 text-onyx-900 px-2 py-1 rounded-md cursor-pointer hover:bg-india-green-500"
    return (
        <div className="bg-pale-slate-800 p-3 rounded-md">
            <div id="inputAmount">
                <label htmlFor="Amount" className="text-pale-slate-100">Enter Your Amount: </label>
                <input type="number" className="text-pale-slate-100 bg-pale-slate-700" id="Amount" onChange={(e) => {
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

            <div id="toggleButtons" className="py-2">
                <button className={buttonStyle} onClick={() => props.onTypeChange()}>{props.currentType}</button>
            </div>
        </div>
    )
}

export default IncomeInput