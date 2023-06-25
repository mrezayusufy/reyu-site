import Services from './components/services'
import AboutMe from './components/about-me'
import "./styles.css";
import Hero from './components/hero'
import PortfolioWorks from './components/portfolio-works';
import Feedback from './components/feedback';
import Avarage from './components/avarage';
import CommonQuestion from './components/common-question';
import ContactWithMe from './components/contact-with-me';
import BlogNews from './components/blog-news';

export default function Home() {
  return (
    <>
      <Hero/>
      <Services/>
      <AboutMe/>
      <PortfolioWorks/>
      <Feedback/>
      <Avarage/>
      <CommonQuestion/>
      <ContactWithMe/>
      <BlogNews/>
    </>
  )
}
