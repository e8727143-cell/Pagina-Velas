
import React from 'react';
import { Gift, Star } from 'lucide-react';

const Bonuses: React.FC = () => {
  return (
    <section className="py-10 px-4 bg-beige-soft">
      <div className="max-w-5xl mx-auto bg-white rounded-[3rem] p-10 md:p-12 shadow-xl relative overflow-hidden border border-pink-100">
        <div className="absolute top-0 right-0 bg-pink-500 text-white px-8 py-2 rounded-bl-3xl font-bold uppercase text-xs tracking-widest">
          OFERTA IRRESISTIBLE
        </div>

        <div className="flex flex-col items-center text-center mb-10">
          <div className="bg-pink-100 p-4 rounded-full mb-6">
            <Gift className="text-pink-600 w-12 h-12" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-violet-900 mb-4 uppercase">
            BONOS EXCLUSIVOS <span className="text-pink-500 text-2xl md:text-4xl">(HOY GRATIS)</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl">
            Si te inscribes hoy al curso de Velas, te regalamos un sistema completo valorado en cientos de dólares:
          </p>
        </div>

        {/* Highlighted Soap Bonus */}
        <div className="mb-12 p-6 bg-gradient-to-r from-violet-50 to-pink-50 rounded-2xl border-2 border-pink-200 flex flex-col md:flex-row items-center gap-8 shadow-sm">
          <div className="text-6xl">🧼</div>
          <div className="flex-1">
            <div className="inline-block bg-pink-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter mb-2">
              Súper Bono #1
            </div>
            <h3 className="text-2xl font-bold text-violet-900 mb-2">Curso Completo de Jabones Artesanales Naturales</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Aprende a crear jabones Faciales, Hidratantes, Exfoliantes y Terapéuticos: Carbón activado, Cacao, Café, Avena y Miel, Arroz, Lavanda, Manzanilla, Cúrcuma, Caléndula, Técnicas de Incrustados y más.
            </p>
          </div>
          <div className="text-center md:text-right">
            <span className="block text-gray-400 line-through text-sm">Valor: $47 USD</span>
            <span className="block text-pink-600 font-bold text-xl uppercase tracking-widest">¡GRATIS HOY!</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-4">
          {[
            "Bombas de baño aromáticas y terapéuticas",
            "Shampoo sólido artesanal (Tendencia Eco)",
            "Mantequilla corporal (Body Butter extra hidratante)",
            "Bálsamo labial natural 100% orgánico",
            "Varitas difusoras de aroma para el hogar",
            "Especial: Velas Navideñas y técnicas festivas",
            "Calendario de fechas especiales para vender",
            "Directorio de proveedores recomendados",
            "Módulo: Saponificación en frío avanzada",
            "Recetario extra con 50+ fórmulas ilimitadas",
            "Acceso a la Comunidad VIP de emprendedoras",
            "Actualizaciones de por vida sin costo"
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-3 py-2 border-b border-pink-50 text-gray-700">
              <Star className="text-yellow-400 w-4 h-4 shrink-0 fill-yellow-400" />
              <span className="text-sm font-medium">{item}</span>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block bg-violet-100 text-violet-700 px-6 py-3 rounded-2xl font-bold animate-bounce text-sm">
            🎁 Recibes 18 bonos en total al unirte ahora
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bonuses;
