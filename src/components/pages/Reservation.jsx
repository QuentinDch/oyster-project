import { Helmet } from "react-helmet";
import Title from "../Title";

const Reservation = () => {
  return (
    <>
      <Helmet>
        <title>Oyster. | Edinburgh — Reservation</title>
      </Helmet>
      <section className="reservation">
        <Title title="Reservations" />
        <div className="reservation-details details">
          <p>
            We can accommodate tables of various sizes and also have a stunning
            bar available to reserve for parties.
          </p>
          <p>
            For bookings of up to five guests, please call -{" "}
            <a
              href="tel:+441315556789"
              aria-label="Call us at +44 131 555 6789"
            >
              {" "}
              <span className="sr-only">Call us at </span>
              Book A Table
            </a>
            .
          </p>
          <p>
            For a table of six guests & above, please kindly email{" "}
            <a
              href="mailto:hello@oysterdiscovery.co.uk"
              aria-label="Email us for table bookings at hello@oysterdiscovery.co.uk"
            >
              hello@oysterdiscovery.co.uk
            </a>
            .
          </p>
          <p>
            For private hire and events, kindly email{" "}
            <a
              href="mailto:hello@oysterdiscovery.co.uk"
              aria-label="Email us for private hire inquiries at hello@oysterdiscovery.co.uk"
            >
              hello@oysterdiscovery.co.uk
            </a>{" "}
            & we’ll be in touch shortly.
          </p>
        </div>
        <div className="reservation-details opening-times">
          <p>Lunch 12 - 3pm daily</p>
          <p>Monday - Saturday Dinner from 6pm until 11pm</p>
          <p>Sunday Dinner from 6pm until 10pm</p>
        </div>
      </section>
    </>
  );
};

export default Reservation;
