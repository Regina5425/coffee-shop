import noCoffee from "../../assets/img/no-coffee.jpg";
import beansBlack from "../../assets/img/beans-black.svg";
import "./comp404.css";

const Comp404 = () => {
  return (
    <div className='error-comp'>
      <div className='error-comp__block'>
        <div className='error-comp__img'>
          <img src={noCoffee} alt='error page' />
        </div>
        <div className='error-comp__descr'>
          <h2 className='error-comp__title'>We can't find that page</h2>
          <div className='error-comp-img'>
            <img src={beansBlack} alt='coffee beans' />
          </div>
          <p className='error-comp__text'>
            We're fairly sure that page used to be here, but seems to have gone
            missing. We do apologise on it's behalf.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Comp404;
