import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCoffee } from "./../../redux/slices/coffeeSlice";
import Filters from "../filters/Filters";
import CoffeeList from "./CoffeeList";
import Loader from "../loader/Loader";

const CoffeeListContainer = () => {
  const dispatch = useDispatch();
  const coffeeDB = useSelector((state) => state.coffee.coffee);
  const coffeeStatus = useSelector((state) => state.coffee.coffeeLoadingStatus);

  useEffect(() => {
    dispatch(fetchCoffee());
    // eslint-disable-next-line
  }, []);

  const initialState = {
    data: coffeeDB,
  };
  const [term, setTerm] = useState("");
  const [filter, setFilter] = useState("all");

  const searchCoffee = (items, term) => {
    if (term.length === 0) {
      return items;
    }
    return items.filter((item) => {
      return item.title.toLowerCase().indexOf(term) > -1;
    });
  };

  const filterCoffee = (items, filter) => {
    switch (filter) {
      case "brazil":
        return items.filter((item) => item.country === "Brazil");
      case "kenya":
        return items.filter((item) => item.country === "Kenya");
      case "columbia":
        return items.filter((item) => item.country === "Columbia");
      default:
        return items;
    }
  };

  const onUpdateSearch = (term) => {
    setTerm(term);
  };

  const onFilterSelect = (filter) => {
    setFilter(filter);
  };

  const visibleData = filterCoffee(
    searchCoffee(initialState.data, term),
    filter
  );

  return (
    <>
      {coffeeStatus === "loading" ? (
        <Loader />
      ) : (
        <>
          <Filters
            filter={filter}
            onUpdateSearch={onUpdateSearch}
            onFilterSelect={onFilterSelect}
          />
          <CoffeeList visibleData={visibleData} />
        </>
      )}
    </>
  );
};

export default CoffeeListContainer;
