import Nav from "./components/Nav";
import ViewCounter from "./components/ViewCounter";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import ContentWriting from "./components/ContentWriting";
import UGCContent from "./components/UGCContent";
import WhyWorkWithMe from "./components/WhyWorkWithMe";
import Skills from "./components/Skills";
import TrustedBy from "./components/TrustedBy";
import Projects from "./components/Projects";
import Process from "./components/Process";
import Experience from "./components/Experience";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="font-body">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-blue focus:text-white"
      >
        Skip to content
      </a>
      <Nav />
      <ViewCounter />
      <main id="main-content">
        <Hero />
        <About />
        <Services />
        <ContentWriting />
        <UGCContent />
        <WhyWorkWithMe />
        <Skills />
        <TrustedBy />
        <Projects />
        <Process />
        <Experience />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
