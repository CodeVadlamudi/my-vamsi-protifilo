import type { NextPage } from "next";
import Head from "next/head";
import About from "../components/About";
import Contact from "../components/Contact";
import Educations from "../components/Educations";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Skills from "../components/Skills";

const Home: NextPage = () => {
  return (
    <div className="h-screen bg-[#212121] text-white snap-y snap-mandatory overflow-scroll z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#FFA500]/80">
      <Head>
        <title>Vamsi's Protiflio</title>
      </Head>

      <Header />

      <section id="hero" className="snap-start">
        <Hero />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>

      <section id="educations" className="snap-start">
        <Educations />
      </section>

      <section id="skills" className="snap-center">
        <Skills />
      </section>

      <section id="contact" className="snap-center">
        <Contact />
      </section>
    </div>
  );
};

export default Home;
