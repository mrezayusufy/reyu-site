import Image from 'next/image'
import "./styles.css"
import Subtitle from './subtitle'
import Title from './title'
import Text from './text';
export default function AboutMe() {
  let angle = (85 * 360) / 100;
  const red = {"--deg": `${(85 * 360) / 100}deg 90deg` , "--color": "#dc3545"} as React.CSSProperties;
  const yellow = {"--deg": `${(70 * 360) / 100}deg 90deg`, "--color": "#ffc107"} as React.CSSProperties;
  const mediumslateblue = {"--deg": `${(90 * 360) / 100}deg 90deg`, "--color": "#084298"} as React.CSSProperties;
  return (
    <section>
      <main className="columns">
        <div className="position-relative">
          <div className="skew">  
            <Image src="/profile.png" width={300} height={400} alt="Profile" />
          </div>
          <div className="shape"></div>
        </div>
        <div className="col">
          <Subtitle text="about me"/>
          <Title text="I can develop anything for your needs"/>
          <ul className="d-flex flex-column gap-3">
            <li className="d-flex gap-3 align-items-center">
              <div >
                <div className='circle-per' style={red}>
                  <div>85%</div>
                </div>
              </div>
              <div >
                <Text text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam quas, consequatur placeat ipsum iure eaque aliquid aperiam."/>
              </div>
            </li>
            <li className="d-flex gap-3 align-items-center">
              <div >
                <div className='circle-per' style={yellow}>
                  <div>70%</div>
                </div>
              </div>
              <div >
                <Text text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam quas, consequatur placeat ipsum iure eaque aliquid aperiam."/>
              </div>
            </li>
            <li className="d-flex gap-3 align-items-center">
              <div >
                <div className='circle-per' style={mediumslateblue}>
                  <div>90%</div>
                </div>
              </div>
              <div >
                <Text text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam quas, consequatur placeat ipsum iure eaque aliquid aperiam."/>
              </div>
            </li>
          </ul>
        </div>
      </main>
    </section>
  )
}