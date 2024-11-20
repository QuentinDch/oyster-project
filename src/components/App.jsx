import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import "../sass/main.scss";
import Navbar from "./Navbar";
import MainElement from "./MainElement";
import PageTransition from "./PageTransition";
import Loader from "./Loader";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleWindowLoad = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    };

    window.onload = handleWindowLoad;

    return () => {
      window.onload = null;
    };
  }, []);

  return (
    <div className="app">
      {isLoading ? (
        <Loader isLoading={isLoading} />
      ) : (
        <>
          <Navbar />
          <PageTransition>
            <MainElement>
              <Outlet />
            </MainElement>
          </PageTransition>
        </>
      )}
    </div>
  );
};

export default App;
