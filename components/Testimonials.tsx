
import React from 'react';
import { CONFIG } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold text-violet-900 mt-2 italic leading-tight">
            Lo que nuestras alumnas <br className="hidden md:block" /> están logrando...
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Videos reales de personas que empezaron desde cero, igual que tú.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {CONFIG.videoTestimonials.map((testimonial, idx) => (
            <div key={idx} className="group relative">
              {/* Contenedor del video con ratio vertical 9:16 usando Iframe de Vimeo - Info de cuenta oculta */}
              <div className="aspect-[9/16] w-full bg-black rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white relative">
                <iframe 
                  src={`https://player.vimeo.com/video/${testimonial.vimeoId}?badge=0&autopause=0&player_id=0&app_id=58479&title=0&byline=0&portrait=0`} 
                  className="absolute inset-0 w-full h-full"
                  frameBorder="0" 
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write" 
                  title={`Testimonio Alumna ${idx + 1}`}
                ></iframe>
                
                {/* Texto "ALUMNA" en la parte superior derecha */}
                <div className="absolute top-6 right-6 text-right pointer-events-none z-20">
                  <p className="text-pink-500 font-black text-sm md:text-base uppercase tracking-[0.2em] drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                    ALUMNA
                  </p>
                </div>
              </div>
              
              {/* Adorno visual detrás */}
              <div className="absolute -z-10 inset-0 translate-x-4 translate-y-4 bg-pink-100 rounded-[2.5rem] transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-violet-900 font-bold italic flex items-center justify-center gap-2">
            ✨ Más de 1,500 alumnas en toda Latinoamérica ✨
          </p>
          <p className="text-[10px] text-gray-400 mt-4 italic">
            * Los resultados pueden variar según el compromiso y práctica de cada alumna.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
