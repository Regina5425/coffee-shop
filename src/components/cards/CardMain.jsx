import { Link } from "react-router-dom";
import coffee from "../../assets/img/coffee.png";
import "./CardMain.css";

const CardMain = (props) => {
  return (
    <Link to='/coffee' className='card-main'>
      <img src={coffee} alt='coffee' className='card-main__img' />
      <h3 className='card-main__title'>Solimo Coffee Beans 2 kg</h3>
      <div className='card-main__price'>10.73$</div>
    </Link>
  );
};

export default CardMain;
