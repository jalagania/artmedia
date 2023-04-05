import "./App.css";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import NewsSection from "./components/NewsSection";
import ServicesSection from "./components/ServicesSection";

function App() {
  return (
    <div>
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <NewsSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
