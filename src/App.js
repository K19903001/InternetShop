import { Outlet } from "react-router-dom";
import { useState,React } from 'react';
import './index.css';
import { Header } from "./components/Layout/Header/Header";
import { Footer } from "./components/Layout/Footer/Footer";
import { PetsShopContext } from "./Context/Context.js"; 


function App() {
 
  const [isAuth, setIsAuth] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("token"));
   return (
    <PetsShopContext.Provider value={{
      isAuth: isAuth,
      setIsAuth: setIsAuth,
      token: token,
      setToken: setToken,
              
  }}>
    <Header />
    <Outlet />
    <Footer />
    </PetsShopContext.Provider>
  );
}

export default App;