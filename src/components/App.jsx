import { Routes, Route } from "react-router-dom";
import "../sass/main.scss";
import Navbar from "./Navbar";
import MainElement from "./MainElement";
import Home from "../components/pages/Home";
import Reservation from "../components/pages/Reservation";
import Contact from "../components/pages/Contact";
import Information from "../components/pages/Information";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <MainElement>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/information" element={<Information />} />
        </Routes>
      </MainElement>
    </div>
  );
};

export default App;
