import Image from 'next/image'
import Home from './components/Home';
import About from './components/Aboutme';
import Projects from './components/Projects';
import Icons from './components/Icons';
import Contact from './components/Contact';

export default function Homer() {
  return (
    <main>
      <Home />
      <About />
      <Projects />
      <Icons />
      <Contact />
    </main>
  )
}
