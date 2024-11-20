import PropTypes from "prop-types";

const Loader = ({ isLoading }) => {
  return (
    <div className={`loader-container ${!isLoading ? "is-hide" : ""}`}>
      <span className="styles-loader-text">
        loading
        <span className="styles-loader-text__dot">.</span>
        <span className="styles-loader-text__dot">.</span>
        <span className="styles-loader-text__dot">.</span>
      </span>
    </div>
  );
};

Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};

export default Loader;
