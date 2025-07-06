// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";

import "./App.scss";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Wellbeing from "./components/Wellbeing/Wellbeing";
import Produce from "./components/Produce/Produce";
import NutritionInfo from "./components/NutritionInfo/NutritionInfo";
import WellbeingStarts from "./components/WellbeingStarts/WellbeingStarts";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";

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
