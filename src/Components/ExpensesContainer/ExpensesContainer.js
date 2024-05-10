import React from 'react'
import ExpencesItem from './ExpencesItem'
import "./ExpensesContainer.css"
import ChartData from './Chart/ChartData'
import ExpensesFilter from './ExpensesFilter'
import { useState } from "react";

const ExpensesContainer = ({expencesData}) => {

  const years= ["All", ...new Set(expencesData.map(item => item.date.getFullYear()).sort())] //expensesData trajj3 liste mais feha des donnees duplicated  ==> pour eliminer la duplication , on utilise la structure de données Set qui utilise keys  ===> ces keys sont necessairement uniques
   
console.log([... years]) //new Set retourne un objet or on  a besoin d'une liste comment la convertir ?==> utiliser style cating<=> on met years dans un array  ==> on aura tableau fih objet , pour extraire le contenu de l'objet et le mettre directement dans le tableau , on utilise le spread operartor 

//tasnaa3 state pour tracker l year selected 
const[selectedYear,setSelectedYear]=useState (years[0])
console.log("ss", selectedYear);

//filtering the data based on the selected year
//1ere methode 
// const filteredExpenses = expencesData.filter((item)=>{

// return item.date.getFullYear()==selectedYear
// })
 
//filter + ALL 
const filteredExpenses = expencesData.filter((item)=>{

  return selectedYear =="All" ? true
  : item.date.getFullYear()==selectedYear
  })
//2eme methode : map 

// const filteredExpenses= expencesData.map((item)=>{
//   if(item.date.getFullYear()==selectedYear){
//     return item;
//   }
// }) ==> tkarraj unefined ki talka l element heka doesn't meet the condition elli houwa baad genere error donc estaamalna l for elli houwa mayhott l element f tableau que s'il meets the condition ==> pas de possibilité de undefined  

//for
// for(let i=0;i<expencesData.length;i++){
//   if(item.date.getFullYear()==selectedYear){
//     //filteredExpenses.push(expencesData[i])
//     filteredExpenses=[... filteredExpenses,expencesData[0]]//2eme facon (alternative à filteredExpenses.push(expencesData[i]))
//   }
// }


return (
    
    <div className='expences'> 

    <ExpensesFilter setSelectedYear={setSelectedYear} years={years}></ExpensesFilter>

      <ChartData expensesData={filteredExpenses}></ChartData>

        {filteredExpenses.map((expense) => {
        return <ExpencesItem 
          title={expense.title}
          price={expense.price}
          date={expense.date}
          key={expense.id}
          >


        </ExpencesItem>

      })}
    </div>
  )
}



export default ExpensesContainer
