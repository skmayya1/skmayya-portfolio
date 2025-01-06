import Lenis from "lenis";
import { useEffect, useRef } from "react"
import Navbar from "./Components/Navbar";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
    ScrollTrigger.create({
      trigger: DivRef.current,
      start: "80% center",
      end: "bottom 30%",
      markers: true,
      animation: gsap.fromTo(DivRef.current,
        { y: 0 }, // Initial state
        { y: 500, duration: 5, ease: "powe4.inOut" }  // Final state
      ),
      scrub: true,
    })
    ScrollTrigger.create({
      trigger: ImageDivRef.current,
      start: "top center",
      end: "bottom center",
      animation: gsap.to(ImageDivRef.current, { opacity: 1, y: 0, duration: 3, ease: "power2.out" }),
    })
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
        <div className="flex items-center justify-evenly h-full w-full  px-48">
          <div ref={DivRef} className="h-[50%] w-full flex items-start  justify-center flex-col  px-1 gap-5">
            <div className="text-4xl font-normal ">
              <h1 >Skanda Mayya</h1>
            </div>
            <div className="text w-[20vw]">
              <p ref={ParaRef}>
                Turning ideas into reality from front to back, building complete web experiences.
              </p>
            </div>
          </div>
          <div ref={ImageDivRef} className="h-[80%] w-full flex items-center justify-center ">
            <img className="h-[30vw] w-[30vw] rounded-lg" src="/d901a7bab6d28696700da387495ca704.jpg" alt="" />
          </div>
        </div>
      </div>
      <div className="h-screen w-full "></div>
      <div className="h-screen w-full bg-green-500"></div>
    </div>
  )
}

export default App