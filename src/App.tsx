import Lenis from "lenis";
import {  useEffect, useRef, useState } from "react"
import Navbar from "./Components/Navbar";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import RollingText from "./Components/RrollingText";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import Projects from "./Components/Projects";
import { IoLocationOutline } from "react-icons/io5";
import Skills from "./Components/Skills";
import { FaRust } from "react-icons/fa";
import { MdAnimation } from "react-icons/md";
import Footer from "./Components/Footer";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)
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
      setIsMobile(window.innerWidth <= 1200);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);


    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const Scrollto = contextSafe(() => {
    gsap.to(window, {
      duration: 2.5,
      scrollTo: { y: 1000 ,autoKill: false},
      ease: "power1.in",
    }
    )
  })

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
      <Navbar Scrollto={Scrollto}/>
{    !isMobile &&  <div  className="flair flair--3 bg-cover overflow-hidden">
        <img className="" src="/cursor.jpg" alt="" />
      </div>}
      <div className="h-screen w-full  items-center justify-evenly">
        <div className="flex items-center md:justify-evenly h-full justify-around w-full flex-col gap-5 md:px-48">
          <div className="section-1 flex md:flex md:flex-row w-full flex-col-reverse h-[30%] gap-5 md:gap-0 md:h-[70%]">
            <div ref={DivRef} className="h-full w-full flex items-center md:items-start  justify-center flex-col  md:px-1 gap-5">
              <div className="text-5xl font-normal ">
                <h1 >Skanda Mayya </h1>
              </div>
              <div className="text-sm md:text-lg md:w-[20vw] px-11 md:px-0">
                <p ref={ParaRef}>
                  Turning ideas into reality from front to back, building complete web experiences.
                </p>
              </div>
            </div>
            <div ref={ImageDivRef} className="h-full w-full flex flex-col gap-3 items-center justify-center ">
              <img className="md:h-[30vw] md:w-[30vw] h-[20vh] w-[20vh] rounded-lg" src="/d901a7bab6d28696700da387495ca704.jpg" alt="" />
              <div className="flex md:flex-row md:gap-0 gap-3 flex-col items-center justify-evenly md:justify-between w-full md:px-28">
                <div className="flex gap-3">
                  <IoLocationOutline size={25} />
                  <span>Karnataka , India</span>
                </div>
                <div className="flex gap-5">
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
