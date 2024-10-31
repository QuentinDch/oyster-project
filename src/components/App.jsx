import { Outlet } from "react-router-dom";
import "../sass/main.scss";
import Navbar from "./Navbar";
import MainElement from "./MainElement";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <MainElement>
        <Outlet />
      </MainElement>
    </div>
  );
};

export default App;
