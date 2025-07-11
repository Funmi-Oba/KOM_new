import Hero from "@/components/Hero";
import About from "@/components/About";
import Sermon from "@/components/Sermon";
import Contact from "@/components/Contact";
import Donate from "@/components/Donate";

export default function Home() {
  return (
    <main>
      <section className="overflow-hidden">
        <Hero />
        <About />
        <Sermon />
        <Contact/>
        <Donate/>
      </section>
    </main>
  );
}
