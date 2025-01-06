import Lenis from "lenis";
import { useEffect, useRef } from "react"
import Navbar from "./Components/Navbar";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import RollingText from "./Components/RrollingText";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";


gsap.registerPlugin(ScrollTrigger)
const App = () => {
  const { contextSafe } = useGSAP()

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
  // Lenis
  useEffect(() => {
    console.log("App mounted")
    const lenis = new Lenis({
      autoRaf: true,
    });
    lenis.on('scroll', (e) => {
      console.log(e);
    });
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
      console.log("App unmounted")
    }
  }, [TextAnimations, ScrollAnimations])



  return (
    <div>
      <Navbar />
      <div className="flair flair--3 bg-cover overflow-hidden">
        <img className="" src="/public/79bed6aae8ac9dfd3cc628224b11f417.jpg" alt="" />
      </div>
      <div className="h-screen w-full items-center justify-evenly">
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
              <div className="flex gap-5 self-end px-28">
                <a href="https://github.com/skmayya1"><FaGithub size={30}/></a>
                <a href="https://x.com/Skmayya1"><FaSquareXTwitter size={30}/></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-screen w-full">
        <RollingText />
      </div>
      <div className="h-screen w-full bg-green-500"></div>
    </div>
  )
}

export default App
