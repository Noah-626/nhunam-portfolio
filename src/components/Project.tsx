import { Link } from 'react-router-dom';
import { ProjectProps } from '../types';
import { ArrowUpRight } from 'lucide-react';

export default function Project({ index, title, description, blogUrl, setModal }: ProjectProps) {
  return (
    <div 
      className="w-full flex justify-between items-center px-24 py-12 border-t border-neutral-300 cursor-pointer transition-all duration-200 hover:opacity-50 group"
      onMouseEnter={() => setModal({ active: true, index })}
      onMouseLeave={() => setModal({ active: false, index })}
    >
      <h2 className="text-6xl m-0 font-normal transition-transform duration-400 group-hover:-translate-x-2.5">
        {title}
      </h2>
      <div className="flex items-center gap-8">
        <p className="font-light transition-transform duration-400 group-hover:translate-x-2.5">
          {description}
        </p>
        <Link 
          to={`/nhunam-portfolio${blogUrl}`}
          className="flex items-center gap-2 text-sm font-medium hover:text-blue-600 transition-colors relative z-10"
          onClick={(e) => e.stopPropagation()}
        >
          Read More
          <ArrowUpRight size={16} />
        </Link>
      </div>
    </div>
  );
}