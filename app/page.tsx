import About from "./(sections)/about";
import Contact from "./(sections)/contact";
import Experience from "./(sections)/experience";
import Hero from "./(sections)/hero";

export default function MainPage() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Contact />
    </>
  );
}
