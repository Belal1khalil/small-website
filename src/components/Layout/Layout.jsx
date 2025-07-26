
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { useState, useEffect } from "react";

export default function Layout() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <div className="container w-[100%] pb-10 pt-20 min-h-[75vh] dark:bg-gray-900 transition-colors duration-300">
        <Outlet></Outlet>
      </div>
      <Footer />
    </>
  );
}
