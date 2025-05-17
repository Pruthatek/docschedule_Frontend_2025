import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import Transform from "./components/Transform";
import TrustedBy from "./components/TrustedBy";



export default function Home() {

  
  return (
    <div>
      <Navbar/>
      <section id="hero">
        <Hero />
      </section>
      <section id="features">
        <Features />
      </section>
      <section id="trustedby">
        <TrustedBy />
      </section>
      <section id="solutions">
        <HowItWorks />
      </section>
      <section id="pricing">
        <Pricing />
      </section>
      <section id="contact">
        <Transform />
      </section>
      <Footer/>
    </div>
  );
}

