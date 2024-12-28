import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Socials from "../components/Socials";

const Home: React.FC = () => {
  return (
    <>
      <main className="pt-16"> 
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Socials />
      </main>
    </>
  );
};

export default Home;