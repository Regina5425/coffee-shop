import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import cart from "../../assets/img/cart-2.svg";
import clear from "../../assets/img/clear.svg";
import arrow from "../../assets/img/arrow.svg";
import EmptyCart from "./EmptyCart";
import CartItem from "./CartItem";
import { clearCart } from "../../redux/slices/cartSlice";
import "./Cart.css";

const Cart = () => {
  const dispatch = useDispatch();
  const { items, totalPrice } = useSelector((state) => state.cart);
  const totalCount = items.reduce((sum, item) => sum + item.count, 0);

  const onClearClick = () => {
    if (window.confirm("Are you sure to delete all products?", "")) {
      dispatch(clearCart());
    }
  };

  if (!totalCount) {
    return <EmptyCart />;
  }

  return (
    <div className='container container--cart'>
      <div className='cart'>
        <div className='cart__top'>
          <h2 className='cart__title'>
            <img src={cart} alt='cart page' />
            Cart
          </h2>
          <button className='cart__clear' onClick={onClearClick}>
            <img src={clear} alt='clear cart' />
            <span>Clear cart</span>
          </button>
        </div>
        <div className='cart__items'>
          {items.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        </div>
        <div className='cart__bottom'>
          <div className='cart__bottom-details'>
            <span>
              Order amount: <b>{totalPrice}$</b>
            </span>
          </div>
          <div className='cart__bottom-buttons'>
            <Link to='/ourcoffee' className='cart__back'>
              <img src={arrow} alt='back to coffee page' />
              <span>Go back</span>
            </Link>
            <Link to='/paid' className='cart__pay'>
              <span>Pay now</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
