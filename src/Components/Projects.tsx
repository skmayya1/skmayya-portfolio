import { useGSAP } from "@gsap/react"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { FaGithub } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import { BsTwitterX } from "react-icons/bs";

gsap.registerPlugin(ScrollTrigger)
const Projects = () => {
    const { contextSafe } = useGSAP();

    const TextRef = useRef<HTMLHeadingElement | null>(null)
    const DivRef = useRef<HTMLDivElement | null>(null)
    const Div1Ref = useRef<HTMLDivElement | null>(null)
    const Div2Ref = useRef<HTMLDivElement | null>(null)
    
    const ScrollAnimations = contextSafe(() => { 
        gsap.from(TextRef.current, {
            duration: 1,
            x: 750,
            ease: "power2.out",
            scrollTrigger: {
                trigger: TextRef.current,
                start: 'top bottom%',
                end: 'bottom center',
                scrub: 1,
            }
        })
    })

    useEffect(() => { 
        ScrollAnimations()
    }, [ScrollAnimations])



    return (
        <div className="flex flex-col h-full w-full items-center gap-20 px-32  justify-evenly ">
            <div className="self-start">
                <h1 ref={TextRef} className="text-6xl flex gap-3  font-semibold ">PROJECTS</h1>
            </div>
            <div className="w-full flex flex-col gap-5 items-center text-[2vw]">
                <div ref={DivRef} className="h-[5vw] w-[80%] border rounded-lg group transition-all ease-in-out duration-300 hover:h-[15vw] border-zinc-400 flex items-start gap-6 justify-between px-20 py-5 flex-col">
                    <div className="flex w-full h-fit items-center justify-between">
                        <h1>Andhar Bahar Card Game</h1>
                        <div className="flex items-center gap-5">
                            <MdArrowOutward size={30} />
                            <FaGithub size={30} />
                        </div>
                    </div>
                    <div className="text-lg h-full w-full font-thin size-0 overflow-hidden group-hover:size-[100%]">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore reprehenderit quos dicta neque ipsa, cupiditate consequatur quas nemo ducimus at commodi tempora assumenda, animi culpa nulla ad unde tempore enim?</p>
                    </div>
                    <div className="size-0 overflow-hidden group-hover:size-[100%] ">
                    </div>
                </div>
                <div ref={Div1Ref} className="h-[5vw] w-[80%] border rounded-full border-zinc-400 flex items-center justify-between px-10">
                    <h1 className="flex items-center gap-4">Global Chat For <p className="self-end pb-3"><BsTwitterX size={26} /></p> users</h1>
                    <div className="flex items-center gap-5">
                        <MdArrowOutward size={30} />
                        <FaGithub size={30} />
                    </div>
                </div>              
                <div ref={Div2Ref} className="h-[5vw] w-[80%] border rounded-full border-zinc-400 flex items-center justify-between px-10">
                    <h1>AI Component Generator</h1>
                    <div className="flex items-center gap-5 border px-2 py-0.5 border-yellow-500 rounded-full bg-yellow-100">
                        <p className="text-base font-light text-yellow-500">Building</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects