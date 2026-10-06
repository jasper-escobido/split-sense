import { PieChart, Pie, Tooltip, Cell, Legend, ResponsiveContainer} from 'recharts';


function BudgetChart(props) {
    const data = [
        {name: 'Needs', value: props.currentBudgetSplit.needs},
        {name: 'Wants', value: props.currentBudgetSplit.wants},
        {name: 'Savings', value: props.currentBudgetSplit.savings},
    ];

    const colors = ['#10b981', '#64748b', '#94a3b8'];
    
    return (
        <div id="main-container" className='flex h-80 w-full flex-col gap-3 rounded-md bg-pale-slate-800 p-3'>
            <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                    <Pie data={data} dataKey="value" nameKey="name" outerRadius={100}>
                        {data.map((entry, index) => (
                            <Cell key={index} fill={colors[index]} />
                        ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                </PieChart>
            </ResponsiveContainer>
        </div>
    )
}

export default BudgetChart