/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Pricing from './components/Pricing';
import HowItWorks from './components/HowItWorks';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import WhatsAppFAB from './components/WhatsAppFAB';

export default function App() {
  return (
    <div className="relative bg-brand-black min-h-screen">
      <Navbar />
      <Hero />
      <Benefits />
      <Pricing />
      <HowItWorks />
      <FAQ />
      <Footer />
      <WhatsAppFAB />
    </div>
  );
}
