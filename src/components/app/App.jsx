import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppHeader from "../appHeader/AppHeader";
import AppFooter from "../appFooter/AppFooter";
import MainPage from "../pages/MainPage";
import OurCoffeePage from "../pages/OurCoffeePage";
import OurCoffeeItem from "../pages/OurCoffeeItem";
import PleasurePage from "../pages/PleasurePage";
import CartPage from "../pages/CartPage";
import Page404 from "../pages/Page404";

function App() {
  return (
    <BrowserRouter>
      <div className='app'>
        <AppHeader />
        <div className='main'>
          <Routes>
            <Route path='/*' element={<MainPage />} />
            <Route path='/ourcoffee' element={<OurCoffeePage />} />
            <Route path='/ourpleasure' element={<PleasurePage />} />
            <Route path='/coffee/:id' element={<OurCoffeeItem />} />
            <Route path='/cart' element={<CartPage />} />
            <Route path='*' element={<Page404 />} />
          </Routes>
        </div>
        <AppFooter />
      </div>
    </BrowserRouter>
  );
}

export default App;
