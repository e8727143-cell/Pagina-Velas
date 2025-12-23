
import React from 'react';
import { ShieldCheck, Smartphone } from 'lucide-react';
import { CONFIG } from '../constants';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-10 px-4 bg-gradient-to-b from-white to-pink-50">
      <div className="max-w-4xl mx-auto">
        <div className="bg-violet-900 rounded-[3rem] text-white p-10 md:p-12 shadow-2xl relative">
          {/* Discount Badge */}
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-yellow-400 text-violet-900 font-black text-2xl md:text-4xl px-8 py-4 rounded-full shadow-lg rotate-3">
            50% OFF
          </div>

          <div className="text-center mb-10 pt-8">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Oferta especial por tiempo limitado</h2>
            
            <div className="flex flex-col items-center justify-center mb-8">
              <span className="text-2xl text-pink-300 line-through mb-2">Precio regular: $60 USD</span>
              <div className="flex items-baseline gap-2">
                <span className="text-xl md:text-2xl font-light">HOY solo</span>
                <span className="text-6xl md:text-8xl font-black text-yellow-400">$30</span>
                <span className="text-xl md:text-2xl font-bold">USD</span>
              </div>
            </div>

            <div className="space-y-4 mb-10 text-lg">
              <div className="flex items-center justify-center gap-2">
                <span className="text-green-400 font-bold">✓</span> Acceso inmediato
              </div>
              <div className="flex items-center justify-center gap-2">
                <span className="text-green-400 font-bold">✓</span> Todo incluido (Curso + Bonos)
              </div>
              <div className="flex items-center justify-center gap-2">
                <span className="text-green-400 font-bold">✓</span> Sin pagos ocultos, un solo pago
              </div>
            </div>

            <a 
              href={CONFIG.paymentLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-pink-500 hover:bg-pink-600 text-white font-black text-xl md:text-2xl py-6 rounded-2xl transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(236,72,153,0.5)] mb-6 animate-pulse"
            >
              👉 INSCRÍBETE AHORA Y CREA TU NEGOCIO EN 14 DÍAS
            </a>

            <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-sm opacity-80">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5" />
                <span>Pagos 100% seguros</span>
              </div>
              <div className="flex items-center gap-2">
                <Smartphone className="w-5 h-5" />
                <span>Accede desde cualquier dispositivo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
