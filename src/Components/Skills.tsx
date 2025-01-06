import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import {
  SiTypescript, SiReact, SiMongodb, SiPostgresql,
  SiDocker, SiTailwindcss, SiGreensock,
  SiNginx, SiNestjs ,SiWeb3Dotjs
} from "react-icons/si";
import { FaAws, FaNodeJs } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { TbBrandPrisma } from "react-icons/tb";


const Skills: React.FC = () => {
  const textRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!textRef.current) return;

    gsap.to(textRef.current, {
      x: '-50%',
      duration: 25,
      repeat: -1,
      ease: 'none'
    });
  }, []);

  const icons = [
    <TbBrandPrisma key="prisma" />,
    <SiWeb3Dotjs key="web3" />,
    <SiTypescript key="ts" />,
    <SiReact key="react" />,
    <FaNodeJs key="node" />,
    <SiMongodb key="mongo" />,
    <SiPostgresql key="postgres" />,
    <SiDocker key="docker" />,
    <RiNextjsFill key="next" />,
    <SiTailwindcss key="tailwind" />,
    <FaAws key="aws" />,
    <SiGreensock key="gsap" />,
    <SiNginx key="nginx" />,
    <SiNestjs key="nest" />
  ];

  return (
    <div className="h-[10vw] w-full flex items-center overflow-hidden relative">
      {/* Left blur gradient */}
      <div className="absolute left-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
      
      <div ref={textRef} className="flex whitespace-nowrap font-semibold gap-10 text-[2.5vw]">
        {[...Array(4)].map((_, arrayIndex) => (
          <div key={arrayIndex} className="flex gap-10">
            {icons.map((icon, iconIndex) => (
              <div key={`${arrayIndex}-${iconIndex}`}>
                {icon}
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Right blur gradient */}
      <div className="absolute right-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10"></div>
    </div>
  );
};

export default Skills;
