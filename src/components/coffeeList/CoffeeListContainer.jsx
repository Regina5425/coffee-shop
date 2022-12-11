import { Fragment } from "react";
import Filters from "../filters/Filters";
import CoffeeList from "./CoffeeList";
import coffeeDB from "../coffeeDB";
import { useState } from "react";

const CoffeeListContainer = (props) => {
	const initialState ={
		data: coffeeDB
	}
  const [term, setTerm] = useState("");
  const [filter, setFilter] = useState("all");

  const searchCoffee = (items, term) => {
    if (term.length === 0) {
      return items;
    }
    return items.filter((item) => {
      return item.title.toLowerCase().indexOf(term) > -1;
    });
  };

	const filterCoffee = (items, filter) => {
		switch (filter) {
			case 'brazil': 
				return items.filter(item => item.country === 'Brazil');
			case 'kenya':
				return items.filter(item => item.country === 'Kenya');
			case 'columbia':
				return items.filter(item => item.country === 'Columbia');
			default:
				return items;
		}
	}

  const visibleData = filterCoffee(searchCoffee(initialState.data, term), filter);

  const onUpdateSearch = (term) => {
    setTerm(term);
  };

	const onFilterSelect = (filter) => {
		setFilter(filter);
	}

  return (
    <Fragment>
      <Filters filter={filter} onUpdateSearch={onUpdateSearch} onFilterSelect={onFilterSelect} />
      <CoffeeList visibleData={visibleData} />
    </Fragment>
  );
};

export default CoffeeListContainer;
