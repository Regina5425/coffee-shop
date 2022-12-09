import CardMain from "../cards/CardMain";
import coffeeDB from "../coffeeDB";
import "./Best.css";

const Best = () => {
  return (
    <div className='best'>
      <h2 className='best__title'>Our best</h2>
      <div className='best__flex'>
        {coffeeDB
          .filter((item) => item.id < 4)
          .map((item) => {
            return (
              <CardMain
                key={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Best;
