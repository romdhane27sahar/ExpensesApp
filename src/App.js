import { useState } from "react";
import ExpensesContainer from "./Components/ExpensesContainer/ExpensesContainer";
import NewExpense from "./Components/FormContainer/NewExpense";

function App() {
  //liste d'objets json
  const expensesData = [
    {
      id: 1,
      title: "Food",
      price: 5400,
      date: new Date(2024, 2, 9),

    },
    {
      id: 2,
      title: "Newpc",
      price: 3000,
      date: new Date(2023, 7, 29),

    },
    {
      id: 3,
      title: "Education",
      price: 7200,
      date: new Date(2023, 9, 15),

    },
    {
      id: 4,
      title: "Voyage",
      price: 2500,
      date: new Date(2025, 3, 10),

    }
  ]


  const[AllExpenses,setAllExpenses]=useState(expensesData);
  const getdata=(data)=>{
    //console.log(data); //alors l'objet ajouté à partir du form est recupere et affiché au niveau du parent (app)
  setAllExpenses([...AllExpenses,data])//ajouter l'ojet ajouté à la fin de la liste de data 
  
  }


  
  return (
    <div>
      {/* {expensesData.map((expense) => {
        return <ExpencesItem 
          title={expense.title}
          price={expense.price}
          date={expense.date}>

        </ExpencesItem>

        // methode 1 : envoyer TOTES les donnees 
        //{expensesData.map((expense)=>{return <ExpencesItem data={expense}></ExpencesItem> ;
      })} */}
      <NewExpense getData={getdata}></NewExpense>

      {/* <ExpensesContainer expencesData={expensesData}></ExpensesContainer> */}
            <ExpensesContainer expencesData={AllExpenses}></ExpensesContainer>




    </div>
  );
}

export default App;
