/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Sectors } from "./components/Sectors";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { Projects } from "./components/Projects";
import { TrustedBy } from "./components/TrustedBy";
import { Leadership } from "./components/Leadership";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#faf8ff] text-[#131b2e]">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <Services />
        <Sectors />
        <WhyChooseUs />
        <Projects />
        <TrustedBy />
        <Leadership />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
