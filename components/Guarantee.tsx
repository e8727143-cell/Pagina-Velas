
import React from 'react';
import { CONFIG } from '../constants';

const Guarantee: React.FC = () => {
  return (
    <section className="py-10 px-4 bg-white">
      <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-10 p-8 md:p-10 rounded-[2rem] border-2 border-dashed border-pink-300 bg-pink-50/30">
        <div className="w-48 h-48 md:w-56 md:h-56 shrink-0 overflow-hidden rounded-2xl shadow-lg border-4 border-white">
          <img 
            src={CONFIG.images.guaranteeSeal} 
            alt="Garantía de Satisfacción" 
            className="w-full h-full object-cover transition-transform hover:scale-110 duration-500"
          />
        </div>
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-violet-900 mb-4 italic text-center">Garantía total 7 días</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Si no aprendes, no te gusta o no te sientes acompañada, te devolvemos el <span className="font-bold text-pink-600">100% de tu dinero</span>.
          </p>
          <p className="text-gray-500 font-semibold italic">
            Sin preguntas. Sin riesgo. Compra con total tranquilidad.
          </p>
        </div>
      </div>
      
      <div className="max-w-4xl mx-auto mt-10 text-center">
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-violet-900 mb-6 italic whitespace-nowrap overflow-hidden text-ellipsis">
          🚀 Este es tu momento
        </h3>
        <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto">
          No necesitas más tiempo. No necesitas “talento”. <br />
          <span className="font-bold text-pink-500">Solo necesitas empezar.</span>
        </p>
        <a 
          href="#pricing"
          className="inline-block bg-violet-600 hover:bg-violet-700 text-white font-bold px-10 py-5 rounded-full text-xl shadow-xl transition-all hover:-translate-y-1 transform active:scale-95"
        >
          QUIERO EMPEZAR HOY MISMO
        </a>
      </div>
    </section>
  );
};

export default Guarantee;
