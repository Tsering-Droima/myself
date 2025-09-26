import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./components/About";
// import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
// import Footer from "./components/Footer";
import "./styles/global.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Router>
      <div className="container">
        <header className="header">
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </button>
          <nav className={`navbar ${menuOpen ? "open" : ""}`}>
            <Link to="/myself" onClick={() => setMenuOpen(false)}>About</Link>
            {/* <Link to="/experience" onClick={() => setMenuOpen(false)}>Experience</Link> */}
            <Link to="/projects" onClick={() => setMenuOpen(false)}>Gallery</Link>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
            {/* <Link to="/resume" onClick={() => setMenuOpen(false)}>Resume</Link> */}
          </nav>
        </header>

        <Routes>
          <Route path="/myself" element={<About />} />
          {/* <Route path="/experience" element={<Experience />} /> */}
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/resume" element={<Resume />} /> */}
          <Route path="/" element={<About />} /> {/* Default Route  */}
        </Routes>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
