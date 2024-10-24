import PropTypes from "prop-types";

const MainElement = ({ children }) => {
  return (
    <main className="main-element">
      <div className="inner">{children}</div>
    </main>
  );
};

MainElement.propTypes = {
  children: PropTypes.node,
};

export default MainElement;
