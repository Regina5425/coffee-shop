import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import beansBlack from "../../assets/img/beans-black.svg";
import { fetchCoffeeById } from "../../redux/slices/coffeeSlice";
import { addItem } from "../../redux/slices/cartSlice";
import Loader from "../loader/Loader";
import "./AboutCoffeeItem.css";

const AboutCoffeeItem = () => {
  const { coffeeId } = useParams();

  const dispatch = useDispatch();
  const oneCoffee = useSelector((state) => state.coffee.oneCoffee);
  const coffeeStatus = useSelector((state) => state.coffee.coffeeLoadingStatus);

  const buyCoffee = () => {
    const item = {
      id: oneCoffee.id,
      title: oneCoffee.title,
      price: oneCoffee.price,
      image: oneCoffee.image,
    };

    dispatch(addItem(item));
  };

  useEffect(() => {
    dispatch(fetchCoffeeById(coffeeId));
  }, [coffeeId, dispatch]);

  return (
    <>
      {coffeeStatus === "loading" ? (
        <div className='coffee-about__loader'>
          <Loader />
        </div>
      ) : (
        <div className='coffee-about-block'>
          <div className='coffee-about'>
            <div className='coffee-about__img'>
              <img src={oneCoffee.image} alt='coffee title' />
            </div>
            <div className='coffee-about__descr'>
              <h2 className='coffee-about__title'>About it</h2>
              <div className='coffee-about-img'>
                <img src={beansBlack} alt='coffee beans' />
              </div>
              <h2 className='coffee-about__subtitle'>{oneCoffee.title}</h2>
              <p className='coffee-about__text'>
                <span>Country: </span>
                {oneCoffee.country}
              </p>
              <p className='coffee-about__text'>
                <span>Description: </span>
                {oneCoffee.description}
              </p>
              <p className='coffee-about__price'>
                <span>Price: </span>
                {oneCoffee.price}$
              </p>
              <button onClick={buyCoffee} className='coffee-about__btn'>
                Buy
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AboutCoffeeItem;
