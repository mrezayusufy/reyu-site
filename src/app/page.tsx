import Services from './components/services'
import AboutMe from './components/about-me'
import 'bootstrap/dist/css/bootstrap.css'
import "./styles.css";
import Hero from './components/hero'
import PortfolioWorks from './components/portfolio-works';

export default function Home() {
  return (
    <>
      <Hero/>
      <Services/>
      <AboutMe/>
      <PortfolioWorks/>
    </>
  )
}
