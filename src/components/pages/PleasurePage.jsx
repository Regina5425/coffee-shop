import { Fragment } from "react";
import AboutGoods from "../aboutGoods/AboutGoods";
import CoffeeList from "../coffeeList/CoffeeList";
import CoffeeHero from "../hero/CoffeeHero";

const PleasurePage = () => {
  return <Fragment>
		<CoffeeHero>For Your Pleasure</CoffeeHero>
		<AboutGoods/>
		<CoffeeList/>
	</Fragment>;
};

export default PleasurePage;
