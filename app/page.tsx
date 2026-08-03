import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { About, Certifications, HowIWork } from "@/components/HomeSections";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <HowIWork />
        <Certifications />
      </main>
      <Footer />
    </>
  );
}
