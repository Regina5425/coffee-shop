import { Fragment } from "react";
import AboutCoffeeItem from "../components/aboutCoffeeItem/AboutCoffeeItem";
import CoffeeHero from "../components/hero/CoffeeHero";

const OurCoffeeItem = () => {
  return (
    <Fragment>
      <CoffeeHero>Our Coffee</CoffeeHero>
      <AboutCoffeeItem />
    </Fragment>
  );
};

export default OurCoffeeItem;
