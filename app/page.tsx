import Image from "next/image";
import Nav from "./components/nav";
import Hero from "./components/hero";
import About from "./components/about" 
import Project from "./components/project";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Project />
      <h1>Hero</h1>
    </>
  );
}
