
import React from 'react';
import { CONFIG } from '../constants';
import { Play } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <header className="relative bg-[#FAF7F2] pt-16 pb-14 px-4 overflow-hidden text-center">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-violet-200 rounded-full blur-[100px] opacity-30 -mr-40 -mt-40"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-pink-200 rounded-full blur-[100px] opacity-30 -ml-40 -mb-40"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Copy de Impacto */}
        <div className="mb-8 transform -rotate-1">
          <div className="bg-violet-950 text-white p-6 rounded-3xl shadow-[0_10px_40px_rgba(76,29,149,0.4)] border-l-[12px] border-pink-500 inline-block max-w-2xl">
            <h2 className="text-xl md:text-3xl font-black uppercase italic leading-none tracking-tighter">
              "¡AQUÍ TIENES TU <span className="text-pink-400 underline decoration-white underline-offset-4">OPORTUNIDAD!!!</span>"
            </h2>
          </div>
        </div>

        <h1 className="text-3xl md:text-6xl font-black text-violet-950 leading-[1.1] mb-6 tracking-tight">
          Conviértete en creadora de <span className="text-pink-600 italic">Velas Artesanales</span> <br className="hidden md:block" />
          y crea un negocio exitoso desde casa
        </h1>
        
        <p className="text-lg md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
          Deja de postergar tus sueños. Factura tus primeros <span className="text-violet-700 font-bold">$500 USD</span> <br className="hidden md:block" />
          creando productos que tus clientes amarán.
        </p>

        {/* Contenedor de Video VSL (Vimeo) - Parámetros añadidos para ocultar info de cuenta */}
        <div className="mb-12 relative group max-w-4xl mx-auto">
          <div className="relative aspect-video w-full rounded-[2rem] overflow-hidden shadow-[0_25px_60px_rgba(76,29,149,0.2)] border-[8px] border-white bg-black">
            <iframe 
              src={`https://player.vimeo.com/video/${CONFIG.vimeoVideoId}?autoplay=1&muted=0&badge=0&autopause=0&player_id=0&app_id=58479&title=0&byline=0&portrait=0`} 
              className="absolute inset-0 w-full h-full"
              frameBorder="0" 
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write" 
              title="Velas Artesanales VSL"
            ></iframe>
          </div>

          {/* Aviso debajo del video */}
          <div className="mt-8 flex flex-col items-center gap-6">
             <div className="flex items-center gap-2 text-pink-600 font-bold animate-pulse text-lg">
               <Play size={24} fill="currentColor" />
               <span>ASEGÚRATE DE TENER EL SONIDO ACTIVADO 🔊</span>
             </div>
             
             {/* Botón de Acción Principal */}
             <div className="w-full flex flex-col items-center gap-4">
               <a 
                 href={CONFIG.paymentLink}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="group relative w-full md:w-auto inline-flex items-center justify-center bg-pink-500 hover:bg-pink-600 text-white font-black px-12 py-7 rounded-3xl transition-all transform hover:scale-105 shadow-[0_20px_40px_rgba(236,72,153,0.4)]"
               >
                 <span className="text-xl md:text-3xl uppercase tracking-tighter">¡SÍ, QUIERO EMPEZAR MI NEGOCIO AHORA! 🚀</span>
                 <div className="absolute -right-4 -top-4 bg-yellow-400 text-violet-900 text-xs font-black px-4 py-2 rounded-full shadow-lg rotate-12 animate-bounce">
                   ÚLTIMOS CUPOS
                 </div>
               </a>
             </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
