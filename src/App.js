import "./App.css";
import About from "./Components/About";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import { BrowserRouter } from "react-router-dom";
import Resume from "./Components/Resume";
import Services from "./Components/Services";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Blog from "./Components/Blog";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <div>
          <Home />
        </div>

        <div>
          <About />
        </div>

        <div>
          <Resume />
        </div>

        <div>
          <Services />
        </div>

        <div>
          <Skills/>
        </div>

        <div>
          <Projects/>
        </div>

       <div>
       <Blog/>
       </div>
      </BrowserRouter>
    </>
  );
}

export default App;