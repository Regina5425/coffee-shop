// import EmptyCart from "../cart/EmptyCart";
import Cart from "../cart/Cart";
import CoffeeHero from "../hero/CoffeeHero";

const CartPage = () => {
  return (
    <>
      <CoffeeHero>Buy coffee</CoffeeHero>
      {/* <EmptyCart /> */}
      <Cart />
    </>
  );
};

export default CartPage;
