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
    <Box>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <GitStats />
    </Box>
  );
}

export default App;
