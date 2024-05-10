import { useState } from "react";
import "./NewExpense.css";
let id = 5;
const AddExpensesForm = ({ getData, handelClose }) => {
  // const [title, setTitle] = useState("");
  // const [price, setPrice] = useState("");
  // const [date, setDate] = useState("");
  const [formInputs, setFormInputs] = useState({
    title: "",
    price: "",
    date: "",
  });
  // const titleChangeHandler = (event) => {
  //   // setTitle(event.target.value);
  //   setFormInputs((prevState) => {
  //     return { ...prevState, title: event.target.value };
  //   });
  // };
  // const priceChangeHandler = (event) => {
  //   // setPrice(event.target.value);
  //   setFormInputs({ ...formInputs, price: event.target.value });
  // };
  // const dateChangeHandler = (event) => {
  //   // setDate(event.target.value);
  //   setFormInputs({ ...formInputs, date: event.target.value });
  // };
  const onChangeHandler = ({ target }) => {
    const { name, value } = target;
    setFormInputs((prevState) => {
      return { ...prevState, [name]: value };
    });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    getData({
      id: id,
      title: formInputs.title,
      price: +formInputs.price,
      date: new Date(formInputs.date),
    });
    id++;
    setFormInputs({
      title: "",
      price: "",
      date: "",
    });
    // console.log(title);
    // console.log(price);
    // console.log(date);
    // setTitle("");
    // setPrice("");
    // setDate("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            required
            type="text"
            placeholder="Title"
            name="title"
            value={formInputs.title}
            onChange={onChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Price</label>
          <input
            required
            type="number"
            placeholder="Price"
            min="0"
            step="0.25"
            name="price"
            value={formInputs.price}
            onChange={onChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            required
            type="date"
            min="2021-01-01"
            max="2025-12-31"
            name="date"
            value={formInputs.date}
            onChange={onChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="reset" onClick={handelClose}>
          Cancel
        </button>
        <button type="submit">Ajouter</button>
      </div>
    </form>
  );
};

export default AddExpensesForm;