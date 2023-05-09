import Image from 'next/image';
import styles from '../page.module.css';
export default function Services() {
  return (<section className="full-bleed">
    <main className={styles.services}>
      <ul className={styles.serviceWrapper}>
        <li>
          <Image src="/backend_development.svg" width={48} height={48} alt='backend dev'/>
          <h3>Backend Development</h3>
          <ul className={styles.listServices}>
            <li>API</li>
            <li>Admin panel</li>
            <li>Multi user auth</li>
          </ul>
        </li>
        <li>
          <Image src="/responsive.svg" alt="frontend" width={48} height={48}/>
          <h3>Frontend Development</h3>
          <ul className={styles.listServices}>
            <li>Responsive</li>
            <li>API Integration</li>
            <li>Reactjs</li>
          </ul>
        </li>
      </ul>
      <div className={styles.thirdPart}>
        <p>what we offer</p>
        <h1>Which services I will provide for you</h1>
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur molestiae natus provident neque ab</span>
        <div>
          <button className={styles.btn}>Explore All Services</button>
        </div>
      </div>
    </main>
  </section>)
}