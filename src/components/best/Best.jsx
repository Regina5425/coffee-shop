import CardMain from '../cards/CardMain';
import './Best.css';

const Best = () => {
	return (
		<div className="best">
			<h2 className="best__title">Our best</h2>
			<div className="best__flex">
				<CardMain/>
				<CardMain/>
				<CardMain/>
			</div>
		</div>
	)
}

export default Best;