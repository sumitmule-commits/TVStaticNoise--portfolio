import React from "react";
import smLogo from "./assets/SM1.0.png";

export default function Construction() {
  return (
    <div className="absolute inset-0 z-10 flex items-center justify-center px-6">
      <div className="max-w-5xl w-full flex items-center gap-6">
        {/* Logo */}
        <div className="flex-shrink-0">
          <span className="relative inline-block">
            <img
              src={smLogo}
              alt="SM logo"
              className="h-20 md:h-28 w-auto select-none pointer-events-none img-no-drag"
              draggable={false}
              onDragStart={(e) => e.preventDefault()}
              onContextMenu={(e) => e.preventDefault()}
            />
            <span className="absolute -top-1 -right-1 text-sm text-slate-500 font-mono">©</span>
          </span>
        </div>

        <div className="text-left text-slate-800 flex-1">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-wider">
            <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 drop-shadow-lg">Sumit Mule</span>
          </h1>
          
          <p className="text-xl md:text-2xl leading-relaxed text-slate-800 mb-8 font-semibold">
            Full-Stack Developer skilled in the MERN stack. Currently expanding expertise in AI/ML and databases to build intelligent systems where technology meets real-world impact.
          </p>

          <hr className="my-8 border-slate-600/90 border-2" />

          <p className="text-lg md:text-xl leading-relaxed text-slate-700 font-medium">
            My 2025 portfolio is under construction—while that's happening, you can find me on
            <a
              href="https://www.linkedin.com/in/sumit-mule/"
              target="_blank"
              rel="noreferrer"
              className="mx-2 font-bold text-slate-900 hover:text-slate-700 transition-colors duration-200"
            >
              @LinkedIn
            </a>
            or say hello at
            <a
              href="mailto:sumitmule64@gmail.com"
              className="mx-2 font-bold text-slate-900 hover:text-slate-700 transition-colors duration-200"
            >
              sumitmule64@gmail.com
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
