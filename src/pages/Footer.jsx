import React from 'react'

function Footer() {
  return (
    <div className='mer-footer'>
        {/* Vector below container-4 */}
        <div className="vector-container">
          <img className="vector-1" src="src/assets/vectors/Vector3_x2.svg" />
        </div>

        {/* Icons below vector */}
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

        {/* Footer below icons */}
        <div className="footer">
          <span className="mercellinie">©2024 MERCELLINIE</span>
          <span className="privacy-policy">PRIVACY POLICY</span>
          <span className="made-by-wings">Made by wings</span>
          <div className="bottom-background"></div>
        </div>

       
    </div>
  )
}

export default Footer