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

        <div className="relative z-0">
          <About />
          <Experience />
          <Frameworks />
          <Toolbox />
          <Languages />
          <Works />
          <Externals />
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
