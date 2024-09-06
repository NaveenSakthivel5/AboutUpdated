import './HomeDemo.css'
import ScrollControlledVideo from './ScrollControlledVideo';


export default function HomeDemo() {
  return (
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
            {/* <div className="gear2">
              <img src={Gear} className="gear-pic" />
            </div> */}
          </div>
        </div>
        <ScrollControlledVideo/>
        <div className="gear-text ">
          <p className="gear-para">
            DISCOVER TRUE FREEDOM WITH MERCELLEINE <br /> SUPERBIKES OFFERING
            UNPARALLELED RANGE.
          </p>
        </div>
        <div className="gear-setting">
          <p className="gear-watt">
            POWER <br />
            <span className="font-watt"> 90 <span className="kilowatt-space">KW</span> </span>
          </p>
          {/* <img src={GearFinal} className="gear1-pic" /> */}
          <p className="gear-torque">
            TORQUE <br />
            <span className="font-watt">150 <span className="kilowatt-space">NM</span></span>
          </p>
        </div>
      </div>
  )
}


