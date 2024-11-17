import Header from "./components/Header.tsx";
import Hero from "./components/Body/Hero.tsx";
import Footer from "./components/Footer.tsx";
import Slider from "./components/Body/Slider.tsx";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-5 md:pt-10 pb-10 md:pb-20">
        <Hero />
        <Slider />
      </main>
      <Footer />
    </>
  );
}
