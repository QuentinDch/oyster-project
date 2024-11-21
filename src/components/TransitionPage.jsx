import { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";

const TransitionPage = ({ isTransitioning }) => {
  const [isAnimationDone, setIsAnimationDone] = useState(false);
  const transitionElement = useRef(null);

  useEffect(() => {
    if (isTransitioning && transitionElement.current) {
      const transitionNode = transitionElement.current;
      const handleTransitionEnd = () => {
        setIsAnimationDone(true);
      };

      transitionNode.addEventListener("transitionend", handleTransitionEnd);

      return () => {
        transitionNode.removeEventListener(
          "transitionend",
          handleTransitionEnd
        );
      };
    }
  }, [isTransitioning]);

  return (
    <div
      className={`transition-page ${isTransitioning ? "start-animation" : ""} ${
        isAnimationDone ? "is-loading" : ""
      }`}
      ref={transitionElement}
      aria-live="assertive"
    >
      <div className="transition-page-layout"></div>
      <div className="transition-page-layout"></div>
    </div>
  );
};

TransitionPage.propTypes = {
  isTransitioning: PropTypes.bool.isRequired,
};

export default TransitionPage;
