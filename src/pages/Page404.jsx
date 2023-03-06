import { Fragment } from "react";
import CoffeeHero from "../components/hero/CoffeeHero";
import Comp404 from '../components/404/comp404';

const Page404 = () => {
  return (
    <Fragment>
      <CoffeeHero>Error Page</CoffeeHero>
			<Comp404/>
    </Fragment>
  );
};

export default Page404;