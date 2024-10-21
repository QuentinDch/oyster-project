import { Routes, Route } from "react-router-dom";
import "../sass/main.scss";
import Navbar from "./Navbar";
import Home from "../components/pages/Home";
import Reservation from "../components/pages/Reservation";
import Contact from "../components/pages/Contact";
import Information from "../components/pages/Information";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/information" element={<Information />} />
      </Routes>
    </div>
  );
};

export default App;
