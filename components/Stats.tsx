
import React from 'react';
import { Users, Clock, Video, Award } from 'lucide-react';

const Stats: React.FC = () => {
  const stats = [
    { label: "Clases grabadas", value: "120+", icon: Video },
    { label: "Horas de contenido", value: "21h+", icon: Clock },
    { label: "Comunidad VIP", value: "Acceso", icon: Users },
    { label: "Certificado", value: "Internacional", icon: Award },
  ];

  return (
    <section className="bg-white py-6 px-4 border-y border-pink-100">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div className="flex justify-center mb-4">
              <stat.icon className="text-pink-500 w-8 h-8" />
            </div>
            <div className="text-2xl font-bold text-violet-900">{stat.value}</div>
            <div className="text-sm text-gray-500 font-medium uppercase tracking-tight">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
