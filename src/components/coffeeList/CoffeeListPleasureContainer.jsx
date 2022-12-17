import { Fragment } from "react";
import CoffeeList from "./CoffeeList";
import coffeeDB from "../coffeeDB";

const CoffeeListPleasureContainer = (props) => {
	const initialState ={
		data: coffeeDB
	}

	const visibleData = initialState.data;

  return (
    <Fragment>
      <CoffeeList visibleData={visibleData} />
    </Fragment>
  );
};

export default CoffeeListPleasureContainer;
