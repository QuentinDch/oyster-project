import Title from "../Title";
import GalleryItem from "../GalleryItem";

const Information = () => {
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
        />
        <GalleryItem
          src="/images/cr-bc.JPG"
          alt="inner views"
          caption="Inner Views"
        />
        <GalleryItem
          src="/images/gw-bl.jpg"
          alt="wines meeting"
          caption="Wines Meeting"
        />
      </div>
    </section>
  );
};

export default Information;
