import Features from "./_components/Features";
import Footer from "./_components/Footer";
import Hero from "./_components/Hero";
import HowItWorks from "./_components/HowItWorks";
import Navbar from "./_components/Navbar";
import Pricing from "./_components/Pricing";
import Transform from "./_components/Transform";
import TrustedBy from "./_components/TrustedBy";

export const metadata = {
  title: 'DoctorCRM - Your Medical Practice Assistant',
  description: 'DoctorCRM helps you manage patients, appointments, and medical records with ease.',
};


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

