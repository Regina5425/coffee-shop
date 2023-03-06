import { Fragment } from "react";
import About from "../components/about/About";
import Best from "../components/best/Best";
import MainHero from "../components/hero/MainHero";

const MainPage = () => {
  return (
    <Fragment>
      <MainHero />
			<About/>
			<Best />
    </Fragment>
  );
};

export default MainPage;
