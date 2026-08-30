import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Pains from './components/Pains.jsx';
import Differentials from './components/Differentials.jsx';
import Stats from './components/Stats.jsx';
import Portfolio from './components/Portfolio.jsx';
import Manifesto from './components/Manifesto.jsx';
import Process from './components/Process.jsx';
import FAQ from './components/FAQ.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import WhatsAppFab from './components/WhatsAppFab.jsx';

export default function App() {
  return (
    <>
      <div className="grain" aria-hidden="true" />
      <Header />
      <main id="conteudo">
        <Hero />
        <Pains />
        <Differentials />
        <Stats />
        <Portfolio />
        <Manifesto />
        <Process />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
