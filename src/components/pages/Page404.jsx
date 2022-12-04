import { Fragment } from "react";
import CoffeeHero from "../hero/CoffeeHero";
import Component404 from './../404/404';

const Page404 = () => {
  return (
    <Fragment>
      <CoffeeHero>Error Page</CoffeeHero>
			<Component404/>
    </Fragment>
  );
};

export default Page404;