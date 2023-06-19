import Image from 'next/image'
import Home from './components/Home';
import About from './components/Aboutme';
import Projects from './components/Projects';
import Icons from './components/Icons';

export default function Homer() {
  return (
    <main>
      <Home />
      <About />
      <Projects />
      <Icons />
    </main>
  )
}
