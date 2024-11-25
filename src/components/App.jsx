import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import "../sass/main.scss";
import Navbar from "./Navbar";
import MainElement from "./MainElement";
import InnerTransitionPage from "./InnerTransitionPage";
import Loader from "./Loader";
import TransitionPage from "./TransitionPage";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const handleWindowLoad = () => {
      setTimeout(() => {
        setIsLoading(false);
        setTimeout(() => setIsTransitioning(true));
      }, 2000);
    };

    const handleLoadEvent = () => {
      if (isLoading) {
        handleWindowLoad();
      }
    };

    if (document.readyState === "complete") {
      handleLoadEvent();
    } else {
      window.addEventListener("load", handleLoadEvent);
    }

    return () => {
      window.removeEventListener("load", handleLoadEvent);
    };
  }, [isLoading]);

  return (
    <div className="app">
      {isLoading ? (
        <Loader isLoading={isLoading} />
      ) : (
        <>
          <Navbar />
          <TransitionPage isTransitioning={isTransitioning} />
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
