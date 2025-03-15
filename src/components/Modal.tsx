import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ModalProps } from '../types';

const scaleAnimation = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
  enter: {
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] }
  },
  closed: {
    scale: 0,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] }
  }
};

export default function Modal({ modal, projects }: ModalProps) {
  const { active, index } = modal;
  const modalContainer = useRef<HTMLDivElement>(null);
  const cursor = useRef<HTMLDivElement>(null);
  const cursorLabel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Move Container
    const xMoveContainer = gsap.quickTo(modalContainer.current, "left", {duration: 0.8, ease: "power3"});
    const yMoveContainer = gsap.quickTo(modalContainer.current, "top", {duration: 0.8, ease: "power3"});
    // Move cursor
    const xMoveCursor = gsap.quickTo(cursor.current, "left", {duration: 0.5, ease: "power3"});
    const yMoveCursor = gsap.quickTo(cursor.current, "top", {duration: 0.5, ease: "power3"});
    // Move cursor label
    const xMoveCursorLabel = gsap.quickTo(cursorLabel.current, "left", {duration: 0.45, ease: "power3"});
    const yMoveCursorLabel = gsap.quickTo(cursorLabel.current, "top", {duration: 0.45, ease: "power3"});

    const handleMouseMove = (e: MouseEvent) => {
      const { pageX, pageY } = e;
      xMoveContainer(pageX);
      yMoveContainer(pageY);
      xMoveCursor(pageX);
      yMoveCursor(pageY);
      xMoveCursorLabel(pageX);
      yMoveCursorLabel(pageY);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <motion.div
        ref={modalContainer}
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
        className="h-[350px] w-[400px] absolute bg-white overflow-hidden pointer-events-none flex items-center justify-center left-1/2 top-1/2"
      >
        <div
          className="h-full w-full absolute transition-[top] duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]"
          style={{ top: `${index * -100}%` }}
        >
          {projects.map((project, idx) => {
            const { src, color, title } = project;
            return (
              <div
                className="h-full w-full flex items-center justify-center"
                style={{ backgroundColor: color }}
                key={`modal_${idx}`}
              >
                <img
                  src={src}
                  alt={title}
                  className="h-auto w-[300px] object-cover"
                />
              </div>
            );
          })}
        </div>
      </motion.div>
      <motion.div
        ref={cursor}
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
        className="w-20 h-20 rounded-full bg-[#455CE9] absolute z-20 flex items-center justify-center pointer-events-none left-1/2 top-1/2"
      />
      <motion.div
        ref={cursorLabel}
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
        className="w-20 h-20 rounded-full bg-transparent absolute z-20 flex items-center justify-center text-sm font-light pointer-events-none text-white left-1/2 top-1/2"
      >
        View
      </motion.div>
    </>
  );
}