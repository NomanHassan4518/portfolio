import "./App.css";
import About from "./Components/About";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import { BrowserRouter } from "react-router-dom";
import Resume from "./Components/Resume";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

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
          <Skills/>
        </div>

        <div>
          <Projects/>
        </div>


       <div>
        <Contact/>
       </div>

       <div>
        <Footer/>
       </div>
      </BrowserRouter>


    </>
  );
}

export default App;
