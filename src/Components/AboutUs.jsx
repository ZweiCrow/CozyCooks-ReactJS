import React from "react";
import "../Utils/Sass/aboutus.scss";

const AboutUs = () => {
  return (
    <section id="About">
      <h1 style={{ display: "none" }}>A Propos</h1>
      <div id="ALeft">
        <div id="aboutus">
          <h2>A Propos de nous</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            euismod enim dolor, eget convallis sem porta sed. Curabitur semper
            tempor erat, ut eleifend tellus. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae; Nam quis
            neque at urna placerat dictum. Donec viverra nibh eget odio aliquet
            feugiat.
          </p>
        </div>
        <div id="contactus">
          <h2>Envie de nous contacter ?</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            euismod enim dolor, eget convallis sem porta sed. Curabitur semper
            tempor erat, ut eleifend tellus.
          </p>
          <form>
            
          </form>
        </div>
      </div>
      <div id="ARight"></div>
    </section>
  );
};

export default AboutUs;
