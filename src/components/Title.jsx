import PropTypes from "prop-types";

const Title = ({ title }) => {
  return (
    <div className="title-wrapper">
      <h2>{title}</h2>
    </div>
  );
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
