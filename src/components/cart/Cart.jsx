import { Link } from "react-router-dom";
import cart from "../../assets/img/cart-2.svg";
import clear from "../../assets/img/clear.svg";
import minus from "../../assets/img/minus.svg";
import plus from "../../assets/img/plus.svg";
import arrow from "../../assets/img/arrow.svg";
import "./Cart.css";

const Cart = () => {
  return (
    <div className='container container--cart'>
      <div className='cart'>
        <div className='cart__top'>
          <h2 className='cart__title'>
            <img src={cart} alt='cart page' />
            Cart
          </h2>
          <button className='cart__clear'>
            <img src={clear} alt='clear cart' />
            <span>Clear cart</span>
          </button>
        </div>
        <div className='cart__items'>
          <div className='cart__item'>
            <div className='cart__item-img'>
              <img
                src='https://images.unsplash.com/photo-1561986810-4f3ba2f46ceb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                alt='coffee'
              />
            </div>
            <div className='cart__item-info'>
              <h3>Coffee Title</h3>
            </div>
            <div className='cart__item-count'>
              <div>
                <img src={minus} alt='minus' />
              </div>
              <div className='cart__item-count--counts'>1</div>
              <div>
                <img src={plus} alt='plus' />
              </div>
            </div>
            <div className='cart__item-price'>
              <b>12.99$</b>
            </div>
            <div className='cart__item-remove'>
              <div>
                <img src={plus} alt='delete button' />
              </div>
            </div>
          </div>
        </div>
        <div className='cart__bottom'>
          <div className='cart__bottom-details'>
            <span>
              Order amount: <b>100$</b>
            </span>
          </div>
          <div className='cart__bottom-buttons'>
            <Link to='/ourcoffee'>
              <img src={arrow} alt='back to coffee page' />
              <span>Go back</span>
            </Link>
            <div>
              <span>Pay now</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
