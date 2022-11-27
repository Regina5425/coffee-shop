import coffeeImg from '../../assets/img/coffee-2.jpg';
import './CoffeeItem.css';

const CoffeeItem = () => {
	return (
		<button className="coffee-item">
			<div className="coffee-item__img">
				<img src={coffeeImg} alt="Coffee" />
			</div>
			<h2 className="coffee-item__title">AROMISTICO Coffee 1 kg</h2>
			<p className="coffee-item__text">Brazil</p>
			<p className="coffee-item__price">6.99$</p>
		</button>
	)
}

export default CoffeeItem;