import ReactLenis, { useLenis } from 'lenis/react'; // Importing ReactLenis and useLenis
import './Contact1.css';
import Header from './Header';

export default function Contact1() {
  // Initializing useLenis for smooth scrolling
  const lenis = useLenis(({ scroll }) => {
    console.log('Scroll position:', scroll);
  });

  return (
    <ReactLenis root> {/* Wrapping the content with ReactLenis */}
      <div className="contact-1">
        <div className="container-4">
          
        <Header/>
          <div className="contact">CONTACT</div>
          <div className="have-an-inquiry-about-mercellenie-get-in-touch-with-us">
            Have an inquiry about Mercellenie? <br />
            Get in touch with us.
          </div>
          <div className="group-18">
            <div className="rectangle-1550"></div>
            <div className="rectangle-1549"></div>
            <div className="rectangle-1548"></div>
          </div>

          {/* New Flex Container for Columns */}
          <div className="columns-container">
            {/* First Column */}
            <div className="column-left">
              <div className="container-13">
                <div className="container-19">
                  <span className="general-query">GENERAL QUERY</span>
                  <span className="infomercellinie-com">info@mercellinie.com</span>
                  <div className="phone-number-1">PHONE NUMBER</div>
                  <div className="container">+91-986563789</div>
                  <div className="location">LOCATION</div>
                  <div className="no-529530-intermediate-ring-rd-domlur-bengaluru-karnataka-560071">
                    No. 529, 530, Intermediate <br />
                    Ring Rd, Domlur, Bengaluru, <br />
                    Karnataka 560071
                  </div>
                </div>
              </div>
            </div>

            {/* Second Column */}
            <div className="column-center">
              <div className="frame-52">
                <div className="group-52">
                  <div className="container-2">
                    <select
                      className="dropdown-field"
                      id="writing-us-for"
                      name="writing-us-for"
                    >
                      <option value="" disabled selected>Writing us for</option>
                      <option value="vendors">Vendors</option>
                      <option value="manufacturers">Manufacturers</option>
                      <option value="partners">Partners</option>
                      <option value="media">Media</option>
                    </select>
                  </div>

                  <div className="container-1">
                    <input
                      type="text"
                      id="full-name"
                      className="input-field"
                      placeholder="Full Name"
                      style={{ backgroundColor: 'transparent', border: 'none', color: '#BBBBBB', width: '100%' }}
                    />
                  </div>

                  <div className="container-18">
                    <input
                      type="email"
                      id="email-address"
                      className="input-field"
                      placeholder="Email Address"
                      style={{ backgroundColor: 'transparent', border: 'none', color: '#BBBBBB', width: '100%' }}
                    />
                  </div>

                  <div className="container-12">
                    <input
                      type="tel"
                      id="phone-number"
                      className="input-field"
                      placeholder="Phone Number"
                      style={{ backgroundColor: 'transparent', border: 'none', color: '#BBBBBB', width: '100%' }}
                    />
                  </div>

                  <div className="container-6">
                    <textarea
                      id="message"
                      className="input-field"
                      placeholder="Message"
                      style={{ backgroundColor: 'transparent', border: 'none', color: '#BBBBBB', width: '100%', height: '100px' }}
                    />
                  </div>
                </div>
                <div className="frame-51">
                  <button className="submit-button" style={{ backgroundColor: '#FFDD33', color: '#060606', border: 'none', padding: '15px 0', width: '100%' }}>
                    SUBMIT
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

       
        <div className="vector-container">
          <img className="vector-1" src="src/assets/vectors/Vector3_x2.svg" />
        </div>

        
        <div className="download-icons">
          <div className="download-1">
            <a href="https://www.linkedin.com/in/mercellenie-automotive-9a1910309/" target='_blank'>
              <img className="vector-2" src="src/assets/vectors/Vector7_x2.svg" alt="Download 1" />
            </a>
          </div>
          <div className="download-2">
            <a href="#" target='_blank'>
              <img className="vector-3" src="src/assets/vectors/Vector5_x2.svg" alt="Download 2" />
            </a>
          </div>
          <div className="download-3">
            <a href="https://www.instagram.com/mercellenie/" target='_blank'>
              <img className="vector-4" src="src/assets/vectors/Vector6_x2.svg" alt="Download 3" />
            </a>
          </div>
          <div className="download-4">
            <a href="https://www.facebook.com/profile.php?id=61565197859780" target='_blank'>
              <img className="vector-5" src="src/assets/vectors/Vector13_x2.svg" alt="Download 4" />
            </a>
          </div>
          <div className="download">
            <a href="https://www.youtube.com/@Mercellenie" target='_blank'>
              <img className="vector-6" src="src/assets/vectors/Vector2_x2.svg" alt="Download 5" />
            </a>
          </div>
        </div>

        <div className="footer">
          <span className="mercellinie">©2024 MERCELLINIE</span>
          <span className="privacy-policy">PRIVACY POLICY</span>
          <span className="made-by-wings">Made by wings</span>
        </div>

        <div className="bottom-background"></div>
      </div>
    </ReactLenis>
  );
}
