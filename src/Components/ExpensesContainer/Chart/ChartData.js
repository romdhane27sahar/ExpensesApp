import React from 'react'
import Chart from './Chart'

const ChartData = ({expensesData}) => {
    const data =[ 
        {month :"Jan",value:0},
        {month :"Feb",value:0},
        {month :"Mar",value:0},
        {month :"Apr",value:0},
        {month :"May",value:0},
        {month :"Jui",value:0},
        {month :"Jul",value:0},
        {month :"Aug",value:0},
        {month :"Sep",value:0},
        {month :"Oct",value:0},
        {month :"Nov",value:0},
        {month :"Dec",value:0},

    ];
    for(const expense of expensesData){
      //console.log(expense.date.getMonth())
      data[expense.date.getMonth()].value +=expense.price //price jebneha men expensesData
        
    }

    //je veux extraire l values wahadhom et puis leur appliquer Max
    const values=data.map((item)=>item.value);
    //on veut juste  essayer l max 
     //appliquer max (et avec ... car si on fait max(values) il va retourner NaN car il considere keyennek ktlou fait somme taa tableau,/objet  <=> makrach les elemenst du tableau )
      const max = Math.max( ...values);
      console.log(max)
      //afficher le total des expences   
      const total =values.reduce((a,b)=>{
        return a+b;
      });
      console.log(total)

  return (
    <Chart data ={data} max={max} total={total}></Chart>
  );
};

export default ChartData
