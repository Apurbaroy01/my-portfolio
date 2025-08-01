
import About from './Components/About';
import Contact from './Components/Contact';
import Experience from './Components/Experience';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import Projects from './Components/Projects';
import Skills from './Components/Skills';

const Root = () => {
    return (
        <div className='bg-[#0f051d]'>
            <Navbar></Navbar>
            <Hero></Hero>
            <About></About>
            <Skills></Skills>
            <Projects></Projects>
            <Experience></Experience>
            <Contact></Contact>
            
        </div>
    );
};

export default Root;