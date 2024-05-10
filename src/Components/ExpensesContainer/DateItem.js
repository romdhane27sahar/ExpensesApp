import React from 'react'
import("./DateItem.css")

const DateItem = ({date}) => {
    const year = date.getFullYear();
    //const  month = date.getMonth();
    const month =date.toLocaleString('en-US',{month:"long"}); //convertit date en langue de la region mise dans le browser que tu vas traviller avec 
//parameter1 : langue-region parameter2 ce que tu veux extraire de la date +son format (long car on veut recuperer le nom du month )
const day =date.toLocaleString('en-US',{day:"2-digit"}); 
return (
    <div className='expense-date'>
        <div className='expense-date__month'>{month}</div>
        <div className='expense-date__year'>{year}</div>
        <div className='expense-date__day'>{day}</div>


      
    </div>
  )
}

export default DateItem
