import Reveal from './Reveal.jsx';
import { contact, whatsappLink } from '../data/content.js';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="py-[88px] md:py-[120px] border-t border-line">
      <div className="max-w-wrap mx-auto px-5 md:px-8">
        <Reveal className="glow text-center rounded-3xl py-14 px-6 mb-14">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Vamos tirar sua ideia do papel?</h2>
          <p className="text-inkmute mb-7">Chama no WhatsApp e conta como é o seu negócio — sem compromisso.</p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full font-bold text-sm px-7 py-3.5 text-bg bg-gradient-to-b from-goldlight to-gold shadow-[0_1px_0_rgba(255,255,255,0.35)_inset,0_8px_24px_-8px_rgba(201,164,99,0.55)] transition-transform hover:-translate-y-0.5"
          >
            Falar no WhatsApp agora
          </a>
        </Reveal>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-5 pb-6">
          <div className="font-display font-bold flex items-center gap-2">
            <span className="text-gold font-mono">{'</>'}</span> velasco
          </div>
          <div className="flex items-center gap-6 font-mono text-sm text-inkmute">
            <a href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noopener noreferrer" className="no-underline hover:text-goldlight">
              {contact.whatsappDisplay}
            </a>
            <a href={contact.instagram} target="_blank" rel="noopener noreferrer" className="no-underline hover:text-goldlight">
              instagram
            </a>
            <a href={`mailto:${contact.email}`} className="no-underline hover:text-goldlight">
              email
            </a>
          </div>
        </div>
        <p className="text-center text-xs text-inkmute">© {year} Velasco — Criação de Sites. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
