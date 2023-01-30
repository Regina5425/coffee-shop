import CoffeeItem from "../coffeeItem/CoffeeItem";
import "./CoffeeList.css";

const CoffeeList = (props) => {
  if (props.visibleData.length === 0) {
    return (
      <div className='coffee-list'>
        <h2>There is no such coffee!</h2>
      </div>
    );
  }

  return (
    <div className='coffee-list'>
      {props.visibleData.map((item) => {
        return (
          <CoffeeItem
            key={item.id}
						id={item.id}
            title={item.title}
            country={item.country}
            price={item.price}
            image={item.image}
          />
        );
      })}
    </div>
  );
};

export default CoffeeList;
