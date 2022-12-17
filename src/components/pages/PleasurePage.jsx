import { Fragment } from "react";
import AboutGoods from "../aboutGoods/AboutGoods";
import CoffeeListPleasureContainer from "../coffeeList/CoffeeListPleasureContainer";
import CoffeeHero from "../hero/CoffeeHero";

const PleasurePage = () => {
  return (
    <Fragment>
      <CoffeeHero>For Your Pleasure</CoffeeHero>
      <AboutGoods />
      <CoffeeListPleasureContainer />
    </Fragment>
  );
};

export default PleasurePage;
