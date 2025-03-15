import { useState, useRef, useEffect } from "react";
import useMousePosition from "../../hooks/useMousePosition";
import { motion } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const { x: mouseX, y: mouseY } = useMousePosition();
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const size = isHovered ? 70 : 15;

  useEffect(() => {
    if (headerRef.current) {
      const rect = headerRef.current.getBoundingClientRect();
      setX(mouseX - rect.left);
      setY(mouseY - rect.top);
    }
  }, [mouseX, mouseY]);

  return (
    <div ref={headerRef} className="fixed top-0 right-0 z-40 w-40 h-20">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex items-center space-x-4">
          <p className="text-black font-medium">Menu</p>
          <div className="w-6 h-2 flex flex-col justify-between">
            <span className="block w-6 h-[1px] bg-black"></span>
            <span className="block w-4 h-[1px] bg-black"></span>
          </div>
        </div>
      </div>

      <motion.div 
        className="absolute inset-0 flex items-center justify-center bg-black cursor-pointer"
        onClick={() => setIsOpen(true)}
        style={{
          WebkitMaskImage: 'url(/mask.svg)',
          WebkitMaskRepeat: 'no-repeat',
          maskImage: 'url(/mask.svg)',
          maskRepeat: 'no-repeat',
        }}
        animate={{
          WebkitMaskPosition: `${x - (size/2)}px ${y - (size/2)}px`,
          WebkitMaskSize: `${size}px`,
          maskPosition: `${x - (size/2)}px ${y - (size/2)}px`,
          maskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
        onMouseEnter={() => setIsHovered(true)} 
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex items-center space-x-4">
          <p className="text-white font-medium">Menu</p>
          <div className="w-6 h-2 flex flex-col justify-between">
            <span className="block w-6 h-[1px] bg-white"></span>
            <span className="block w-4 h-[1px] bg-white"></span>
          </div>
        </div>
      </motion.div>

      {isOpen && (
        <div className="fixed inset-0 bg-black flex flex-col items-center justify-center text-white text-3xl transition-opacity duration-300 z-50">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-5 right-10 text-lg"
          >
            ✖ Close
          </button>

          <nav className="flex flex-col space-y-6">
            <a href="#" className="hover:underline">About</a>
            <a href="#" className="hover:underline">Work</a>
            <a href="#" className="hover:underline">Services</a>
            <a href="#" className="hover:underline">FAQ</a>
            <a href="#" className="hover:underline">Blog</a>
          </nav>
        </div>
      )}
    </div>
  );
}