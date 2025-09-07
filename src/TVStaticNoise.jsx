import React, { useRef, useEffect } from "react";

export default function TVStaticNoise() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const render = () => {
      const imageData = ctx.createImageData(width, height);
      const buffer = new Uint32Array(imageData.data.buffer);

      // Original high-contrast static (black and white speckles)
      for (let i = 0; i < buffer.length; i++) {
        buffer[i] = Math.random() < 0.5 ? 0xff000000 : 0xffffffff;
      }

      ctx.putImageData(imageData, 0, 0);
      requestAnimationFrame(render);
    };

    render();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full z-0 pointer-events-none opacity-20"
      style={{ background: "transparent" }}
    />
  );
}
