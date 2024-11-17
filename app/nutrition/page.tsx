import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Nutrition/Hero";
import NutritionProducts from "../components/Nutrition/NutritionProducts";

const Store: React.FC = () => {
  return (
    <>
      <Header />
      <main className="pt-5 md:pt-10 pb-10 md:pb-20">
        <Hero />
        <NutritionProducts />
      </main>
      <Footer />
    </>
  );
};

export default Store;
