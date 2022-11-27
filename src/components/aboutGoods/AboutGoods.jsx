import beansBlack from "../../assets/img/beans-black.svg";
import coffeeImg from "../../assets/img/coffee-4.jpg";
import "./AboutGoods.css";

const AboutGoods = () => {
  return (
    <div className='coffee-block'>
      <div className='coffee'>
        <div className='coffee__img'>
          <img src={coffeeImg} alt='A cup of coffee' />
        </div>
        <div className='coffee__descr'>
          <h2 className='coffee__title'>About our goods</h2>
          <div className='coffee-img'>
            <img src={beansBlack} alt='coffee beans' />
          </div>
          <p className='coffee__text'>
            Extremity sweetness difficult behaviour he of. On disposal of as
            landlord horrible. Afraid at highly months do things on at.
            Situation recommend objection do intention so questions. As greatly
            removed calling pleased improve an. Last ask him cold feel met spot
            shy want. Children me laughing we prospect answered followed. At it
            went is song that held help face.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutGoods;
