import { Fragment } from "react";
import AboutCoffee from "../aboutCoffee/AboutCoffee";
import CoffeeListContainer from "../coffeeList/CoffeeListContainer";
import CoffeeHero from "../hero/CoffeeHero";

const OurCoffeePage = () => {
  return (
    <Fragment>
      <CoffeeHero>Our Coffee</CoffeeHero>
      <AboutCoffee />
			<CoffeeListContainer/>
    </Fragment>
  );
};

export default OurCoffeePage;
