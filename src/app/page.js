import About from "@/components/About";
import Hero from "@/components/Hero";
import Services from "@/components/Services";

export default function Home() {
  return (
    <>
      <header>
        <Hero />
      </header>
      <About />
      <Services />
    </>
  );
}
