import React from "react";
import Header from "../components/Header";
import Hero from "../components/Podcats/Hero";
import Footer from "../components/Footer";
import PodcastsSlider from "../components/Podcats/PodcastsSlider";

const Podcasts = () => {
  return (
    <>
      <Header />
      <main className="pt-5 md:pt-10 pb-10 md:pb-20">
        <Hero />
        <PodcastsSlider />
      </main>
      <Footer />
    </>
  );
};

export default Podcasts;
