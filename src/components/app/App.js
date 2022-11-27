import AppHeader from "./../appHeader/AppHeader";
import AppFooter from './../appFooter/AppFooter';
import MainPage from "../pages/MainPage";
// import OurCoffeePage from "../pages/OurCoffeePage";
// import OurCoffeeItem from "../pages/OurCoffeeItem";
// import PleasurePage from "../pages/PleasurePage";

import "./App.css";

function App() {
  return (
    <div className='app'>
      <AppHeader />
      <div className='main'>
        <MainPage />
				{/* <OurCoffeePage/> */}
				{/* <OurCoffeeItem/> */}
				{/* <PleasurePage/> */}
      </div>
			<AppFooter/>
    </div>
  );
}

export default App;
