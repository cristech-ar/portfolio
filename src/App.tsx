import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TechSkills from './components/TechSkills';
import Career from './components/Career';
import Projects from './components/Projects';
import Footer from './components/Footer';
import { Sun, Moon } from 'lucide-react';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={`font-sans antialiased transition-colors duration-500 ${darkMode ? 'dark bg-black' : ''}`}>
      <Navbar darkMode={darkMode} />
      <button
        onClick={toggleDarkMode}
        className={`fixed top-6 right-6 z-50 p-3 rounded-full transition-all duration-300 ${
          darkMode 
            ? 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm' 
            : 'bg-black/5 hover:bg-black/10 backdrop-blur-sm'
        }`}
        aria-label="Toggle dark mode"
      >
        {darkMode ? <Sun size={24} /> : <Moon size={24} />}
      </button>
      <Hero darkMode={darkMode} />
      <About darkMode={darkMode} />
      <TechSkills darkMode={darkMode} />
      <Projects darkMode={darkMode} />
      <Career darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;