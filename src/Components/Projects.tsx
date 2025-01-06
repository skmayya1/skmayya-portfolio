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
        <div className="flex flex-col h-full w-full items-center px-32 gap-24 pt-28  justify-between">
            <div className=" flex items-center w-full  ">
                <h1 ref={TextRef} className="text-6xl flex font-semibold ">PROJECTS</h1>
            </div>
            <div className="w-full h-full  flex flex-col gap-5 items-center text-[2vw] ">
                <div ref={DivRef} className="h-[5vw] w-[80%] border-t   group transition-all ease-in-out duration-300 hover:h-[13vw] border-zinc-400 flex items-start gap-6 justify-between px-20 py-5 flex-col">
                    <div className="flex w-full h-fit items-center justify-between">
                        <h1>Andhar Bahar Card Game</h1>
                        <div className="flex items-center gap-5">
                            <a href="https://andar-bahar.onrender.com/"><MdArrowOutward size={30} /></a>
                            <a href="https://github.com/skmayya1/ANDAR-BAHAR"><FaGithub size={30} /></a>
                        </div>
                    </div>
                    <div className="text-lg h-full w-full font-thin size-0 overflow-hidden group-hover:size-[100%]">
                        <p>Andar Bahar is a real-time web card game where players bet on which side, "Andar" or "Bahar" ,The game progresses as cards are drawn alternately into two piles until a match is found.</p>
                    </div>
                    <div className="size-0 overflow-hidden group-hover:size-[100%] flex gap-3 opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-500">
                        {["Typescript","React","Socket.io","Prisma","Postgres"].map((text) => (
                            <span key={text} className="bg-zinc-300 px-2 py-1 rounded-full text-center text-base h-fit">
                                {text}
                            </span>
                        ))}
                    </div>
                </div>
                <div ref={DivRef} className="h-[5vw] w-[80%] border-t group transition-all ease-in-out duration-300 hover:h-[12vw] border-zinc-400 flex items-start gap-6 justify-between px-20 py-5 flex-col">
                    <div className="flex w-full h-fit items-center justify-between">
                        <h1 className="flex gap-3">Global Chat app for <p className="self-end pb-3"><BsTwitterX size={25} /></p>Users</h1>
                        <div className="flex items-center gap-5">
                            <MdArrowOutward size={30} opacity="50%" />
                            <a href="https://github.com/skmayya1/x-global-chat"><FaGithub size={30} /></a>
                        </div>
                    </div>
                    <div className="text-lg h-full w-full font-thin size-0 overflow-hidden group-hover:size-[100%]">
                        <p>real-time messaging app that enables Twitter users from around the world to communicate and send messages globally.</p>
                    </div>
                    <div className="size-0 overflow-hidden group-hover:size-[100%] flex gap-3 opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-500">
                        {["Typescript", "React", "Socket.io", "Prisma", "Postgres","Redis","Kafka"].map((text) => (
                            <span key={text} className="bg-zinc-300 px-2 py-1 rounded-full text-center text-base h-fit">
                                {text}
                            </span>
                        ))}
                    </div>
                </div>     
                <div ref={DivRef} className="h-[5vw] w-[80%] border-t border-b  group transition-all ease-in-out duration-300 hover:h-[8vw] border-zinc-400 flex items-start gap-6 justify-between px-20 py-5 flex-col">
                    <div className="flex w-full h-fit items-center justify-between">
                        <h1>AI Based Component Generator</h1>
                        < div className="flex items-center gap-5 border px-2 py-0.5 border-yellow-500 rounded-full bg-yellow-100" >
                            <p className="text-base font-light text-yellow-500">Building</p>
                        </div >
                    </div>
                    <div className="text-lg h-full w-full font-thin size-0 overflow-hidden group-hover:size-[100%]">
                        Soon
                    </div>
                </div>     
            </div>
        </div>
    )
}

export default Projects


 