import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";

// import Home from "./pages/Home/Home";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/services" element={<Services />} /> */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
