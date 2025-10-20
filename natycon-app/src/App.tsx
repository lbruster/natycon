import NavBar from "./components/NavBar";
import HeroSection from "./sections/HeroSection";

function App() {
  return (
    <>
      <main>
        <NavBar />
        <div id="smooth-wrapper">
          <div id="smooth-content">
            <HeroSection />
            <HeroSection />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
