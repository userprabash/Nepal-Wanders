import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import ScrollToTopButton from "./Component/ScrollToTopButton";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <ScrollToTopButton />
      <Footer />
    </>
  );
}

export default App;
