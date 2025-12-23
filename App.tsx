
import React, { Suspense } from 'react';
import StickyTimer from './components/StickyTimer';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Benefits from './components/Benefits';
import Gallery from './components/Gallery';
import Curriculum from './components/Curriculum';
import Testimonials from './components/Testimonials';
import Bonuses from './components/Bonuses';
import FreeServices from './components/FreeServices';
import Pricing from './components/Pricing';
import Guarantee from './components/Guarantee';
import Footer from './components/Footer';

// Componente Boundary simple para capturar errores de renderizado
class ErrorBoundary extends React.Component<{children: React.ReactNode}, {hasError: boolean}> {
  constructor(props: {children: React.ReactNode}) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() { return { hasError: true }; }
  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
          <h1 className="text-2xl font-bold text-violet-900">Algo salió mal al cargar la página.</h1>
          <button onClick={() => window.location.reload()} className="mt-4 bg-pink-500 text-white px-6 py-2 rounded-full">
            Reintentar carga
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <div className="min-h-screen flex flex-col font-sans selection:bg-pink-200 bg-[#FAF7F2]">
        <StickyTimer />
        
        <main className="flex-grow pt-[50px]">
          <Hero />
          <Stats />
          <Benefits />
          <Gallery />
          <Curriculum />
          <Testimonials />
          <Bonuses />
          <FreeServices />
          <Pricing />
          <Guarantee />
        </main>

        <Footer />
      </div>
    </ErrorBoundary>
  );
};

export default App;
