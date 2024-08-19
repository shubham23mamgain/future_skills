import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Abstract from "./pages/Abstract";
import Layout from "./components/Layout";
import HelpCenter from "./pages/HelpCenter";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import SearchCards from "./pages/SearchCards";
import SingleCard from "./pages/SingleCard";

function App() {
  const [orderPopup, setOrderPopup] = useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Layout
              handleOrderPopup={handleOrderPopup}
              orderPopup={orderPopup}
              setOrderPopup={setOrderPopup}
            />
          }
        >
          <Route index element={<Abstract />} />
          <Route path="/help" element={<HelpCenter />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/cards/:cardId" element={<SingleCard />} />
          <Route path="/cards/search" element={<SearchCards />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
