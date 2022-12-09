import CoffeeItem from '../coffeeItem/CoffeeItem';
import './CoffeeList.css';
import coffeeDB from './../coffeeDB';

const CoffeeList = () => {
	return (
		<div className="coffee-list">
			{coffeeDB.map(item => {
				return (
					<CoffeeItem key={item.id} title={item.title} country={item.country} price={item.price} image={item.image} />
				)
			})}
		</div>
	)
}

export default CoffeeList;