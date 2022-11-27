import { Fragment } from "react";
import About from "../about/About";
import Best from "../best/Best";
import MainHero from "../hero/MainHero";

const MainPage = () => {
  return (
    <Fragment>
      <MainHero />
			<About/>
			<Best/>
    </Fragment>
  );
};

export default MainPage;
