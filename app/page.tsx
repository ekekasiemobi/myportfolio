import Image from "next/image";
import Nav from "./components/nav";
import Hero from "./components/hero";
import About from "./components/about" 
import Project from "./components/project";
import Contact from "./components/contact";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Project />
      <Contact />
    </>
  );
}
