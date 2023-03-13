import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import logo from "../../assets/img/logo.svg";
import cart from '../../assets/img/cart-1.svg';
import "./AppHeader.css";

const AppHeader = () => {
	const {items} = useSelector(state => state.cart);
	const totalCount = items.reduce((sum, item) => sum + item.count, 0);

  return (
    <header className='header'>
      <div className="header-flex">
        <div>
          <img src={logo} alt='Coffe House logo' />
        </div>
        <ul className='header__list'>
          <li className='header__item'>
            <Link to='/'>Coffee House</Link>
          </li>
          <li className='header__item'>
            <Link to='/ourcoffee'>Our coffee</Link>
          </li>
					<li className='header__item'>
            <Link to='/cart' className="item-cart">
							<p>Go to </p>
							<img src={cart} alt="go to cart" />
							<sup>{totalCount}</sup>
						</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default AppHeader;
