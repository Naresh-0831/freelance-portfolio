import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Projects from "./components/Projects";
import About from "./components/About"; 
import Process from "./components/Process";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import TermsAndConditions from "./pages/TermsAndConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";

import "./styles/global.css";

function App() {
  const path = window.location.pathname;

if (path === "/terms-and-conditions") {
  return <TermsAndConditions />;
}

if (path === "/privacy-policy") {
  return <PrivacyPolicy />;
}
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Services />
        <Projects />
        <About />
        <Process />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;