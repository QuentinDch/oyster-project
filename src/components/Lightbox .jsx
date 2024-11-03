import { useRef, useEffect } from "react";
import PropTypes from "prop-types";

function Lightbox({ src, isOpen, onClose }) {
  const dialogRef = useRef(null);

  const handleClickOutside = (event) => {
    if (!dialogRef.current) return;

    const box = dialogRef.current.getBoundingClientRect();
    if (
      event.pageX < box.left ||
      event.pageX > box.right ||
      event.pageY < box.top + window.scrollY ||
      event.pageY > box.bottom + window.scrollY
    ) {
      onClose();
    }
  };

  useEffect(() => {
    const dialog = dialogRef.current;
    if (isOpen && !dialog.open) {
      dialog.showModal();
    } else if (!isOpen && dialog.open) {
      dialog.close();
    }
  }, [isOpen]);

  return (
    <dialog ref={dialogRef} onClick={handleClickOutside} className="lightbox">
      <img src={src} alt="lightbox content" />
    </dialog>
  );
}

Lightbox.propTypes = {
  src: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Lightbox;
