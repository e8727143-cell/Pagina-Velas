
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-beige-soft py-8 px-4 text-center border-t border-pink-100">
      <div className="max-w-4xl mx-auto">
        <p className="text-xs text-gray-400">
          © {new Date().getFullYear()} Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
