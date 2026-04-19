import About from "./(sections)/about";
import Contact from "./(sections)/contact";
import Experience from "./(sections)/experience";
import Hero from "./(sections)/hero";
import Projects from "./(sections)/projects";

export default function MainPage() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Projects/>
      <Contact />
    </>
  );
}
