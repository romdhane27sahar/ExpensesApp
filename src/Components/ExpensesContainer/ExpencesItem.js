import React,{useState} from 'react'
import "./ExpencesItem.css"
import DateItem from './DateItem'

const ExpencesItem = ({title,price,date}) => {

    //console.log(props);
    


    const [newTitle,setNewTitle]= useState(title);
    const update =() =>{
        console.log(newTitle)
        setNewTitle("ffffff")
        console.log(newTitle)

    };
    /*let newTitle =title;

    function update(){
        console.log(newTitle)
        newTitle ="ffffff"
        console.log(newTitle)


    }*/

    return (
        <div className='expense-item'>
            <div ><DateItem date={date}/></div>
            <div className='expense-item__description'>
                <h2>{newTitle}</h2>
                <button onClick={update}>UPDATE TITLE</button>
                <div className='expense-item__price'>{price}</div>
            </div>
        </div>
    )


}

export default ExpencesItem
