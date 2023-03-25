import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import { Box } from '@chakra-ui/react';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import GitStats from './components/GitStats';

function App() {
  return (
    <Box bg={"#1a202c"}>
      <Navbar />
      <Box
        m={{ base: "auto" }}
        zIndex={"9"}
        w={{ base: "100%" }}
        h={{ base: "50rem" }}
        position={"absolute"}
        top={{ base: "4rem" }}
        color={"whiteAlpha.800"}
        fontSize={{ base: "4xl" }}
        bg={"blue.900"}
      >
        <Box
          display={{ base: "flex" }}
          gap={{ base: "0rem" }}
          flexDirection={"column"}
          w={{ base: "60%" }}
          m={{ base: "auto" }}
        >
          <Box>Home</Box>
          <Box>About</Box>
          <Box>Skills</Box>
          <Box>Projects</Box>
          <Box>Contact</Box>
          <Box>Resume</Box>
        </Box>

      </Box>
      <Home />
      <About />
      <Skills />
      <Projects />
      <GitStats />
      <Contact />
    </Box>
  );
}

export default App;
