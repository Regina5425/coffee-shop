import './Filters.css';

const Filters = (props) => {
	return (
		<form className='filter'>
			<label>
				<span className='filter-label'>Looking for</span>
				<input className='filter-input' type="text" placeholder='start typing here...' />
			</label>
			<label>
				<span className='filter-label'>Or filter</span>
				<button className='filter-btn'>Brazil</button>
				<button className='filter-btn'>Kenya</button>
				<button className='filter-btn'>Columbia</button>
			</label>
		</form>
	)
}

export default Filters;