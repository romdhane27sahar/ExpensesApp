
// // // export default NewExpense
// // import { useState } from "react";
// // import "./NewExpense.css";

// // const NewExpense = () => {
// //   const [title, setTitle] = useState("");
// //   const [price, setPrice] = useState("");
// //   const [date, setDate] = useState("");

// //   //on veut optimiser au lieu d'avoir 3states  stet on veut avoir 1
// // const [formInputs,setFormInputs]=useState({

// // });
// //   const titleChangeHandler = (event) => {
// //     //    console.log(event.target.value);

// //     setTitle(event.target.value);
// //   };
// //   const priceChangeHandler = (event) => {
// //     setPrice(event.target.value);
// //   };
// //   const dateChangeHandler = (event) => {
// //     setDate(event.target.value);
// //   };

// //   const submitForm = (event) => {
// //     //fonctionnement par defaut du form , kif tu submit l form la page reloads donc il affiche fel console fisaa les valeurs w baad yetfasskou 
// //     event.preventDefault();
// //     console.log(title);
// //     console.log(price);
// //     console.log(date);
// //     setTitle("");
// //     setPrice("");
// //     setDate("");
// //   };
// //   return (
// //     <div className="new-expense">
// //       <form onSubmit={submitForm}>
// //         <div className="new-expense__controls">
// //           <div className="new-expense__control">
// //             <label>Title</label>
// //             <input
// //               value={title}
// //               required
// //               placeholder="Title"
// //               onChange={titleChangeHandler}
// //             />
// //           </div>
// //           <div className="new-expense__control">
// //             <label>Price</label>
// //             <input
// //               required
// //               placeholder="Price"
// //               type="number"
// //               min="0"
// //               value={price}
// //               onChange={priceChangeHandler}
// //             />
// //           </div>
// //           <div className="new-expense__control">
// //             <label>Date</label>
// //             <input
// //               value={date}
// //               onChange={dateChangeHandler}
// //               required
// //               type="date"
// //               min="2022-01-01"
// //               max="2025-12-31"
// //             />
// //           </div>
// //         </div>
// //         <div className="new-expense__actions">
// //           <button>Cancel</button>
// //           <button type="submit">Add Expense</button>
// //         </div>
// //       </form>
// //     </div>
// //   );
// // };

// // export default NewExpense;

/************************************************ */

// import { useState } from "react";
// import "./NewExpense.css";


// let id =5; // declarer l'id en dehors du component w mech f westou kater kol maa it re-renders l component tsir redefinition de la variable id (maaneha s'ecrase w yet3awed yetsnaa avec la valeur 5 ---> on aura 2 objets par exple ajoutés avec la meme valeur :5) 

// const NewExpense = ({getData ,handleClose}) => {
//   // const [title, setTitle] = useState("");
//   // const [price, setPrice] = useState("");
//   // const [date, setDate] = useState("");
//   const [formInputs, setFormInputs] = useState({
//     title: "",
//     price: "",
//     date: "",
//   });
//   // const titleChangeHandler = (event) => {
//   //   // setTitle(event.target.value);
//   //   setFormInputs((prevState) => {
//   //     return { ...prevState, title: event.target.value };
//   //   });
//   // };
//   // const priceChangeHandler = (event) => {
//   //   // setPrice(event.target.value);
//   //   setFormInputs({ ...formInputs, price: event.target.value });
//   // };
//   // const dateChangeHandler = (event) => {
//   //   // setDate(event.target.value);
//   //   setFormInputs({ ...formInputs, date: event.target.value });
//   // };
//   const onChangeHandler = ({ target }) => {
//     const { name, value } = target;
//     setFormInputs((prevState) => {
//       return { ...prevState, [name]: value };
//     });
//   };
//   const submitHandler = (event) => {
//     event.preventDefault();
//     //console.log(formInputs);
    
//   //afficher le nouvel element ajouté dans la liste des items 
//     //getData(formInputs);
//     getData({
//       //
//       id:id,
//       title: formInputs.title,
//       price :+formInputs.price, //connvertir le price en number 
//       date : new Date(formInputs.date)//chaine-->date

//     });
//     id++




//     setFormInputs({
//       title: "",
//       price: "",
//       date: "",
//     });
//     // console.log(title);
//     // console.log(price);
//     // console.log(date);
//     // setTitle("");
//     // setPrice("");
//     // setDate("");
//   };
//   return (
//     <div className="new-expense">
//       <form onSubmit={submitHandler}>
//         <div className="new-expense__controls">
//           <div className="new-expense__control">
//             <label>Title</label>
//             <input
//               required
//               type="text"
//               placeholder="Title"
//               name="title"
//               value={formInputs.title}
//               onChange={onChangeHandler}
//             />
//           </div>
//           <div className="new-expense__control">
//             <label>Price</label>
//             <input
//               required
//               type="number"
//               placeholder="Price"
//               min="0"
//               step="0.25"
//               name="price"
//               value={formInputs.price}
//               onChange={onChangeHandler}
//             />
//           </div>
//           <div className="new-expense__control">
//             <label>Date</label>
//             <input
//               required
//               type="date"
//               min="2021-01-01"
//               max="2025-12-31"
//               name="date"
//               value={formInputs.date}
//               onChange={onChangeHandler}
//             />
//           </div>
//         </div>
//         <div className="new-expense__actions">
//           <button type="reset" onClick={handleClose}>Cancel</button>
//           <button type="submit">Ajouter</button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default NewExpense;


import { useState } from "react";
import "./NewExpense.css";
import AddExpenseForm from "./AddExpenseForm";

const NewExpense = ({ getData }) => {
  const [isClosed, setIsClosed] = useState(true);
  const handelClose = () => {
    setIsClosed(!isClosed);
  };
  return (
    <div className="new-expense">
      {isClosed ? (
        <AddExpenseForm handelClose={handelClose} getData={getData} />
      ) : (
        <button onClick={handelClose}>Add New Expense</button>
      )}
    </div>
  );
};

export default NewExpense;