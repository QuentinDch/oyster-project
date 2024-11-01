import PropTypes from "prop-types";

const Lightbox = ({ src, onClose }) => {
  return (
    <div className="lightbox" onClick={onClose}>
      <img src={src} alt="Large view" />
    </div>
  );
};

Lightbox.propTypes = {
  src: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Lightbox;
