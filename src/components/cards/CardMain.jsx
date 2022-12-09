import { Link } from "react-router-dom";
import "./CardMain.css";

const CardMain = (props) => {
	const {title, image, price} = props;

  return (
    <Link to='/coffee' className='card-main'>
			<img src={image} alt='coffee' className='card-main__img' />
      <h3 className='card-main__title'>{title}</h3>
      <div className='card-main__price'>{price}</div>
    </Link>
  );
};

export default CardMain;
