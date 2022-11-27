import beans from '../../assets/img/beans-white.svg';
import './MainHero.css';

const MainHero = (props) => {
	return (
		<section className="hero-main">
			<h1 className="hero-main__title">Everything You Love About Coffee</h1>
			<div className="hero-main__img">
				<img src={beans} alt="coffee beans" />
			</div>
			<p className="hero-main__descr">We makes every day full of energy and taste </p>
			<p className="hero-main__descr">Want to try our beans? </p>
			<a href="vk.ru" className="hero-main__link">More</a>
		</section>
	)
}

export default MainHero;