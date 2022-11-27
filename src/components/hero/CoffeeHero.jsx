import './CoffeeHero.css';

const CoffeeHero = ({children}) => {
	return (
		<div className="hero">
			<h1 className="hero__title">{children}</h1>
		</div>
	)
}

export default CoffeeHero;