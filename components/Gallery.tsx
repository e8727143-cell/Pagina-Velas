
import React from 'react';
import { CONFIG } from '../constants';

const Gallery: React.FC = () => {
  return (
    <section className="py-10 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-violet-900 max-w-2xl mx-auto leading-tight">
            Esto es solo un poco de lo que aprenderás a crear... <br className="hidden md:block" /> hay mucho más!
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {CONFIG.images.gallery.map((img, idx) => (
            <div key={idx} className="group relative aspect-square overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-all">
              <img 
                src={img} 
                alt={`Muestra de curso ${idx + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-violet-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
