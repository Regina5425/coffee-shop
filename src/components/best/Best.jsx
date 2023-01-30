import coffeeDB from "../coffeeDB";
import CoffeeItem from "../coffeeItem/CoffeeItem";
import "./Best.css";

const Best = (props) => {
  return (
    <div className='best'>
      <h2 className='best__title'>Our best</h2>
      <div className='best__flex'>
        {coffeeDB
          .filter((item) => item.id < 4)
          .map((item) => {
            return (
              <CoffeeItem
                key={item.id}
                id={item.id}
                title={item.title}
                price={item.price}
                image={item.image}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Best;
