import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import ProductViewer from "./components/ProductViewer";
import Showcase from "./components/Showcase";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Performance from "./components/Performance";
import Footer from "./components/Footer";
import Highlights from "./components/Highlights";
import Features from "./components/Features";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function App() {
  return (
    <main>
      <NavBar />
      <Hero />
      <ProductViewer />
      <Showcase />
      <Performance />
      <Features />
      <Highlights />
      <Footer />
    </main>
  );
}
