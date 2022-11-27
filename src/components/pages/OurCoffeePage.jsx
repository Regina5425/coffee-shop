import { Fragment } from "react";
import AboutCoffee from "../aboutCoffee/AboutCoffee";
import CoffeeList from "../coffeeList/CoffeeList";
import Filters from "../filters/Filters";
import CoffeeHero from "../hero/CoffeeHero";

const OurCoffeePage = () => {
  return <Fragment>
		<CoffeeHero>Our Coffee</CoffeeHero>
		<AboutCoffee/>
		<Filters/>
		<CoffeeList/>
	</Fragment>;
};

export default OurCoffeePage;
