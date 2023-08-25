import React from "react";
import aboutus from "./AboutUs.module.css";

const AboutUs = () => {
  return (
    <div className={aboutus.main}>
      <section className={aboutus.aboutSection}>
        <div className={aboutus.firstHalf}>
          <div className={aboutus.firstImg}>
          <img src="https://www.njlux.com/wp-content/gallery/mahwah/modern-luxury-house.jpg" />
          </div>
          
        </div>
        <div className={aboutus.secondHalf}>
          <div className={aboutus.second}>
          <h2>About Us</h2>
          <div className={aboutus.texts}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim
            </p>
            <button className={aboutus.button}>Get In Touch</button>
          </div>
          </div>
          
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
