
import React from 'react';
import { MessageCircle, Users, Truck, FileText, Check } from 'lucide-react';

const FreeServices: React.FC = () => {
  const services = [
    {
      title: "Mentoría 1 a 1 vía WhatsApp",
      desc: "No estarás sola. Resolvemos tus dudas de forma personalizada para que nunca te detengas.",
      icon: <MessageCircle className="w-8 h-8 text-pink-500" />,
      tag: "GRATIS"
    },
    {
      title: "Comunidad VIP de Alumnas",
      desc: "Acceso exclusivo a nuestro grupo de apoyo donde compartimos tips, diseños y motivación diaria.",
      icon: <Users className="w-8 h-8 text-violet-600" />,
      tag: "GRATIS"
    },
    {
      title: "Directorio de Proveedores",
      desc: "Te damos los contactos exactos para comprar insumos económicos en tu país.",
      icon: <Truck className="w-8 h-8 text-pink-500" />,
      tag: "GRATIS"
    },
    {
      title: "Certificado de Finalización",
      desc: "Avalamos tus conocimientos con un certificado internacional listo para imprimir.",
      icon: <FileText className="w-8 h-8 text-violet-600" />,
      tag: "GRATIS"
    }
  ];

  return (
    <section className="py-16 px-4 bg-beige-soft">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-black text-violet-900 mb-4 uppercase italic">
            🎁 ¡SERVICIOS <span className="text-pink-600">GRATUITOS</span> INCLUIDOS!
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Al unirte hoy, desbloqueas estos beneficios sin pagar un solo centavo adicional.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white p-8 rounded-[2rem] border-2 border-pink-100 shadow-sm hover:shadow-xl transition-all relative group overflow-hidden">
              <div className="absolute top-0 right-0 bg-pink-500 text-white px-4 py-1 text-[10px] font-black rounded-bl-xl tracking-widest">
                {service.tag}
              </div>
              <div className="mb-6 bg-pink-50 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-violet-900 mb-3 leading-tight">{service.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{service.desc}</p>
              
              <div className="mt-4 flex items-center gap-2 text-pink-600 font-bold text-xs uppercase">
                <Check size={14} /> Incluido hoy
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-violet-900 rounded-[2.5rem] p-8 md:p-12 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <h3 className="text-2xl md:text-4xl font-bold mb-4 relative z-10">¿Buscas servicios de apoyo extra?</h3>
          <p className="text-pink-200 mb-8 max-w-2xl mx-auto relative z-10">
            Nuestra academia es la única que te ofrece acompañamiento real de por vida. No solo compras un curso, compras un equipo de apoyo.
          </p>
          <a 
            href="#pricing"
            className="inline-block bg-pink-500 hover:bg-pink-600 text-white px-10 py-5 rounded-full font-black text-lg uppercase shadow-xl transition-transform hover:scale-105 relative z-10"
          >
            SÍ, QUIERO TODOS LOS REGALOS
          </a>
        </div>
      </div>
    </section>
  );
};

export default FreeServices;
