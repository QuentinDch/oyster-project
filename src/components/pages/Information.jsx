import { useState } from "react";
import Title from "../Title";
import GalleryItem from "../GalleryItem";
import Lightbox from "../Lightbox";

const Information = () => {
  const [lightboxSrc, setLightboxSrc] = useState(null);

  return (
    <section className="informations">
      <Title title="Informations" />
      <div className="informations-details details">
        <p>
          The <strong>Oyster</strong> Restaurant is located in Edinburgh. It
          offers seasonal cuisine that highlights well-sourced local products.
        </p>
        <p>
          Athanase <strong>creates</strong> simple dishes that focus on
          essential flavors and striking flavor pairings, always with a concern
          for indulgence.
        </p>
        <p>
          The selection of wines is primarily based on encounters with{" "}
          <strong>passionate</strong> winemakers, followed by our favorites, and
          finally on suggestions for pairing with dishes that are always present
          in the back of our minds.
        </p>
      </div>
      <div className="informations-details gallery">
        <GalleryItem
          src="/images/kw-bl.jpg"
          alt="welcoming committee"
          caption="Welcoming Committee"
          onClick={() => setLightboxSrc("/images/kw-bl.jpg")}
        />
        <GalleryItem
          src="/images/cr-bc.JPG"
          alt="inner views"
          caption="Inner Views"
          onClick={() => setLightboxSrc("/images/cr-bc.JPG")}
        />
        <GalleryItem
          src="/images/gw-bl.jpg"
          alt="wines meeting"
          caption="Wines Meeting"
          onClick={() => setLightboxSrc("/images/gw-bl.jpg")}
        />
      </div>
      {lightboxSrc && (
        <Lightbox
          src={lightboxSrc}
          isOpen={lightboxSrc}
          onClose={() => setLightboxSrc(null)}
        />
      )}
    </section>
  );
};

export default Information;
