import { Fragment } from "react";
import AboutCoffeeItem from "../aboutCoffeeItem/AboutCoffeeItem";
import CoffeeHero from "../hero/CoffeeHero";

const OurCoffeeItem = () => {
  return (
    <Fragment>
      <CoffeeHero>Our Coffee</CoffeeHero>
      <AboutCoffeeItem />
    </Fragment>
  );
};

export default OurCoffeeItem;
