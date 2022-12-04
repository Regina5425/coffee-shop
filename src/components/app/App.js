import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppHeader from "./../appHeader/AppHeader";
import AppFooter from "./../appFooter/AppFooter";
import MainPage from "../pages/MainPage";
import OurCoffeePage from "../pages/OurCoffeePage";
import OurCoffeeItem from "../pages/OurCoffeeItem";
import PleasurePage from "../pages/PleasurePage";
import Page404 from "../pages/Page404";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className='app'>
        <AppHeader />
        <div className='main'>
          <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/ourcoffee' element={<OurCoffeePage />} />
            <Route path='/ourpleasure' element={<PleasurePage />} />
            <Route path='/coffee' element={<OurCoffeeItem/>} />
						<Route path='*' element={<Page404/>} />
          </Routes>
        </div>
        <AppFooter />
      </div>
    </BrowserRouter>
  );
}

export default App;
