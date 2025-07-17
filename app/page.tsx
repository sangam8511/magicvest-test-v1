
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Categories from "./components/Categories"
import Oppertunities from "./components/Oppertunities";
import InvestWorks from "./components/InvestWorks"
import Memecoins from"./components/Memecoins"
import Testamonials from "./components/Testamonials";
import Faq from "./components/Faq";
import Insights from "./components/Insights";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
export default function Home() {
  return (
    <div >
     <Navbar/>
     <HeroSection/>
     <Categories/>
     <Oppertunities/>
     <InvestWorks/>
     <Memecoins/>
     <Testamonials/>
     <Faq/>
     <Insights/>
     <Footer/>
    <Intro/>
    </div>
  );
}
