import { useDispatch } from "react-redux";
import {
  addItem,
  decrementItemCount,
  removeItem,
} from "../../redux/slices/cartSlice";
import minus from "../../assets/img/minus.svg";
import plus from "../../assets/img/plus.svg";

const CartItem = ({ id, title, image, price, count }) => {
  const dispatch = useDispatch();

  const onIncCount = () => {
    dispatch(addItem({ id }));
  };

  const onDecCount = () => {
    dispatch(decrementItemCount(id));
  };

  const onRemoveItem = () => {
    if (window.confirm("Are you sure to delete product?", "")) {
      dispatch(removeItem(id));
    }
  };

  return (
    <div className='cart__item'>
      <div className='cart__item-img'>
        <img src={image} alt='coffee' />
      </div>
      <div className='cart__item-info'>
        <h3>{title}</h3>
      </div>
      <div className='cart__item-count'>
        <button onClick={onDecCount}>
          <img src={minus} alt='minus' />
        </button>
        <div className='cart__item-count--counts'>{count}</div>
        <button onClick={onIncCount}>
          <img src={plus} alt='plus' />
        </button>
      </div>
      <div className='cart__item-price'>
        <b>{price}$</b>
      </div>
      <button onClick={onRemoveItem} className='cart__item-remove'>
        <img src={plus} alt='delete button' />
      </button>
    </div>
  );
};

export default CartItem;
