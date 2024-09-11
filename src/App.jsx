import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Services from "./pages/Services.jsx";
import Contact from "./pages/Contact.jsx";
import Navbar from './components/Navbar.jsx'
import ErrorPage from "./pages/ErrorPage.jsx";
import { useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa";
import Logoheader from "/logo-header.svg";


const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Simulate a delay to demonstrate the loading animation
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  if (loading) {
    return (
      <div className="flex justify-center gap-4 items-center h-screen ">
        <img src={Logoheader} className="w-48" />
        <FaSpinner className="w-10 h-10 text-gray-600 animate-spin" />
      </div>
    );
  }

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="services" element={<Services />} />
            <Route path="" element={<Services />}>
          </Route>
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App
