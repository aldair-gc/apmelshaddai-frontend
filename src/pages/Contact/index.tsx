import { MapSquare } from "./style";

export const Contact = () => {
  return (
    <main>
      <div className="bg-blues"></div>

      <div className="square-container marg20px">
        <div className="square box">
          <div className="inner-square" id="adress-square">
            <div className="square-general">
              <h1>Address</h1>
              <h3 className="text-center">
                <p>125 Rollstone Street</p>
                <p>Fitchburg, MA 01420</p>
                <p>USA</p>
              </h3>
              <div className="square-buttons">
                <a
                  href="https://www.google.com/maps/dir//Apostolic+and+Prophetic+Ministries+El+Shaddai,+125+Rollstone+St,+Fitchburg,+MA+01420,+United+States/@42.5825698,-71.8095195,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89e3e657847c3ead:0x28e614e0dae2564!2m2!1d-71.8072579!2d42.5825431">
                  <h2><i className="fa-solid fa-compass"></i> Get directions</h2>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="square box">
          <div className="inner-square" id="phone-and-email">
            <div className="square-general" id="phone-email-square">
              <h1>Contact</h1>
              <div className="text-center">
                <h3><i className="fa-solid fa-phone"></i> 1774-204-1359</h3>
                <h3><i className="fa-solid fa-envelope"></i> email@email.com</h3>
              </div>
              <div className="square-buttons">
                <a href="tel:1774-204-1359">
                  <h2><i className="fa-solid fa-phone"></i> Call</h2>
                </a>
                <a href="https://wa.me/17742041359">
                  <h2><i className="fa-brands fa-whatsapp"></i> Whatsapp</h2>
                </a>
                <a href="mailto:email@email.com">
                  <h2><i className="fa-solid fa-envelope"></i> Email</h2>
                </a>
              </div>
            </div>
          </div>
        </div>
        <MapSquare className="square box">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2937.715073857984!2d-71.80951948372636!3d42.58256977917267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e3e657847c3ead%3A0x28e614e0dae2564!2sApostolic%20and%20Prophetic%20Ministries%20El%20Shaddai!5e0!3m2!1sen!2sbr!4v1662291555801!5m2!1sen!2sbr"
            width="100%" height="600" style={{ border: 0 }} allowFullScreen={true} loading="lazy"
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </MapSquare>
      </div>
    </main>

  );
};
