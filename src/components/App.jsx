import { Outlet } from "react-router-dom";
import "../sass/main.scss";
import Navbar from "./Navbar";
import MainElement from "./MainElement";
import PageTransition from "./PageTransition";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <PageTransition>
        <MainElement>
          <Outlet />
        </MainElement>
      </PageTransition>
    </div>
  );
};

export default App;
