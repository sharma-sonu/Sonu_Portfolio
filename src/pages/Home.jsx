import HeroSection from "../components/HeroSection";
import About from "../components/About";
import Projects from "../components/Projects";
import Certifications from "../pages/Certifications"


const Home = () => {
  return (
    <>
    {/* <About/> */}
      <HeroSection />
       <Projects />
       <Certifications />
    </>
  );
};

export default Home;
