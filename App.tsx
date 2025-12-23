
import React, { useState, useEffect } from 'react';
import { 
  Play, 
  CheckCircle2, 
  Clock, 
  Users, 
  Award, 
  Gift, 
  Star, 
  ShieldCheck, 
  Smartphone,
  MessageCircle,
  Truck,
  FileText,
  Check
} from 'lucide-react';
import { CONFIG } from './constants';

// --- STICKY TIMER ---
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

// --- HERO ---
const Hero: React.FC = () => (
  <header className="relative bg-[#FAF7F2] pt-20 pb-14 px-4 overflow-hidden text-center">
    <div className="absolute top-0 right-0 w-80 h-80 bg-violet-200 rounded-full blur-[100px] opacity-30 -mr-40 -mt-40"></div>
    <div className="max-w-5xl mx-auto relative z-10">
      <div className="mb-8 transform -rotate-1 inline-block">
        <div className="bg-violet-950 text-white p-4 md:p-6 rounded-3xl shadow-xl border-l-[12px] border-pink-500">
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
      <div className="flex flex-col items-center gap-6">
        <div className="flex items-center gap-2 text-pink-600 font-bold animate-pulse text-lg">
          <Play size={24} fill="currentColor" /> <span>ASEGÚRATE DE TENER EL SONIDO ACTIVADO 🔊</span>
        </div>
        <a href={CONFIG.paymentLink} target="_blank" className="bg-pink-500 hover:bg-pink-600 text-white font-black px-8 py-5 md:px-12 md:py-7 rounded-3xl transition-all transform hover:scale-105 shadow-xl text-lg md:text-3xl uppercase">
          ¡SÍ, QUIERO EMPEZAR MI NEGOCIO AHORA! 🚀
        </a>
      </div>
    </div>
  </header>
);

// --- GALLERY ---
const Gallery: React.FC = () => (
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
);

// --- CURRICULUM ---
const Curriculum: React.FC = () => (
  <section className="py-16 px-4 bg-pink-50">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-5xl font-black text-violet-950 text-center mb-12 italic">¿Qué vas a aprender?</h2>
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-[2.5rem] border border-pink-100 shadow-sm">
          <h3 className="text-2xl font-bold text-violet-900 mb-6 flex items-center gap-3">🕯️ Velas Premium</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-700 font-medium">
            <li>• Técnica de Gel y Cuarzo</li>
            <li>• Marmolado y Microperlado</li>
            <li>• Velas Hidratantes y Masajes</li>
            <li>• Técnica Capuchino y Postres</li>
            <li>• Velas Incrustadas y Waxmelts</li>
            <li>• Moldes de Silicona y Cemento</li>
          </ul>
        </div>
        <div className="bg-violet-900 p-8 rounded-[2.5rem] text-white shadow-xl">
          <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">💼 Tu Negocio Exitoso</h3>
          <p className="text-pink-200 mb-6">No solo fabricas, aprendes a vender:</p>
          <div className="space-y-4">
            <div className="bg-white/10 p-4 rounded-xl border-l-4 border-pink-500">
              <span className="font-bold text-pink-300 block">Marketing Digital</span>
              Vende por Instagram, TikTok y Facebook desde el día 1.
            </div>
            <div className="bg-white/10 p-4 rounded-xl border-l-4 border-pink-500">
              <span className="font-bold text-pink-300 block">Costos y Precios</span>
              Calcula tus ganancias y nunca pierdas dinero.
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// --- FREE SERVICES ---
const FreeServices: React.FC = () => {
  const items = [
    { title: "Mentoría 1 a 1", icon: <MessageCircle className="text-pink-500" /> },
    { title: "Comunidad VIP", icon: <Users className="text-violet-500" /> },
    { title: "Proveedores", icon: <Truck className="text-pink-500" /> },
    { title: "Certificado", icon: <Award className="text-violet-500" /> }
  ];
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-black text-violet-900 mb-10 uppercase italic">🎁 SERVICIOS <span className="text-pink-600">GRATIS</span> HOY</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <div key={i} className="bg-pink-50 p-6 rounded-3xl border border-pink-100 flex flex-col items-center gap-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">{item.icon}</div>
              <span className="font-bold text-violet-900 uppercase text-sm">{item.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- TESTIMONIALS ---
const Testimonials: React.FC = () => (
  <section className="py-16 px-4 bg-[#FAF7F2]">
    <div className="max-w-6xl mx-auto text-center">
      <h2 className="text-3xl md:text-5xl font-black text-violet-900 mb-12 italic">Lo que nuestras alumnas logran...</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {CONFIG.videoTestimonials.map((v, i) => (
          <div key={i} className="aspect-[9/16] bg-black rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white relative">
            <iframe src={`https://player.vimeo.com/video/${v.vimeoId}?badge=0&title=0&byline=0&portrait=0`} className="absolute inset-0 w-full h-full" frameBorder="0"></iframe>
            <div className="absolute top-6 right-6 z-20"><p className="text-pink-500 font-black text-xs uppercase drop-shadow-md">ALUMNA</p></div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// --- BONUSES ---
const Bonuses: React.FC = () => (
  <section className="py-16 px-4 bg-white">
    <div className="max-w-4xl mx-auto bg-violet-950 rounded-[3rem] p-8 md:p-12 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 bg-pink-500 px-6 py-2 rounded-bl-3xl font-bold uppercase text-xs">VALORADO EN $200+</div>
      <h2 className="text-3xl md:text-5xl font-black mb-10 text-center italic">🎁 BONOS <span className="text-pink-400">EXCLUSIVOS</span></h2>
      <div className="space-y-6">
        <div className="flex gap-4 p-6 bg-white/10 rounded-2xl items-center border border-white/10">
          <div className="text-4xl shrink-0">🧼</div>
          <div>
            <h4 className="font-bold text-xl text-pink-300">Curso Jabones Naturales</h4>
            <p className="text-sm opacity-80">Aprende saponificación en frío y glicerina desde cero.</p>
          </div>
        </div>
        <div className="flex gap-4 p-6 bg-white/10 rounded-2xl items-center border border-white/10">
          <div className="text-4xl shrink-0">🧴</div>
          <div>
            <h4 className="font-bold text-xl text-pink-300">Cuidado Corporal Artesanal</h4>
            <p className="text-sm opacity-80">Bombas de baño, shampoo sólido y mantequillas corporales.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// --- PRICING ---
const Pricing: React.FC = () => (
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
      <a href={CONFIG.paymentLink} target="_blank" className="block w-full bg-pink-500 hover:bg-pink-600 text-white font-black text-xl md:text-2xl py-6 rounded-2xl shadow-2xl animate-pulse transition-transform hover:scale-105">
        👉 SÍ, QUIERO MI NEGOCIO AHORA
      </a>
      <div className="mt-8 flex flex-col md:flex-row justify-center gap-6 opacity-80 text-sm font-bold">
        <div className="flex items-center gap-2"><ShieldCheck size={20}/> PAGOS 100% SEGUROS</div>
        <div className="flex items-center gap-2"><Smartphone size={20}/> ACCESO PARA TODA LA VIDA</div>
      </div>
    </div>
  </section>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col pt-[50px] font-sans selection:bg-pink-200">
      <StickyTimer />
      <Hero />
      <Gallery />
      <Curriculum />
      <FreeServices />
      <Testimonials />
      <Bonuses />
      <Pricing />
      <footer className="bg-[#FAF7F2] py-10 px-4 text-center border-t border-pink-100">
        <div className="flex flex-col items-center gap-6 max-w-2xl mx-auto">
          <div className="flex items-center gap-4 grayscale opacity-50">
            <ShieldCheck className="w-8 h-8"/>
            <Award className="w-8 h-8"/>
          </div>
          <p className="text-[10px] text-gray-400 uppercase tracking-[0.3em]">© {new Date().getFullYear()} Velas Artesanales Academy</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
