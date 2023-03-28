import { Outlet } from "react-router-dom";
import { React } from "react";
import "./index.css";
import { Header } from "./components/Layout/Header/Header";
import { Footer } from "./components/Layout/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
