import Title from "../Title";

const Information = () => {
  return (
    <section className="informations">
      <Title title="Informations" />
      <div className="informations-details details">
        <p>
          The Oyster Restaurant is located in Edinburgh. It offers seasonal
          cuisine that highlights well-sourced local products.
        </p>
        <p>
          Athanase creates simple dishes that focus on essential flavors and
          striking flavor pairings, always with a concern for indulgence.
        </p>
        <p>
          The selection of wines is primarily based on encounters with
          passionate winemakers, followed by our favorites, and finally on
          suggestions for pairing with dishes that are always present in the
          back of our minds.
        </p>
      </div>
      <div className="informations-details gallery">
        <figure className="gallery-item">
          <div className="gallery-item-wrapper">
            <img src="/images/kw-bl.jpg" alt="" />
          </div>
          <figcaption>welcomming committee</figcaption>
        </figure>
        <figure className="gallery-item">
          <div className="gallery-item-wrapper">
            <img src="/images/cr-bc.JPG" alt="" />
          </div>
          <figcaption>inner views</figcaption>
        </figure>
        <figure className="gallery-item">
          <div className="gallery-item-wrapper">
            <img src="/images/gw-bl.jpg" alt="" />
          </div>
          <figcaption>wines meeting</figcaption>
        </figure>
      </div>
    </section>
  );
};

export default Information;
