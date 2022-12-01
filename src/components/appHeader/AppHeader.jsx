import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.svg";
import "./AppHeader.css";

const AppHeader = (props) => {
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
            <Link to='/ourpleasure'>For your pleasure</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default AppHeader;
