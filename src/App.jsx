import { useState } from "react";
import Header from "./components/Header/Header";
import Slider from "./components/Slider/Slider";
import Navbar from "./components/Navbar/Navbar";
import "./App.scss";
import Well from "./components/Well/Well";
import Payment from "./components/Payment/Payment";
import Collect from "./components/Collect/Collect";
import Trending from "./components/Trending/Trending";
import Offer from "./components/Offer/Offer";
import Custom from "./components/Custom/Custom";
import Footer from "./components/Footer/Footer";
import Our from "./components/Our/Our";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Well />
      <Header />
      <Navbar />
      <Slider />
      <Payment />
      <Collect />
      <Trending />
      <Offer />
      <Trending />
      <Custom />
      <Our />
      <Footer />
    </>
  );
}

export default App;
