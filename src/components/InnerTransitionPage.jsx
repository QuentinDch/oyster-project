import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import gsap from "gsap";

const InnerTransitionPage = ({ children }) => {
  const pageRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const element = pageRef.current;

    gsap.fromTo(
      element,
      { opacity: 0 },
      { opacity: 1, ease: "power2.out", duration: 1.25 }
    );

    return () => {
      gsap.to(element, { opacity: 0, ease: "power2.in", duration: 1.25 });
    };
  }, [location]);

  return <div ref={pageRef}>{children}</div>;
};

InnerTransitionPage.propTypes = {
  children: PropTypes.node.isRequired,
};

export default InnerTransitionPage;
