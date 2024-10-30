import Title from "../Title";

const Contact = () => {
  return (
    <section className="contact">
      <Title title="Contact" />
      <div className="contact-grid">
        <div className="contact-text">
          <p>
            Feel free to reach out to us through our contact options. We are
            here to assist you and answer any questions you may have. Our team
            looks forward to welcoming you and helping you with your
            reservations.
          </p>
        </div>
        <ul className="contact-list">
          <li className="contact-item">
            <div className="contact-detail">
              <h3>phone.</h3>
              <a
                href="tel:+441315556789"
                aria-label="Call us at +44 131 555 6789"
              >
                <span className="sr-only">Call us at </span>+44 131 555 6789
              </a>
            </div>
          </li>
          <li className="contact-item">
            <div className="contact-detail">
              <h3>email.</h3>
              <a href="mailto:hello@oysterdiscovery.co.uk">
                hello@oysterdiscovery.co.uk
              </a>
            </div>
          </li>
          <li className="contact-item">
            <div className="contact-detail">
              <h3>address.</h3>
              <address>
                123 Royal Mile <br />
                EH1 2QR Edinburgh <br />
                Scotland
              </address>
            </div>
          </li>
          <li className="contact-item">
            <div className="contact-detail">
              <h3>social.</h3>
              <div className="contact-socials">
                <a href="https://www.facebook.com/" target="_blank">
                  facebook
                </a>
                <a href="https://www.instagram.com/" target="_blank">
                  instagram
                </a>
                <a href="#" target="_blank">
                  gitHub
                </a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Contact;
