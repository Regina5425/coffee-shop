import { Fragment } from "react";
import AboutCoffee from "../components/aboutCoffee/AboutCoffee";
import CoffeeListContainer from "../components/coffeeList/CoffeeListContainer";
import CoffeeHero from "../components/hero/CoffeeHero";

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
