
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { 
  Clock, 
  Play, 
  CheckCircle2, 
  Video, 
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

// --- CONFIGURACIÓN Y CONSTANTES ---
const CONFIG = {
  vimeoVideoId: "1148694492",
  paymentLink: "https://go.hotmart.com/I103326392P?ap=b04a",
  images: {
    guaranteeSeal: "https://i.pinimg.com/736x/b3/54/2c/b3542ca1e5e6793aa2216c440678881c.jpg",
    gallery: [
      "https://i.pinimg.com/736x/3b/6f/1c/3b6f1c7c862ad89280dd3fb336b566a3.jpg",
      "https://i.pinimg.com/1200x/62/2b/7b/622b7bb67630aa30fc133ee251efda79.jpg",
      "https://i.pinimg.com/1200x/94/91/1c/94911c329b99bc1ea9b6e7db36886dfc.jpg",
      "https://i.pinimg.com/1200x/ee/c8/33/eec833d61877bfe45534b140bf969f3c.jpg",
      "https://i.pinimg.com/1200x/d5/1d/d7/d51dd72665e79ba76971dbeb5968e540.jpg",
      "https://i.pinimg.com/736x/d8/47/a5/d847a5539b6259026e78bc4d9c08c1e8.jpg",
    ]
  },
  videoTestimonials: [
    { vimeoId: "1148942680" },
    { vimeoId: "1148942701" },
    { vimeoId: "1148942741" }
  ]
};

// --- COMPONENTES INTERNOS ---

const StickyTimer = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 15, seconds: 0 });
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { hours, minutes, seconds } = prev;
        if (seconds > 0) seconds--;
        else if (minutes > 0) { minutes--; seconds = 59; }
        else if (hours > 0) { hours--; minutes = 59; seconds = 59; }
        else { hours = 0; minutes = 14; seconds = 59; }
        return { hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  const fmt = (n: number) => n.toString().padStart(2, '0');
  return (
    <div className="fixed top-0 left-0 right-0 z-[100] bg-gradient-to-r from-pink-500 to-violet-700 shadow-lg py-2 text-white">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-center gap-4">
        <Clock size={18} className="animate-pulse" />
        <span className="text-xs md:text-sm font-bold uppercase tracking-wider">La oferta termina en:</span>
        <div className="font-mono text-xl md:text-2xl font-black">
          {fmt(timeLeft.hours)}:{fmt(timeLeft.minutes)}:{fmt(timeLeft.seconds)}
        </div>
      </div>
    </div>
  );
};

const Hero = () => (
  <header className="pt-24 pb-16 px-4 text-center bg-[#FAF7F2] relative overflow-hidden">
    <div className="absolute top-0 right-0 w-64 h-64 bg-violet-200 rounded-full blur-3xl opacity-20 -mr-32 -mt-32"></div>
    <div className="max-w-5xl mx-auto relative z-10">
      <div className="inline-block bg-violet-950 text-white px-6 py-3 rounded-2xl mb-8 transform -rotate-1 border-l-8 border-pink-500 shadow-xl">
        <h2 className="text-lg md:text-2xl font-black italic uppercase">¡ESTA ES TU OPORTUNIDAD ÚNICA!</h2>
      </div>
      <h1 className="text-4xl md:text-7xl font-black text-violet-950 leading-tight mb-6">
        Crea <span className="text-pink-600 italic">Velas Artesanales</span> <br/> y Emprende desde Casa
      </h1>
      <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto">
        No dejes pasar otro año. Aprende a facturar tus primeros <span className="text-violet-700 font-bold">$500 USD</span> con productos que enamoran.
      </p>
      <div className="max-w-4xl mx-auto mb-12 aspect-video bg-black rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white">
        <iframe src={`https://player.vimeo.com/video/${CONFIG.vimeoVideoId}?title=0&byline=0&portrait=0`} className="w-full h-full" frameBorder="0" allow="autoplay; fullscreen" />
      </div>
      <a href={CONFIG.paymentLink} className="inline-block bg-pink-500 hover:bg-pink-600 text-white font-black text-xl md:text-3xl px-12 py-6 rounded-3xl transition-transform hover:scale-105 shadow-2xl animate-bounce">
        ¡SÍ, QUIERO EMPEZAR MI NEGOCIO YA! 🚀
      </a>
    </div>
  </header>
);

const Stats = () => (
  <section className="bg-white py-12 border-y border-pink-100">
    <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 px-4">
      {[
        { l: "Clases", v: "120+", i: Video },
        { l: "Contenido", v: "21h+", i: Clock },
        { l: "Comunidad", v: "Acceso VIP", i: Users },
        { l: "Aval", v: "Certificado", i: Award },
      ].map((s, i) => (
        <div key={i} className="text-center group">
          <s.i className="mx-auto text-pink-500 mb-4 group-hover:scale-110 transition-transform" size={32} />
          <div className="text-2xl font-black text-violet-950">{s.v}</div>
          <div className="text-xs uppercase font-bold text-gray-400">{s.l}</div>
        </div>
      ))}
    </div>
  </section>
);

const Curriculum = () => (
  <section className="py-20 bg-pink-50 px-4">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl md:text-6xl font-black text-violet-950 text-center mb-16 italic underline decoration-pink-300">¿Qué vas a dominar?</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-[3rem] shadow-xl border border-pink-100">
          <div className="text-5xl mb-6">🕯️</div>
          <h3 className="text-3xl font-bold text-violet-900 mb-4">Velas Premium</h3>
          <ul className="space-y-3 text-gray-700 font-medium">
            <li>✨ Técnica de Gel y Cuarzo</li>
            <li>✨ Marmolado y Microperlado</li>
            <li>✨ Velas Hidratantes y Masajes</li>
            <li>✨ Postres y Capuchinos de Cera</li>
            <li>✨ Moldes 3D y Silicona</li>
          </ul>
        </div>
        <div className="bg-violet-950 p-8 rounded-[3rem] shadow-xl text-white">
          <div className="text-5xl mb-6">💼</div>
          <h3 className="text-3xl font-bold text-pink-400 mb-4">Tu Negocio Propio</h3>
          <ul className="space-y-4 opacity-90">
            <li className="bg-white/10 p-4 rounded-2xl border-l-4 border-pink-500">
              <b>Marketing y Ventas:</b> Cómo crear tu marca y vender en redes sociales sin morir en el intento.
            </li>
            <li className="bg-white/10 p-4 rounded-2xl border-l-4 border-pink-500">
              <b>Costos y Finanzas:</b> Ponle el precio justo a tu arte y garantiza tu rentabilidad.
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

const Bonuses = () => (
  <section className="py-20 px-4">
    <div className="max-w-5xl mx-auto bg-white rounded-[4rem] p-10 md:p-20 shadow-2xl border-2 border-pink-200 relative overflow-hidden">
      <div className="absolute top-10 -right-10 bg-yellow-400 text-violet-950 font-black px-12 py-2 rotate-45 text-sm">REGALO HOY</div>
      <div className="text-center mb-12">
        <Gift className="mx-auto text-pink-500 mb-4" size={60} />
        <h2 className="text-4xl md:text-6xl font-black text-violet-950 mb-4 italic">BONOS EXCLUSIVOS</h2>
        <p className="text-xl text-gray-500 font-bold uppercase tracking-widest">Valorados en más de $200 USD</p>
      </div>
      <div className="bg-gradient-to-br from-violet-50 to-pink-50 p-8 rounded-3xl border-2 border-pink-100 mb-10 flex flex-col md:flex-row items-center gap-8">
        <div className="text-7xl">🧼</div>
        <div>
          <h3 className="text-2xl font-black text-violet-900">CURSO DE JABONES ARTESANALES</h3>
          <p className="text-gray-600 mt-2">Domina la creación de jabones terapéuticos, faciales y decorativos desde cero.</p>
        </div>
        <div className="text-pink-600 font-black text-3xl shrink-0">¡GRATIS!</div>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        {["Bombas de baño", "Shampoo Sólido", "Mantequilla Corporal", "Bálsamos Labiales", "Directorio Proveedores", "Certificado Oficial"].map((b, i) => (
          <div key={i} className="flex items-center gap-3 bg-beige p-4 rounded-2xl font-bold text-violet-900 border border-pink-50">
            <Star className="text-yellow-500 fill-yellow-500" size={16} /> {b}
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Pricing = () => (
  <section className="py-20 px-4 bg-[#FAF7F2]">
    <div className="max-w-4xl mx-auto text-center">
      <div className="bg-violet-950 rounded-[4rem] p-12 md:p-20 text-white shadow-[0_50px_100px_rgba(76,29,149,0.3)] relative">
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-yellow-400 text-violet-950 font-black text-4xl px-12 py-6 rounded-full rotate-2">
          50% DESCUENTO
        </div>
        <h2 className="text-3xl md:text-5xl font-black mb-10 mt-6 italic">Empieza hoy mismo</h2>
        <div className="mb-10">
          <span className="text-2xl text-pink-400 line-through opacity-60">Antes: $60 USD</span>
          <div className="flex items-center justify-center gap-4 mt-2">
            <span className="text-2xl font-bold uppercase">Solo</span>
            <span className="text-7xl md:text-9xl font-black text-yellow-400">$30</span>
            <span className="text-3xl font-black">USD</span>
          </div>
          <p className="mt-4 text-pink-200 font-bold uppercase tracking-widest text-sm">PAGO ÚNICO • ACCESO DE POR VIDA</p>
        </div>
        <a href={CONFIG.paymentLink} className="block w-full bg-pink-500 hover:bg-pink-600 text-white font-black text-2xl md:text-4xl py-8 rounded-[2rem] transition-all transform hover:scale-105 shadow-2xl mb-8">
          🚀 SÍ, QUIERO MI CUPA CON DESCUENTO
        </a>
        <div className="flex justify-center gap-8 opacity-60 text-sm font-bold">
          <span className="flex items-center gap-2"><ShieldCheck size={18}/> SEGURO</span>
          <span className="flex items-center gap-2"><Smartphone size={18}/> MÓVIL</span>
          <span className="flex items-center gap-2"><Award size={18}/> CALIDAD</span>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-12 bg-white border-t border-pink-100 text-center">
    <div className="max-w-6xl mx-auto px-4">
      <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">
        © {new Date().getFullYear()} Academia de Velas Artesanales • Todos los derechos reservados
      </p>
    </div>
  </footer>
);

// --- APP PRINCIPAL ---
const App = () => {
  return (
    <div className="min-h-screen selection:bg-pink-200">
      <StickyTimer />
      <Hero />
      <Stats />
      <Curriculum />
      <section className="py-20 bg-white">
         <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-3 gap-6">
            {CONFIG.images.gallery.map((img, i) => (
              <img key={i} src={img} className="rounded-3xl aspect-square object-cover shadow-lg border-4 border-pink-50 hover:scale-105 transition-transform" />
            ))}
         </div>
      </section>
      <Bonuses />
      <Pricing />
      <section className="py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto bg-pink-100/50 p-10 rounded-[3rem] border-2 border-dashed border-pink-400">
          <img src={CONFIG.images.guaranteeSeal} className="w-40 h-40 mx-auto rounded-2xl mb-6 shadow-xl" />
          <h2 className="text-3xl font-black text-violet-950 mb-4 italic">Garantía de Satisfacción 7 Días</h2>
          <p className="text-gray-700 font-medium">Si no estás feliz con el curso, te devolvemos el 100% de tu inversión. Sin preguntas.</p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

// --- RENDER ---
const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
}
