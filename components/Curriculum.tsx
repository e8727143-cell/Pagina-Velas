
import React from 'react';

const Curriculum: React.FC = () => {
  return (
    <section className="py-10 px-4 bg-pink-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-violet-900 mb-4 italic">¿Qué vas a aprender en el Programa de Velas?</h2>
          <p className="text-xl text-gray-600">Aprende desde cero y domina técnicas avanzadas paso a paso.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Velas - Columna Extendida */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-pink-100 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4 mb-6">
              <div className="text-4xl">🕯️</div>
              <h3 className="text-2xl font-bold text-violet-900 underline decoration-pink-300">Velas Artesanales Premium</h3>
            </div>
            <p className="text-gray-600 mb-6 font-medium">Domina más de 30 técnicas modernas y en tendencia:</p>
            <div className="grid sm:grid-cols-2 gap-4">
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">• Técnica de Gel y Cuarzo</li>
                <li className="flex items-start gap-2">• Marmolado y Microperlado</li>
                <li className="flex items-start gap-2">• Velas Hidratantes y Masajes</li>
                <li className="flex items-start gap-2">• Técnica Capuchino y Postres</li>
                <li className="flex items-start gap-2">• Velas Incrustadas y Waxmelts</li>
              </ul>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">• Porcelana y Moldes 3D</li>
                <li className="flex items-start gap-2">• Velas Navideñas y Estacionales</li>
                <li className="flex items-start gap-2">• Uso correcto de pabilos y aromas</li>
                <li className="flex items-start gap-2">• Colorimetría avanzada</li>
                <li className="flex items-start gap-2">• Empaque premium y presentación</li>
              </ul>
            </div>
            <div className="mt-6 p-4 bg-pink-50 rounded-xl border-l-4 border-pink-400">
              <p className="font-bold text-violet-800 text-sm italic underline decoration-pink-200">
                ⭐ MEGA MÓDULO: Aprende a crear tus propios moldes desde cero usando silicona, cemento y yeso.
              </p>
            </div>
          </div>

          {/* Emprendimiento */}
          <div className="bg-violet-900 p-8 rounded-3xl shadow-lg text-white">
            <div className="flex items-center gap-4 mb-6">
              <div className="text-4xl">💼</div>
              <h3 className="text-2xl font-bold">Emprendimiento y Negocio</h3>
            </div>
            <p className="text-pink-200 mb-6 italic">(Convierte tu pasión en libertad financiera)</p>
            <p className="mb-4 font-medium">No solo aprendes a hacer productos:</p>
            <ul className="space-y-5 text-sm opacity-90">
              <li className="flex items-start gap-3 bg-white/10 p-4 rounded-xl">
                <span className="text-pink-400 text-xl">👉</span> 
                <div>
                  <span className="font-bold block text-pink-300 mb-1">Marketing y Ventas</span>
                  Aprendes a venderlos, crear tu marca desde cero y atraer clientes calificados usando redes sociales.
                </div>
              </li>
              <li className="flex items-start gap-3 bg-white/10 p-4 rounded-xl">
                <span className="text-pink-400 text-xl">👉</span> 
                <div>
                  <span className="font-bold block text-pink-300 mb-1">Finanzas y Escalamiento</span>
                  Incluye módulos de costos, precios sugeridos, experiencia de usuario y cómo escalar tu negocio artesanal.
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Curriculum;
