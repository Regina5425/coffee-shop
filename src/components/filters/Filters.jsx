import { useState } from "react";
import "./Filters.css";

const Filters = (props) => {
  const [term, setTerm] = useState("");

  const updateSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setTerm(term);
    props.onUpdateSearch(term);
  };

  const buttonsData = [
    { name: "all", label: "All" },
    { name: "brazil", label: "Brazil" },
    { name: "kenya", label: "Kenya" },
    { name: "columbia", label: "Columbia" },
  ];

  const buttons = buttonsData.map(({ name, label }) => {
    const active = props.filter === name;
    const clazz = active ? "filter-btn--active" : "filter-btn";

    return (
      <button
        key={name}
        className={`filter-btn ${clazz}`}
        onClick={() => {
          props.onFilterSelect(name);
        }}
      >
        {label}
      </button>
    );
  });

  return (
    <div className='filter'>
      <label>
        <span className='filter-label'>Looking for</span>
        <input
          className='filter-input'
          type='text'
          placeholder='start typing here...'
          value={term}
          onChange={updateSearch}
        />
      </label>
      <label>
        <span className='filter-label'>Or filter</span>
        {buttons}
      </label>
    </div>
  );
};

export default Filters;
