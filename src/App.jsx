import { useState } from "react";
// Athenea Analytics — Main Orchestrator
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import CTA from "./sections/CTA";
import FAQ from "./sections/FAQ";
import Login from "./components/Login";

export default function App() {
  const [currentView, setCurrentView] = useState("landing");

  if (currentView === "login") {
    return <Login onBack={() => setCurrentView("landing")} />;
  }

  return (
    <div className="min-h-screen bg-athenea-bg font-body antialiased">
      <Navbar onLoginClick={() => setCurrentView("login")} />
      <main>
        <Hero />
        <Features />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
