import Services from './components/services'
import AboutMe from './components/about-me'
import "./styles.css";
import Hero from './components/hero'
import PortfolioWorks from './components/portfolio-works';
import Feedback from './components/feedback';
import Avarage from './components/avarage';

export default function Home() {
  return (
    <>
      <Hero/>
      <Services/>
      <AboutMe/>
      <PortfolioWorks/>
      <Feedback/>
      <Avarage/>
    </>
  )
}