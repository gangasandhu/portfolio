import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import ProjectDetail from "./pages/ProjectDetail";

const App: React.FC = () => {
  return (
    <div
      className="bg-gradient-to-r from-indigo-900 to-gray-900 min-h-screen text-white"
    >
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/projects/:title" element={<ProjectDetail />} />

          <Route path="/" element={<Home />}>
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  );
};

export default App;
