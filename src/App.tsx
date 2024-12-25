import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <main className="pt-16"> 
        <Hero />
        <About />
        <Skills />
      </main>
    </>
  );
};

export default App;
