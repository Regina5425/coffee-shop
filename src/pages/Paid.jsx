import { Fragment } from "react";
import CoffeeHero from "../components/hero/CoffeeHero";
import beansBlack from "../assets/img/beans-black.svg";
import "../components/about/About.css";

const PaidPage = () => {
  return (
    <Fragment>
      <CoffeeHero>Thank you!</CoffeeHero>
      <section className='about'>
        <h2 className='about__title'>Thanks for buing our coffee</h2>
        <div className='about__img'>
          <img src={beansBlack} alt='coffee beans' />
        </div>
      </section>
    </Fragment>
  );
};

export default PaidPage;
