import { Link } from "react-router-dom";
import logo from "../../assets/img/logo-footer.svg";
import beansBlack from "../../assets/img/beans-black.svg";
import "./AppFooter.css";

const AppFooter = (props) => {
  return (
    <footer className='footer'>
      <div className='footer-flex'>
        <div>
          <img src={logo} alt='Coffe House logo' />
        </div>
        <ul className='footer__list'>
          <li className='footer__item'>
            <Link to='/'>Coffee House</Link>
          </li>
          <li className='footer__item'>
            <Link to='/ourcoffee'>Our coffee</Link>
          </li>
          <li className='footer__item'>
            <Link to='/ourpleasure'>For your pleasure</Link>
          </li>
        </ul>
      </div>
      <div className='footer__img'>
        <img src={beansBlack} alt='coffee beans' />
      </div>
    </footer>
  );
};

export default AppFooter;
