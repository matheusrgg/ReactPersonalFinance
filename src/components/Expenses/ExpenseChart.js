import React from "react";
import Chart from "../Charts/Chart";


const ExpensesChart = props =>{
    const chartDataPoints = [
        { label: 'Jan', value: 0},
        { label: 'Feb', value: 0},
        { label: 'Mar', value: 0},
        { label: 'Apri', value: 0},
        { label: 'May', value: 0},
        { label: 'Jun', value: 0},
        { label: 'July', value: 0},
        { label: 'Ags', value: 0},
        { label: 'Set', value: 0},
        { label: 'Oct', value: 0},
        { label: 'Novem', value: 0},
        { label: 'Dec', value: 0},
    ]

    for(const expense of props.expenses){
        const expenseMonth = expense.date.getMonth(); //starting at 0 => January => 0
        chartDataPoints[expenseMonth].value += expense.amount

    }
    return (
        <Chart dataPoints={chartDataPoints} />
    )
}

export default ExpensesChart