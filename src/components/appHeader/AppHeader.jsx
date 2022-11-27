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
            <a href='vk.ru'>Coffee House</a>
          </li>
          <li className='header__item'>
            <a href='vk.ru'>Our coffee</a>
          </li>
          <li className='header__item'>
            <a href='vk.ru'>For your pleasure</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default AppHeader;
