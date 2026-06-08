import { Routes, Route } from 'react-router-dom';
import NeuralBackground from './components/NeuralBackground';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import MobileCTA from './components/MobileCTA';
import Home from './pages/Home';
import HowItWorksPage from './pages/HowItWorksPage';
import PricingPage from './pages/PricingPage';
import LiveDemoPage from './pages/LiveDemoPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <div className="relative min-h-screen bg-[#05070C] text-[#E8ECF4]">
      <NeuralBackground />
      <ScrollToTop />
      <Navbar />
      <div className="relative z-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/demo" element={<LiveDemoPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
      <MobileCTA />
    </div>
  );
}

export default App;
