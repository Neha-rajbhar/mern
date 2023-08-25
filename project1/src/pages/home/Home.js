import React, { useEffect, useState, useRef } from "react";

import home from "./Home.module.css";
import About from "../about/About";
import AllData from "../allData/AllData";
import Contact from "../contact/Contact";
import Filtered from "../filtered/Filtered";
import AboutUs from "../aboutus/AboutUs";
import { useRecoilValue } from "recoil";
import { filteredState } from "../../recoil/atom";
import Services from "../services/Services";
import Footer from "../../components/footer/Footer";

function Home() {
  const homeRef = useRef();
  const aboutRef = useRef();
  const propertiesRef = useRef();
  const servicesRef=useRef();
  const contactRef = useRef();

  const show = useRecoilValue(filteredState);

  let arr = [
    "http://dannybatista.com/wp-content/uploads/2017/09/austin-photo-real-estate-twilight-photography-cold-springs-4.jpg",
    "https://blog.hdestates.com/wp-content/uploads/2020/04/HD-Real-Estate-Photography-scaled.jpg",
    "https://www.njlux.com/wp-content/gallery/mahwah/modern-luxury-house.jpg",
    "https://luxuryontario.ca/wp-content/uploads/2021/02/Exterior-of-334-Balsam-Drive-Georgian-style-Oakville-real-estate-1600x1067.jpg",
    "http://dannybatista.com/wp-content/uploads/2017/09/harker-heights-twilight-real-estate-photography.jpg",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slider = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % arr.length);
    }, 3000);

    return () => clearInterval(slider);
  }, []);

  return (
    <div className={home.main}>
      <section
        ref={homeRef}
        className={home.homeSection}
        id="home"
        style={{ backgroundImage: `url(${arr[currentSlide]})` }}
      >
        <div className={home.center}>
        <div className={home.homeText}>
          <h1>Your House Is Waiting For You!</h1>
          <p>
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual mockups.
          </p>
          <div className={home.search}>
            <About />
          </div>
        </div>
        </div>
        
      </section>
      {show.length > 0 && <Filtered />}

      <section ref={propertiesRef} id="properties">
        <AllData />
      </section>
      <section ref={aboutRef} id="about">
        <AboutUs />
      </section>

      <section ref={servicesRef} id="service">
        <Services/> 
      </section>

      <section ref={contactRef} id="contact">
        <Contact />
      </section>
      <section>
        <Footer/>
      </section>
    </div>
  );
}

export default Home;
