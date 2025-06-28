import Hero from "@/components/Hero";
import About from "@/components/About";
import Sermon from "@/components/Sermon";

export default function Home() {
  return (
    <main>
      <section>
        <Hero />
      
        <About />
        <Sermon/>
      </section>
    </main>
  );
}
