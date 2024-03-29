import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppHeader from "../appHeader/AppHeader";
import AppFooter from "../appFooter/AppFooter";
import MainPage from "../../pages/MainPage";
import OurCoffeePage from "../../pages/OurCoffeePage";
import OurCoffeeItem from "../../pages/OurCoffeeItem";
import CartPage from "../../pages/CartPage";
import Page404 from "../../pages/Page404";
import PaidPage from "../../pages/Paid";

function App() {
  return (
    <BrowserRouter>
      <div className='app'>
        <AppHeader />
        <div className='main'>
          <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/ourcoffee' element={<OurCoffeePage />} />
            <Route path='/coffee/:coffeeId' element={<OurCoffeeItem />} />
            <Route path='/cart' element={<CartPage />} />
            <Route path='/paid' element={<PaidPage />} />
            <Route path='*' element={<Page404 />} />
          </Routes>
        </div>
        <AppFooter />
      </div>
    </BrowserRouter>
  );
}

export default App;
