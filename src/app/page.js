import Hero from "@/components/Hero";
import About from "@/components/About";
import Sermon from "@/components/Sermon";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <section className="overflow-hidden">
        <Hero />
        <About />
        <Sermon />
        <Contact/>
      </section>
    </main>
  );
}
