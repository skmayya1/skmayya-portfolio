import Lenis from "lenis";
import { useEffect, useRef, useState } from "react"
import Navbar from "./Components/Navbar";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import RollingText from "./Components/RrollingText";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import Projects from "./Components/Projects";
import { IoLocationOutline } from "react-icons/io5";
import Skills from "./Components/Skills";
import { FaRust } from "react-icons/fa";
import { MdAnimation } from "react-icons/md";
import Footer from "./Components/Footer";

gsap.registerPlugin(ScrollTrigger)
const App = () => {
  const { contextSafe } = useGSAP()
  const [isMobile, setIsMobile] = useState(false);

  const DivRef = useRef<HTMLDivElement | null>(null)
  const ImageDivRef = useRef<HTMLDivElement | null>(null)
  const ParaRef = useRef<HTMLParagraphElement | null>(null)

  const TextAnimations = contextSafe(() => {
    gsap.from(DivRef.current, {
      duration: 1,
      y: 100,
      opacity: 0,
      ease: "power2.out",
    })
    gsap.from(ImageDivRef.current, {
      duration: 1,
      y: 100,
      opacity: 0,
      ease: "power2.out",
    })
  })
  const ScrollAnimations = contextSafe(() => {

  })
  // Check if mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 1500);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);


    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  // Lenis
  useEffect(() => {
    const lenis = new Lenis({
      duration: 2.5, // Increased duration for slower scroll
      smoothWheel: true, // Enable smooth scrolling for mouse wheel
      wheelMultiplier: 0.5, // Reduce wheel scroll speed
      autoRaf: true,
    });
    
    lenis.on('scroll', () => {
      // empty callback for now
    });

    return () => {
      lenis.destroy(); // Cleanup on unmount
    }
  }, [])
  //Gsap Animation Methods
  useEffect(() => {
    TextAnimations()
    ScrollAnimations()
    gsap.set(".flair", { xPercent: -50, yPercent: -50 });
    const xTo = gsap.quickTo(".flair", "x", { duration: 0.6, ease: "power3" }),
      yTo = gsap.quickTo(".flair", "y", { duration: 0.6, ease: "power3" });
    window.addEventListener("mousemove", e => {
      xTo(e.clientX);
      yTo(e.clientY);
    });
    return () => {
    }
  }, [TextAnimations, ScrollAnimations])

  if (isMobile) {
    return (
      <div className="h-screen w-full flex items-center justify-center p-8 text-center">
        <h1 className="text-2xl font-semibold">
          This experience is not available on mobile devices. Please visit on a desktop browser.
        </h1>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div className="flair flair--3 bg-cover overflow-hidden">
        <img className="" src="/public/79bed6aae8ac9dfd3cc628224b11f417.jpg" alt="" />
      </div>
      <div className="h-screen w-full  items-center justify-evenly">
        <div className="flex items-center justify-evenly h-full w-full flex-col gap-5 px-48">
          <div className="section-1 flex w-full h-[70%]">
            <div ref={DivRef} className="h-full w-full flex items-start  justify-center flex-col  px-1 gap-5">
              <div className="text-5xl font-normal ">
                <h1 >Skanda Mayya </h1>
              </div>
              <div className="text-lg w-[20vw]">
                <p ref={ParaRef}>
                  Turning ideas into reality from front to back, building complete web experiences.
                </p>
              </div>
            </div>
            <div ref={ImageDivRef} className="h-full w-full flex flex-col gap-3 items-center justify-center ">
              <img className="h-[30vw] w-[30vw] rounded-lg" src="/d901a7bab6d28696700da387495ca704.jpg" alt="" />
              <div className="flex items-center justify-between w-full px-28">
                <div className="flex gap-3">
                  <IoLocationOutline size={25} />
                  <span>Karnataka , India</span>
                </div>
                <div className="flex gap-5 self-end">
                  <a href="https://github.com/skmayya1"><FaGithub size={30} /></a>
                  <a href="https://x.com/Skmayya1"><FaSquareXTwitter size={30} /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-screen w-full flex  items-center flex-col justify-between">
        <RollingText />
        <Projects />
      </div>
      <div className="h-screen w-full px-32 py-6 ">
        <div className="text-6xl flex font-semibold flex-col gap-10">
          <h1 className="">ABILITIES</h1>
          <div className="">
            <Skills />
          </div>
          <h1 className="self-center flex items-center md:gap-3">Currently learning  <p className="px-10 text-white py-3 bg-black rounded-lg"><FaRust size={70} color="" /></p> and web animations  <p className="pt-3"><MdAnimation /></p></h1>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App
