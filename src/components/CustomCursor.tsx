import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

interface CursorState {
  isPointer: boolean;
  isHoveringProject: boolean;
  isHoveringMenuItem: boolean;
}

export default function CustomCursor() {
  const [cursorState, setCursorState] = useState<CursorState>({
    isPointer: false,
    isHoveringProject: false,
    isHoveringMenuItem: false
  });
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 20);
      cursorY.set(e.clientY - 20);
    };

    const updateCursorType = (e: MouseEvent) => {
      const hoveredElement = document.elementFromPoint(e.clientX, e.clientY);
      
      if (hoveredElement) {
        const computedStyle = window.getComputedStyle(hoveredElement);
        const isHoveringProject = hoveredElement.closest('[data-project]') !== null;
        const isHoveringMenuItem = hoveredElement.closest('[data-menu-item]') !== null;
        
        setCursorState({
          isPointer: computedStyle.cursor === 'pointer' || isHoveringMenuItem || isHoveringProject,
          isHoveringProject,
          isHoveringMenuItem
        });
      } else {
        setCursorState({
          isPointer: false,
          isHoveringProject: false,
          isHoveringMenuItem: false
        });
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mousemove', updateCursorType);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousemove', updateCursorType);
    };
  }, []);

  const getCursorSize = () => {
    if (cursorState.isHoveringMenuItem) return 2.5;
    if (cursorState.isHoveringProject) return 4;
    if (cursorState.isPointer) return 2;
    return 0.4;
  };

  return (
    <motion.div
      className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
      }}
    >
      <motion.div
        className="relative flex items-center justify-center"
        animate={{
          scale: getCursorSize(),
          opacity: 1
        }}
        transition={{
          type: "spring",
          damping: 25,
          stiffness: 300,
          mass: 0.5
        }}
      >
        <div className="w-5 h-5 bg-white rounded-full" />
        {cursorState.isHoveringProject && (
          <motion.span 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="absolute text-black text-[3px] uppercase tracking-wider font-medium text-center"
          >
            View Project
          </motion.span>
        )}
      </motion.div>
    </motion.div>
  );
}