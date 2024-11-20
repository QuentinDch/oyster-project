import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import "../sass/main.scss";
import Navbar from "./Navbar";
import MainElement from "./MainElement";
import InnerTransitionPage from "./InnerTransitionPage";
import Loader from "./Loader";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleWindowLoad = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
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
          <InnerTransitionPage>
            <MainElement>
              <Outlet />
            </MainElement>
          </InnerTransitionPage>
        </>
      )}
    </div>
  );
};

export default App;
