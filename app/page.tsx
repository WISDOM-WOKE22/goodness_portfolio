"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Skills from "@/components/skills";
import Articles from "@/components/article";
import Contact from "@/components/contact";
import WorkLife from "@/components/workLife";

export default function Home() {
  return (
    <>
      <Header/>
      <Hero/>
      <Skills/>
      <Articles/>
      <WorkLife/>
      <Contact/>
      <Footer/>
    </>
  );
}
