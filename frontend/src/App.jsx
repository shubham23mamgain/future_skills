import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Abstract from "./pages/Abstract";
import Layout from "./components/Layout";
import HelpCenter from "./pages/HelpCenter";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import About from "./pages/About";

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
      <BrowserRouter>
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
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
