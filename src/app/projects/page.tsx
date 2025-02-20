"use client";

import Footer from "../components/Footer";

import { RevealOnScroll } from "../components/ui/reveal-on-scroll";
import Header from "../components/header";
import React from "react";
import Projects from "../components/Projects";


function RevealLayout({ children }: { children: React.ReactNode }) {
  return React.Children.map(children, (child) => (
    <RevealOnScroll width="100%">
      {child}
    </RevealOnScroll>
  ));
}

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <RevealLayout>
        <Projects />
        <Footer />
      </RevealLayout>
    </div>
  );
}