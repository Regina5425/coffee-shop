import { Link } from "react-router-dom";
import beansBlack from "../../assets/img/beans-black.svg";
import './Cart.css';

const EmptyCart = () => {
  return (
    <div className='cart cart--empty'>
      <h2 className="cart__title">Cart is empty now <icon>😟</icon></h2>
      <div className="cart__img">
        <img src={beansBlack} alt='coffee beans' />
      </div>
      <p className="cart__descr">
        Most likely, you haven't chosen a coffee yet.
        <br />
      </p>
      <Link to='/ourcoffee'>
        <span className="cart__btn">Buy coffee</span>
      </Link>
    </div>
  );
};

export default EmptyCart;
