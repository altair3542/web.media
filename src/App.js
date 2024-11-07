import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeContent from "./components/HomeContent";
import Session1 from "./components/Session1";
import Session2 from "./components/Session2";
import Session3 from "./components/Session3";
import Session4 from "./components/Session4";
import Session5 from "./components/Session5";

function App() {
  const { darkMode } = useTheme();

  return (
    <Router>
      <div
        className={`min-h-screen flex flex-col justify-between ${
          darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-100 text-gray-900"
        } transition-all duration-300`}
      >
        <Header />
        <Routes>
          <Route path="/" element={<HomeContent />} />
          <Route path="/session/1" element={<Session1 />} />
          <Route path="/session/2" element={<Session2 />} />
          <Route path="/session/3" element={<Session3 />} />
          <Route path="/session/4" element={<Session4 />} />
          <Route path="/session/5" element={<Session5 />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default function RootApp() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}
