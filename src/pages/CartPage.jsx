// import EmptyCart from "../components/cart/EmptyCart";
import Cart from "../components/cart/Cart";
import CoffeeHero from "../components/hero/CoffeeHero";

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
