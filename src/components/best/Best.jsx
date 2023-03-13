import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCoffee } from "../../redux/slices/coffeeSlice";
import CoffeeItem from "../coffeeItem/CoffeeItem";
import Loader from "./../loader/Loader";
import "./Best.css";

const Best = () => {
  const dispatch = useDispatch();
  const coffeeDB = useSelector((state) => state.coffee.coffee);
  const coffeeStatus = useSelector((state) => state.coffee.coffeeLoadingStatus);

  useEffect(() => {
    dispatch(fetchCoffee());
    // eslint-disable-next-line
  }, []);

  return (
    <div className='best'>
      <h2 className='best__title'>Our best</h2>
      <div className='best__flex'>
        {coffeeStatus === "loading" ? (
          <Loader />
        ) : (
          coffeeDB
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
            })
        )}
      </div>
    </div>
  );
};

export default Best;
