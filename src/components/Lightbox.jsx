import { useRef, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import { gsap } from "gsap";

function Lightbox({ src, isOpen, onClose }) {
  const dialogRef = useRef(null);

  const handleClose = useCallback(() => {
    const dialog = dialogRef.current;
    gsap.to(dialog, {
      opacity: 0,
      ease: "power2.in",
      duration: 0.25,
      onComplete: () => {
        dialog.close();
        onClose();
      },
    });
  }, [onClose]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" || e.key === "Esc") {
        handleClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleClose]);

  useEffect(() => {
    const dialog = dialogRef.current;

    if (isOpen && !dialog.open) {
      dialog.showModal();
      gsap.fromTo(
        dialog,
        { opacity: 0 },
        { opacity: 1, ease: "power2.out", duration: 0.25 }
      );
    } else if (!isOpen && dialog.open) {
      handleClose();
    }
  }, [isOpen, handleClose]);

  return (
    <dialog
      ref={dialogRef}
      onClick={handleClose}
      className="lightbox"
      aria-label="lightbox content"
    >
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
