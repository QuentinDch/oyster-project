import PropTypes from "prop-types";

const GalleryItem = ({ src, alt, caption }) => {
  return (
    <figure className="gallery-item">
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
};

export default GalleryItem;
