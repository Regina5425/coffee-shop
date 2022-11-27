import CoffeeItem from '../coffeeItem/CoffeeItem';
import './CoffeeList.css';

const CoffeeList = () => {
	return (
		<div className="coffee-list">
			<CoffeeItem/>
			<CoffeeItem/>
			<CoffeeItem/>
			<CoffeeItem/>
			<CoffeeItem/>
			<CoffeeItem/>
		</div>
	)
}

export default CoffeeList;