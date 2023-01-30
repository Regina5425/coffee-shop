import { Link } from "react-router-dom";
import "./CoffeeItem.css";

const CoffeeItem = (props) => {
  const { title, price, country, image, id } = props;
  return (
    <Link to={`/coffee/${id}`} className='coffee-item'>
      <div className='coffee-item__img'>
        <img src={image} alt='Coffee' />
      </div>
      <h2 className='coffee-item__title'>{title}</h2>
      <p className='coffee-item__text'>{country}</p>
      <p className='coffee-item__price'>{price}</p>
    </Link>
  );
};

export default CoffeeItem;
