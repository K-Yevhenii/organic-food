// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";

import "./App.scss";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Wellbeing from "./components/Wellbeing";
import Produce from "./components/Produce";
import NutritionInfo from "./components/NutritionInfo";
import WellbeingStarts from "./components/WellbeingStarts";
import Features from "./components/Features";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container">
      <Header />
      <main>
        <Hero />
        <Wellbeing />
        <Produce />
        <NutritionInfo />
        <WellbeingStarts />
        <Features />
      </main>
      <Footer />
    </div>
  );
}

export default App;
