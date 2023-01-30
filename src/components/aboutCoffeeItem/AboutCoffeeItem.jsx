import coffeeImg from "../../assets/img/coffee-3.jpg";
import beansBlack from "../../assets/img/beans-black.svg";
import "./AboutCoffeeItem.css";

// эта страница должна рендерится на основе поступающих пропсов,
// по сути данные должны исходить из тех компонентов где
// указан конкретный сорт кофе
// это страница с описанием каждого конретного сорта кофе

const AboutCoffeeItem = (props) => {
  return (
    <div className='coffee-about-block'>
      <div className='coffee-about'>
        <div className='coffee-about__img'>
          <img src={coffeeImg} alt='coffee title' />
        </div>
        <div className='coffee-about__descr'>
          <h2 className='coffee-about__title'>About it</h2>
          <div className='coffee-about-img'>
            <img src={beansBlack} alt='coffee beans' />
          </div>
					<h2 className='coffee-about__subtitle'>AROMA VENEZIA Blonde Light Roast</h2>
          <p className='coffee-about__text'>
            <span>Country: </span>Brazil
          </p>
          <p className='coffee-about__text'>
            <span>Description: </span>Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
          <p className='coffee-about__price'>
            <span>Price: </span>16.99$
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutCoffeeItem;
