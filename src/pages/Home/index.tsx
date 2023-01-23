import { Link } from "react-router-dom";
import "./style.css";
import logo from "../../assets/images/logo-png-web.png";
import { useLayoutEffect } from "react";
import Block from "../../components/Block";
import Carousel from "../../components/Carousel";

export const Home = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <main>
      <div className="intro">
        <img src={logo} alt="Logo" />
      </div>

      <div className="block-bg-white text-block">
        <h1>HOW PRECIOUS IS THY WORD, GOD OF ISRAEL</h1>
        <hr />
        <p>
          Let's rejoice in the presence of our God and Savior. We are committed to preach the Word of God, and in his Son Jesus Christ. It
          our pleasure to be here to serve you, in Jesus name.
        </p>
      </div>

      <div className="block-bg-blue">
        <div className="square-container">
          <div className="block-flex-wrap">
            <div className="square">
              <div className="inner-square" id="church"></div>
            </div>

            <div className="square stretch">
              <div className="rectangle-text">
                <Link to="/thechurch">
                  <h1>The Church</h1>
                </Link>
                The places like Apostolic and Prophetic Ministries El Shaddai are not only religiously important but as well have great
                historic value in our country. This is one of the churches of Massachusetts. Not solely providing a space to worship God, it
                can also host recreational events, join diverse cultural activities, establish a friendly group of like-minded persons and
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
                The places like Apostolic and Prophetic Ministries El Shaddai are not only religiously important but as well have great
                historic value in our country. This is one of the churches of Massachusetts. Not solely providing a space to worship God, it
                can also host recreational events, join diverse cultural activities, establish a friendly group of like-minded persons and
                offer vital social care.
              </div>
            </div>
            <div className="square">
              <div className="inner-square" id="our-family"></div>
            </div>
          </div>
        </div>
      </div>

      <Block
        title="Prayers"
        alignX="start"
        alignY="top"
        image="../../assets/images/prayer-1308663_640.jpg"
        link="/prayer"
        text="Would you like us to pray for you? Send your request."
        color1="var(--color-primary)"
        color2="#111"
        background="rgba(255, 255, 255, 0.5)"
      />
      <Block
        title="Missions"
        alignX="start"
        alignY="end"
        image="../../assets/images/different-nationalities-1280.jpg"
        link="/missions"
        text="Updates on all our missions"
        color1="var(--color-secondary)"
        color2="#eee"
        background="rgba(0, 0, 0, 0.5)"
      />
      <Block
        title="Agenda"
        alignX="start"
        alignY="center"
        image="../../assets/images/planner.jpeg"
        link="/agenda"
        text="Check our worships, meetings, lives..."
        color1="var(--color-primary)"
        color2="#111"
        background="rgba(255, 255, 255, 0.5)"
      />
      <Carousel />
    </main>
  );
};
