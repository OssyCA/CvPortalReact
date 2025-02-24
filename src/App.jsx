import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Welcome from "./pages/Welcome";
import About from "./pages/About";
import Cv from "./pages/Cv";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import EasterEgg1337 from "./Components/EasterEgg1337";

function App() {
  return (
    <Router basename="/CvPortalReact">
      <EasterEgg1337 />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/about" element={<About />} />
          <Route path="/cv" element={<Cv />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
