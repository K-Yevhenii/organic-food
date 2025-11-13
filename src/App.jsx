import "./App.scss";
import Hero from "./components/Hero";
import Wellbeing from "./components/Wellbeing";
import Produce from "./components/Produce";
import NutritionInfo from "./components/NutritionInfo";
import WellbeingStarts from "./components/WellbeingStarts";
import Features from "./components/Features";
import Layout from "./components/Layout";

function App() {
    return (
        <Layout>
            <main>
                <Hero />
                <Wellbeing />
                <Produce />
                <NutritionInfo />
                <WellbeingStarts />
                <Features />
            </main>
        </Layout>
    );
}

export default App;
