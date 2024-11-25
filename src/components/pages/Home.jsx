import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Oyster. | Edinburgh — Home</title>
      </Helmet>
      <section className="home">
        <div className="home-brand">
          <h1>Oyster.</h1>
        </div>
        <div className="home-details">
          <p>
            <em>
              Restaurant, Wine Bar
              <br />
              and Unique
            </em>
          </p>
        </div>
      </section>
    </>
  );
};

export default Home;
