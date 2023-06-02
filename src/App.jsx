import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Toolbox,
  Works,
  StarsCanvas,
  Frameworks,
} from "./components";
import Languages from "./components/Languages";
import Externals from "./components/Externals";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar></Navbar>
          <Hero></Hero>
        </div>
        <About />
        <Experience />
        <Frameworks />
        <Toolbox />
        <Languages />
        <div className="relative z-0">
          <Works />
          <StarsCanvas />
        </div>
        <Externals />
        <Contact />
      </div>
    </BrowserRouter>
  );
};

export default App;
