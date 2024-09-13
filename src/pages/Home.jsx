import React, { useEffect, useRef } from "react";
import "./home.css";
//import Bike from "./bike";
import HomeBike from "./assets/image 5.png";
import Mercelline from "./assets/MERCELLINE.png";
import Gloves from "./assets/Gloves.png";
import Image1 from "./assets/image1.png";
import Image2 from "./assets/image2.png";
//import { Battery } from "./battery";
import ART1 from "./assets/Untitled_Artwork 5.png";
import ART2 from "./assets/Group 44.png";
import ART3 from "./assets/Untitled_Artwork 7.png";
import ART4 from "./assets/Group 45.png";
import ART5 from "./assets/Group 43.png";
import Bikefront from "./assets/Mask group (1).png";
import Gear from "./assets/Gear_00000.png";
//import Gear1 from "./assets/gear pic2.png";
import Mask from "./assets/Mask group (2).png";
//import GearFinal from "./assets/gearfinal.png";
import Icon from "./assets/video_icon.png";
import Dot from "./assets/Group 18.png";
import FullBike from "./assets/HOME (1).png";
import Battery1 from "./assets/12.png";
import Battery2 from "./assets/2.png";
// import PowerIcon from "./assets/Power.svg";
// import Lenis from "lenis";
import Top from "./assets/Group 33.png";
import Icon1 from "./assets/download (1) (1).png";
import Icon2 from "./assets/download (1).png";
//import Icon3 from "./assets/download (2).png";
import Icon4 from "./assets/download (3).png";
import Icon5 from "./assets/download (4).png";
import ReactLenis, { useLenis } from 'lenis/react'
import Header from "./Header";

function Home() {
  // const lenis = new Lenis();

  // lenis.on("scroll", (e) => {
  //   console.log(e);
  // });

  // function raf(time) {
  //   lenis.raf(time);
  //   requestAnimationFrame(raf);
  // }

  // requestAnimationFrame(raf);

  const lenis = useLenis(({ scroll }) => {
    console.log('scroll')
  })

  // For scrolling to Top

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* Bike Section */}
      <ReactLenis root>
        <div className="header">
            <Header />
        </div>
        <div className="mask-container">
          <div className="mask-image">
            <img src={FullBike} className="mask-images" />
          </div>
        </div>
        {/* section-1 */}
        <div className="home-container">
          <p className="home-para ">
            <span className="home-para1">EXPERIENCE THE</span> <br />
            <span className="fast-para">INDIA'S FASTEST</span> <br />
            <span className="ride-para"> EV RIDE</span>
          </p>
          <p className="home-intro">
            WELCOME TO MERCELLEINIE - REDEFINING <br />
            THE FUTURE OF ELECTRIC SUPERBIKES
          </p>
          <div className="image-div">
            <img src={HomeBike} alt="Logo" className="HomeBike-image" />
            <div className="icon-div">
              <img src={Icon} className="icon-image" />
              <p className="film-para">WATCH THE FILM</p>
            </div>
          </div>
        </div>
        {/* section-2 */}
        <div className="section-container">
          <div className="background-container">
            <div className="section1-container">
              <div className="section1-flex">
                <div className="col-6 about-col">
                  <p className="about">/01 ABOUT</p>
                </div>
                <div className="col-6">
                  <p className="section-para">
                    DISCOVER THE FREEDOM WITH <br />
                    MERCELLEINIE SUPERBIKES,
                    <br />
                    OFFERING UNPARALLELED <br /> RANGE AND TOP SPEEDS FOR AN
                    <br />
                    ELECTRIFYING, UNCOMPROMISED <br />
                    JOURNEY.
                  </p>
                </div>
              </div>
            </div>
            <div className="section2-container">
              <div className="col-3 col-3">
                <img src={Mercelline} alt="Logo" className="Mercelline-image" />
              </div>
              <div className="col-3 col-2">
                <div>
                  <img src={Image2} alt="Logo" className="Image2-image" />
                  <p className="section2-para">
                    SOFTWARE AND CONNECTIVITY <br />
                    LIGHTWEIGHT MATERIALS <br />
                    ADVANCED BATTERY TECHNOLOGY
                  </p>
                </div>
              </div>
              <div className="col-3 col-1">
                <img src={Image1} alt="Logo" className="Image1-image" />
              </div>
              <div className="col-3 col-4">
                <img src={Gloves} alt="Logo" className="Gloves-image" />
              </div>
            </div>
            <div className="dot">
              <img src={Dot} className="dot-icon" />
            </div>
          </div>
        </div>
        {/* Gear */}
        <div className="gear-container">
          <div className="feature-heading">
            <p className="feature-para">
              THE <br />
              ULTIMATE RIDING <br />
              EXPERIENCE
            </p>
          </div>
          <div className="gear-heading ">
            {/* <p className="gear-power"></p> */}
            <div className="gear-power">
              <div className="gear2">
                <img src={Gear} className="gear-pic" />
              </div>
            </div>
          </div>
          <div className="gear-text ">
            <p className="gear-para">
              DISCOVER TRUE FREEDOM WITH MERCELLEINE <br /> SUPERBIKES OFFERING
              UNPARALLELED RANGE.
            </p>
          </div>
          <div className="gear-setting">
            <p className="gear-watt">
              POWER <br />
              <span className="font-watt">
                {" "}
                90 <span className="kilowatt-space">KW</span>{" "}
              </span>
            </p>
            {/* <img src={GearFinal} className="gear1-pic" /> */}
            <p className="gear-torque">
              TORQUE <br />
              <span className="font-watt">
                150 <span className="kilowatt-space">NM</span>
              </span>
            </p>
          </div>
        </div>
        {/* section-3 */}
        <div className="section3-container">
          <div className="para-position">
            <div className="para-tech">
              <p className="para-num">/02 TECHNOLOGY</p>
            </div>
            <p className="section3-para">
              UNMATCHED <br />
              ELECTRIC <br />
              PERFORMANCE
            </p>
            <p className="section3-shortpara">
              Feel the power surge with our advanced technology, <br />
              delivering thrilling acceleration.We push EV performance <br />
              boundaries to ensure you experience the best drive.
            </p>
          </div>
        </div>
        {/* Battery */}
        <div className="battery-container">
          <div className="battery-tech">
            <p className="battery-num">/03 BATTERY</p>
          </div>
          <div className="battery-flex">
            <div className="battery-heading">
              <p className="battery-para">
                ADVANCED <br />
                BATTERY <br />
                TECHNOLOGY
              </p>
            </div>
            <div className="battery-heading1">
              <div className="flex-battery">
                <div className="moving-battery">
                  <img src={Battery1} className="battery1-pic" />
                </div>
                <p className="battery-para1">
                  Enjoy the ultimate ride with our electric <br /> bikes. With an
                  extensive range and rapid <br /> charging, you can hit the road
                  with <br />
                  confidence. Choose Mercellenie's eco- <br />
                  friendly bikes for an exciting and <br />
                  sustainable journey.
                </p>
              </div>
            </div>
          </div>
          <div className="extensive-battery">
            <div className="battery-rotation">
              <img src={Battery2} className="battery2-pic" />
            </div>
            <div className="battery-para2">
              <p className="batteryrot-heading">
                EXTENSIVE <br /> RANGE AND FAST <br /> CHARGING.
              </p>
              <div className="batteryrot-flex">
                <p className="batteryrot-para">
                  Mercelleinie’s battery pack <br /> delivers
                  <span style={{ color: "yellow" }}>
                    {" "}
                    2x the power of top
                  </span>{" "}
                  <br /> EV batteries for longer rides <br />
                  and faster speeds.
                </p>
              </div>
            </div>
            <div className="battery-rotation1"></div>
          </div>
        </div>
        {/* Features */}
        <div className="feature-heading">
          <p className="vision">/04 FEATURES</p>
          <p className="feature-para">
            AN EVOLUTIONARY VISION <br />
            FOR REVOLUTIONARY <br />
            PRODUCTS
          </p>
        </div>
        {/* Bike Mention */}
        <div className="mask">
          <img src={Mask} className="bike-mask" />
        </div>
        {/* Command your Ride */}
        <div className="command-container">
          <div className="command-dash">
            <p className="dash-para">/04 DASHBOARD</p>
          </div>
          <div className="command-flex">
            <div className="command-arrangement">
              <p className="command-heading">
                COMMAND <br /> YOUR RIDE
              </p>
              <p className="command-para">
                CUTTING-EDGE <br />
                DASHBOARD TECHNOLOGY
              </p>
            </div>
            <div style={{ flex: 7 }}></div>
          </div>
          <div className="row">
            <div className="column1">
              <div className="sub-column text">
                <div className="text-flex">
                  <p className="inch-para">
                    5 INCH TFT <br />
                    DISPLAY
                  </p>
                  <p className="para-command">
                    A vibrant screen providing real-time <br />
                    information and controls.
                  </p>
                </div>
              </div>
              <div className="sub-column image">
                <img src={ART1} className="art" alt="Display 1" />
              </div>
            </div>
            <div className="column2">
              <div className="sub-column text">
                <div className="text-flex">
                  <p className="inch-para">
                    INTEGRATED GPS RECEIVER <br />
                    AND BLUETOOTH
                  </p>
                  <p className="para-command">
                    Enables navigation and <br />
                    communication.
                  </p>
                </div>
              </div>
              <div className="sub-column image">
                <img src={ART2} className="art1" alt="Display 2" />
              </div>
            </div>
          </div>
          <div className="row-layout">
            <div className="column-one">
              <div className="content-wrapper">
                <p className="header-text">
                  NFC & BLUETOOTH <br />
                  256 BIT ENCRYPTION
                </p>
                <p className="description-text">
                  Ensures encryption for seamless, <br />
                  protected integration.
                </p>
                <div className="sub-column image">
                  <img src={ART3} className="image-display" alt="Display 1" />
                </div>
              </div>
            </div>
            <div className="column-two">
              <div className="content-wrapper">
                <p className="header-text">
                  GPS FOR REAL
                  <br />
                  TIME TRACKING
                </p>
                <p className="description-text">
                  Provides location based services, <br />
                  ensuring you're always connected to <br />
                  your route.
                </p>
                <div className="sub-column image">
                  <img src={ART4} className="image-display" alt="Display 2" />
                </div>
              </div>
            </div>
            <div className="column-three">
              <div className="content-wrapper">
                <p className="header-text">
                  9-AXIS INTERTIAL <br />
                  MEASUREMENT UNIT
                </p>
                <p className="description-text">
                  Tracks orientation and motion for <br />
                  enhanced stability.
                </p>
                <div className="sub-column image">
                  <img src={ART5} className="image-display" alt="Display 3" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Final Section*/}
        <div className="feature-heading">
          <p className="feature-para">
            <span className="final-para">READY TO</span> <br />
            EXPERIENCE THE <br />
            FUTURE OF RIDING?
          </p>
        </div>
        <div className="bike-container">
          <div className="bike-background">
            <div className="content-wrapper1">
              <div className="bike-back">
                <div className="top">
                  <img src={Top} className="top-image" onClick={scrollToTop} />
                  <p className="back-top">BACK TO TOP</p>
                </div>
                <div>
                  <p className="policy">
                    <span className="copyrights">2024 MERCELLINIE</span> PRIVACY
                    POLICY
                  </p>
                </div>
              </div>

              <div className="bike-position">
                <img src={Bikefront} className="Bikefront-image" />
              </div>

              <div className="wings">
                <div className="wings-rights">
                  <div className="icon-flex">
                    <a href="https://www.linkedin.com/in/mercellenie-automotive-9a1910309/" target="_blank">
                      <img src={Icon1} className="icon1" alt="Icon 1" />
                    </a>
                    <a href="https://www.youtube.com/@Mercellenie" target="_blank">
                      <img src={Icon2} className="icon2" alt="Icon 2" />
                    </a>
                    <a href="https://www.instagram.com/mercellenie/" target="_blank">
                      <img src={Icon4} className="icon4" alt="Icon 4" />
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=61565197859780" target="_blank">
                      <img src={Icon5} className="icon5" alt="Icon 5" />
                    </a>
                  </div>
                  <p className="wings-work">
                    MADE BY{" "}
                    <a
                      href="https://wings.design/"
                      target="_blank"
                      className="wings-site"
                    >
                      WINGS
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ReactLenis>
    </>
  );
}

export default Home;