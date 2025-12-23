
import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const Benefits: React.FC = () => {
  const benefits = [
    "No necesitas experiencia",
    "Método guiado, claro y probado",
    "Acceso inmediato 24/7",
    "Aprende a crear, vender y escalar tus ventas"
  ];

  return (
    <section className="py-10 bg-white px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-violet-900 italic">Todo lo que necesitas para tener éxito:</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center gap-4 p-5 bg-pink-50/50 rounded-2xl border border-pink-100 shadow-sm transition-all hover:bg-pink-50">
              <CheckCircle2 className="text-pink-600 shrink-0 w-6 h-6" />
              <span className="text-lg font-bold text-gray-700 leading-tight">{benefit}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
