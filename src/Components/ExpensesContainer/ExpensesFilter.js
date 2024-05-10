import "./ExpensesFilter.css";

const ExpensesFilter = ({ years, setSelectedYear }) => {
  return (
    <div className="expenses-filter expenses-filter__control">
      <label>Filter by year</label>
      <select
        onChange={(event) => {
          setSelectedYear(event.target.value);
        }}
      >
        {years.map((item) => {
          return <option value={item}>{item}</option>;
        })}

      </select>
    </div>
  );
};

export default ExpensesFilter;