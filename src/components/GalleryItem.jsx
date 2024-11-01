import PropTypes from "prop-types";

const GalleryItem = ({ src, alt, caption, onClick }) => {
  return (
    <figure className="gallery-item" onClick={onClick}>
      <div className="gallery-item-wrapper">
        <img src={src} alt={alt} />
      </div>
      <figcaption className="sr-only">{caption}</figcaption>
    </figure>
  );
};

GalleryItem.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default GalleryItem;
