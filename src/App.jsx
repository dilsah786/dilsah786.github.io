import Styled from "styled-components"
import {Navbar} from "./components/Navbar";
import {Home} from "./components/Home";
import {About} from "./components/About";
import {Skills} from "./components/Skills";
import {Projects} from "./components/Projects";
import {Contact} from "./components/Contact";

const StyledDiv = Styled.div`

`

function App() {
  return (
    <StyledDiv>
           <Navbar />
           <Home />
           <About />
           <Skills />
           <Projects />
           <Contact />
    </StyledDiv>
  );
}

export default App;
