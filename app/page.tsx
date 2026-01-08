import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Workouts from "@/components/Workouts";
import Coaching from "@/components/Coaching";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Workouts />
      <Coaching />
      <About />
      <Contact />
    </main>
  );
}
