import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import ProjectDetail from "./pages/ProjectDetail";
import ScrollToTop from "./components/ScrollToTop";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import About from "./components/About";

const App: React.FC = () => {

  
  return (
    <div
      className={`bg-gradient-to-r from-primaryDark to-primary min-h-screen text-color-primary pt-16 transition duration-500 ease-in-out`}>
      <BrowserRouter>
        <ScrollToTop />
        <Header />
      

        <Routes>
          <Route path="/projects/:title" element={<ProjectDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  );
};

export default App;
