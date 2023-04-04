import "./App.css";
import AboutSection from "./components/AboutSection";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";

function App() {
  return (
    <div>
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
      </main>
    </div>
  );
}

export default App;
