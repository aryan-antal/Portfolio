import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';  // Use HashRouter here
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import About from './Pages/About';
import Resume from './Pages/Resume';
import NotFound from './Pages/NotFound'; // 404 Page Import

function App() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="*" element={<NotFound />} /> {/* Catch-all route for 404 */}
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
