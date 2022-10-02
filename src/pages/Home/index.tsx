import { Link } from "react-router-dom";
import "./style.css";

const carousels = document.getElementsByClassName("carousel_activator") as HTMLCollectionOf<HTMLInputElement>;

setInterval(function rotate() {
  for (let i = (carousels.length - 1); i >= 0; i--) {
    let next = i === (carousels.length - 1) ? 0 : (i + 1);
    if (carousels[i].checked) {
      carousels[next].checked = true;
      carousels[i].checked = false;
      return;
    }
  }
}, 5000);

export const Home = () => {
  return (
    <main>
      <div className="intro">
        <img src="../../assets/images/logo-bg-png.png" alt="Logo" />
      </div>

      <div className="block-bg-white text-block">
        <h1>HOW PRECIOUS IS THY WORD, GOD OF ISRAEL</h1>
        <hr />
        <p>Let's rejoice in the presence of our God and Savior. We are committed to preach the Word of God, and in
          his Son Jesus Christ. It our pleasure to be here to serve you, in Jesus name.</p>
      </div>

      <div className="block-bg-blue">
        <div className="square-container">
          <div className="block-flex-wrap">
            <div className="square">
              <div className="inner-square" id="church">
                <div className="square-image"></div>
              </div>
            </div>

            <div className="square stretch">
              <div className="rectangle-text">
                <Link to="/thechurch">
                  <h1>The Church</h1>
                </Link>
                The places like Apostolic and Prophetic Ministries El Shaddai are not only religiously
                important
                but as well have great historic value in our country. This is one of the churches of
                Massachusetts. Not solely providing a space to worship God, it can also host recreational
                events, join diverse cultural activities, establish a friendly group of like-minded persons
                and
                offer vital social care.
              </div>
            </div>
          </div>

          <div className="block-flex-wrap wrap-reverse">
            <div className="square stretch">
              <div className="rectangle-text">
                <Link to="/ourfamily">
                  <h1>Our Family</h1>
                </Link>
                The places like Apostolic and Prophetic Ministries El Shaddai are not only religiously
                important
                but as well have great historic value in our country. This is one of the churches of
                Massachusetts. Not solely providing a space to worship God, it can also host recreational
                events, join diverse cultural activities, establish a friendly group of like-minded persons
                and
                offer vital social care.
              </div>
            </div>
            <div className="square">
              <div className="inner-square" id="our-family">
                <div className="square-image"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="block-bg-white">
        <div className="carousel block-bg-white">

          <ul className="carousel">
            <input className="carousel_activator" type="radio" id="A" name="activator" defaultChecked={true} />
            <input className="carousel_activator" type="radio" id="B" name="activator" />
            <input className="carousel_activator" type="radio" id="C" name="activator" />
            <input className="carousel_activator" type="radio" id="D" name="activator" />
            <div className="carousel_controls">
              <label className="carousel_control carousel_control_backward" htmlFor="D"></label>
              <label className="carousel_control carousel_control_forward" htmlFor="B"></label>
            </div>
            <div className="carousel_controls">
              <label className="carousel_control carousel_control_backward" htmlFor="A"></label>
              <label className="carousel_control carousel_control_forward" htmlFor="C"></label>
            </div>
            <div className="carousel_controls">
              <label className="carousel_control carousel_control_backward" htmlFor="B"></label>
              <label className="carousel_control carousel_control_forward" htmlFor="D"></label>
            </div>
            <div className="carousel_controls">
              <label className="carousel_control carousel_control_backward" htmlFor="C"></label>
              <label className="carousel_control carousel_control_forward" htmlFor="A"></label>
            </div>
            <li className="carousel_slide">
              <h1></h1>
            </li>
            <li className="carousel_slide">
              <h1></h1>
            </li>
            <li className="carousel_slide">
              <h1></h1>
            </li>
            <li className="carousel_slide">
              <h1></h1>
            </li>
            <div className="carousel_indicators">
              <label className="carousel_indicator" htmlFor="A"></label>
              <label className="carousel_indicator" htmlFor="B"></label>
              <label className="carousel_indicator" htmlFor="C"></label>
              <label className="carousel_indicator" htmlFor="D"></label>
            </div>
          </ul>

        </div>
      </div>

      <div className="square-container">
        <div className="square">
          <div className="inner-square" id="feed">
            <div className="square-image"></div>
            <div className="square-text">
              <h3></h3>
              <Link to="/feed">
                <h2>Feed</h2>
              </Link>
            </div>
          </div>
        </div>
        <div className="square">
          <div className="inner-square" id="prayers">
            <div className="square-image"></div>
            <div className="square-text">
              <h3></h3>
              <Link to="/prayer">
                <h2>Prayers</h2>
              </Link>
            </div>
          </div>
        </div>
        <div className="square">
          <div className="inner-square" id="missions">
            <div className="square-image"></div>
            <div className="square-text">
              <h3></h3>
              <Link to="/missions">
                <h2>Missions</h2>
              </Link>
            </div>
          </div>
        </div>
        <div className="square">
          <div className="inner-square" id="agenda">
            <div className="square-image"></div>
            <div className="square-text">
              <h3></h3>
              <Link to="/agenda">
                <h2>Agenda</h2>
              </Link>
            </div>
          </div>
        </div>
        <div className="square">
          <div className="inner-square" id="pictures">
            <div className="square-image"></div>
            <div className="square-text">
              <h3></h3>
              <Link to="/pictures">
                <h2>Pictures</h2>
              </Link>
            </div>
          </div>
        </div>
        <div className="square">
          <div className="inner-square" id="videos">
            <div className="square-image"></div>
            <div className="square-text">
              <h3></h3>
              <Link to="/videos">
                <h2>Videos</h2>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

