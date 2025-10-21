import NavBar from "./components/NavBar";
import BenefitSection from "./sections/BenefitSection";
import FooterSection from "./sections/FooterSection";
import HeroSection from "./sections/HeroSection";
import MessageSection from "./sections/MessageSection";
import NutritionSection from "./sections/NutritionSection";

function App() {
  return (
    <>
      <main>
        <NavBar />
        <div id="smooth-wrapper">
          <div id="smooth-content">
            <HeroSection />
            <NutritionSection />
            <BenefitSection />
            <MessageSection />
            <FooterSection />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
