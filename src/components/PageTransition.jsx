import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import gsap from "gsap";

const PageTransition = ({ children }) => {
  const pageRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const element = pageRef.current;

    gsap.fromTo(
      element,
      { opacity: 0 },
      { opacity: 1, ease: "power2.out", duration: 1.5 }
    );

    return () => {
      gsap.to(element, { opacity: 0, ease: "power2.in", duration: 1.5 });
    };
  }, [location]);

  return <div ref={pageRef}>{children}</div>;
};

PageTransition.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageTransition;
