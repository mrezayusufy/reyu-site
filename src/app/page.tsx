import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Image from 'next/image'
import SocialMediaIcon from './components/social-media-icon'
import Services from './components/services'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <section className={styles.hero}>
        {/* social media */}
        <div className={styles.socialMediaWrapper}>
          <ul className={styles.socialMedia}>
            <li><SocialMediaIcon link="https://facebook.com/reyu443" title="facebook" src="/facebook.svg" /></li>
            <li><SocialMediaIcon link="https://github.com/mrezayusufy" title="github" src="/github.svg" /></li>
            <li><SocialMediaIcon link="https://linkedin.com/in/mrezayusufy" title="linkedin" src="/linkedin_circled.svg" /></li>
            <li><SocialMediaIcon link="https://medium.com/@mrezayusufy" title="medium" src="/medium.svg" /></li>
            <li><SocialMediaIcon link="https://t.com/mrezayusufy" title="telegram" src="/telegram_app.svg" /></li>
            <li><SocialMediaIcon link="https://twitter.com/mrezayusufy" title="twitter" src="/twitter_circled.svg" /></li>
          </ul>
        </div>
        {/* title */}
        <div className={styles.titleWrapper}>
          <h1 className={styles.title}>Hello, I am M.Reza Yusufy a <br /> {"<Web Developer/>"}</h1>
          <p>it is a long established fact that a reader will be distracted by the readable content of a page layout</p>
          <div>
            <button className={styles.btnFuncy}>Browse Projects</button>
          </div>
        </div>
        {/* avatar */}
        <div className={styles.avatarWrapper}>
          <div className={styles.rightBox}></div>
          <Image className={styles.avatar} src="/avatar.png" alt="avatar" width="400" height="400" />
          <div className={styles.leftBox}></div>
          <div className={styles.miniLeftBox}></div>
          <div className={styles.miniRightBox}></div>
        </div>
      </section>
      <Services/>
      <section>this is a test</section>
    </>
  )
}
