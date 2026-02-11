import { useDarkMode } from './hooks/useDarkMode';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import SideProjects from './components/SideProjects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [isDark, toggleDark] = useDarkMode();

  return (
    <div className="min-h-screen font-sans">
      <Navbar isDark={isDark} toggleDark={toggleDark} />
      <main>
        <Hero isDark={isDark} />
        <About isDark={isDark} />
        <Skills isDark={isDark} />
        <Projects isDark={isDark} />
        <SideProjects isDark={isDark} />
        <Contact isDark={isDark} />
      </main>
      <Footer isDark={isDark} />
    </div>
  );
}
