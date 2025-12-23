
import React, { useState, useEffect } from 'react';
import { 
  Play, 
  Clock, 
  Users, 
  Award, 
  ShieldCheck, 
  Smartphone,
  MessageCircle,
  Truck,
  Check,
  Star,
  Gift
} from 'lucide-react';
import { CONFIG } from './constants';

// Componentes internos para evitar fallos de importación
const StickyTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 15, seconds: 0 });
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { hours, minutes, seconds } = prev;
        if (seconds > 0) seconds--;
        else {
          if (minutes > 0) { minutes--; seconds = 59; }
          else if (hours > 0) { hours--; minutes = 59; seconds = 59; }
          else { hours = 0; minutes = 14; seconds = 59; }
        }
        return { hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  const formatTime = (n: number) => n.toString().padStart(2, '0');
  return (
    <div className="fixed top-0 left-0 right-0 z-[100] bg-gradient-to-r from-pink-500 to-violet-600 shadow-lg border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-2 flex items-center justify-center gap-2 md:gap-4">
        <Clock className="text-white w-4 h-4 md:w-5 md:h-5" />
        <span className="text-white text-[10px] md:text-sm font-bold uppercase tracking-wider">La oferta termina en:</span>
        <div className="flex gap-1 font-mono text-lg md:text-2xl font-black text-white">
          <span>{formatTime(timeLeft.hours)}</span><span className="opacity-70">:</span>
          <span>{formatTime(timeLeft.minutes)}</span><span className="opacity-70">:</span>
          <span>{formatTime(timeLeft.seconds)}</span>
        </div>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col pt-[50px] font-sans selection:bg-pink-200 bg-[#FAF7F2]">
      <StickyTimer />
      
      {/* HERO SECTION */}
      <header className="relative pt-16 pb-14 px-4 text-center">
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="mb-8 transform -rotate-1 inline-block">
            <div className="bg-violet-950 text-white p-6 rounded-3xl shadow-xl border-l-[12px] border-pink-500">
              <h2 className="text-xl md:text-3xl font-black uppercase italic tracking-tighter">
                "¡AQUÍ TIENES TU <span className="text-pink-400 underline decoration-white underline-offset-4">OPORTUNIDAD!!!</span>"
              </h2>
            </div>
          </div>
          <h1 className="text-3xl md:text-6xl font-black text-violet-950 leading-tight mb-6">
            Conviértete en creadora de <span className="text-pink-600 italic">Velas Artesanales</span> y crea un negocio exitoso
          </h1>
          <p className="text-lg md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto">
            Factura tus primeros <span className="text-violet-700 font-bold">$500 USD</span> creando productos que tus clientes amarán.
          </p>
          <div className="relative aspect-video w-full max-w-4xl mx-auto rounded-[2rem] overflow-hidden shadow-2xl border-[8px] border-white bg-black mb-8">
            <iframe 
              src={`https://player.vimeo.com/video/${CONFIG.vimeoVideoId}?autoplay=1&muted=0&badge=0&title=0&byline=0&portrait=0`} 
              className="absolute inset-0 w-full h-full" frameBorder="0" allow="autoplay; fullscreen"
            ></iframe>
          </div>
          <a href={CONFIG.paymentLink} target="_blank" className="bg-pink-500 hover:bg-pink-600 text-white font-black px-8 py-5 md:px-12 md:py-7 rounded-3xl transition-all transform hover:scale-105 shadow-xl text-lg md:text-3xl uppercase inline-block">
            ¡SÍ, QUIERO EMPEZAR MI NEGOCIO AHORA! 🚀
          </a>
        </div>
      </header>

      {/* GALLERY */}
      <section className="py-12 px-4 bg-white text-center">
        <h2 className="text-3xl font-bold text-violet-900 mb-10 italic">Esto es lo que aprenderás a crear...</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {CONFIG.images.gallery.map((img, idx) => (
            <div key={idx} className="aspect-square overflow-hidden rounded-2xl shadow-sm hover:shadow-lg transition-all">
              <img src={img} className="w-full h-full object-cover" alt="Vela artesanal" />
            </div>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-20 px-4 bg-gradient-to-b from-white to-pink-50">
        <div className="max-w-4xl mx-auto bg-violet-900 rounded-[3rem] text-white p-10 shadow-2xl relative text-center border-b-8 border-pink-500">
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-yellow-400 text-violet-900 font-black text-3xl px-8 py-4 rounded-full shadow-lg rotate-2">50% OFF</div>
          <h2 className="text-3xl md:text-5xl font-bold mb-8 mt-6 italic underline decoration-pink-500 underline-offset-8">¡INSCRÍBETE HOY!</h2>
          <div className="mb-8">
            <span className="text-2xl text-pink-300 line-through">Precio regular: $60 USD</span>
            <div className="flex items-baseline justify-center gap-2 mt-2">
              <span className="text-6xl md:text-9xl font-black text-yellow-400">$30</span><span className="text-2xl font-bold uppercase tracking-widest">USD</span>
            </div>
          </div>
          <a href={CONFIG.paymentLink} target="_blank" className="block w-full bg-pink-500 hover:bg-pink-600 text-white font-black text-xl md:text-2xl py-6 rounded-2xl shadow-2xl animate-pulse">
            👉 SÍ, QUIERO MI NEGOCIO AHORA
          </a>
          <div className="mt-8 flex flex-col md:flex-row justify-center gap-6 opacity-80 text-sm font-bold">
            <div className="flex items-center gap-2"><ShieldCheck size={20}/> PAGOS 100% SEGUROS</div>
            <div className="flex items-center gap-2"><Smartphone size={20}/> ACCESO PARA TODA LA VIDA</div>
          </div>
        </div>
      </section>

      <footer className="bg-[#FAF7F2] py-10 px-4 text-center border-t border-pink-100">
        <p className="text-[10px] text-gray-400 uppercase tracking-[0.3em]">© {new Date().getFullYear()} Velas Artesanales Academy</p>
      </footer>
    </div>
  );
};

export default App;
