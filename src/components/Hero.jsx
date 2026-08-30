import { motion } from 'framer-motion';
import { whatsappLink } from '../data/content.js';
import VantaBackground from './VantaBackground.jsx';
import CodeEditor from './CodeEditor.jsx';

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center pt-[132px] md:pt-[104px] pb-14 overflow-hidden glow">
      <VantaBackground />
      <div className="relative z-10 max-w-wrap mx-auto px-5 md:px-8 w-full">
        <div className="grid gap-12 lg:gap-16 lg:grid-cols-2 items-center">
          <div>
            <p className="eyebrow font-mono text-[0.75rem] tracking-wide text-gold mb-4">criacao-de-sites --sob-medida</p>
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-extrabold"
            >
              Seu negócio merece um <span className="text-gold">site à altura</span> dele.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-5 text-inkmute text-base md:text-lg max-w-lg"
            >
              Crio sites rápidos, modernos e feitos sob medida — do primeiro contato ao site no ar, sem enrolação e falando direto comigo.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 flex flex-wrap items-center gap-3.5"
            >
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full font-bold text-sm px-7 py-3.5 text-bg bg-gradient-to-b from-goldlight to-gold shadow-[0_1px_0_rgba(255,255,255,0.35)_inset,0_8px_24px_-8px_rgba(201,164,99,0.55)] transition-transform hover:-translate-y-0.5"
              >
                Chamar no WhatsApp
              </a>
              <a
                href="#servicos"
                className="inline-flex items-center justify-center gap-2 rounded-full font-semibold text-sm px-7 py-3.5 border border-line hover:border-gold/60 hover:bg-gold/5 transition-colors"
              >
                Ver serviços
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-7 inline-flex items-center gap-2.5 border border-line rounded-full px-4 py-2.5"
            >
              <span aria-hidden="true" className="w-[7px] h-[7px] rounded-full bg-[#8fd39b] shadow-[0_0_0_3px_rgba(143,211,155,0.15)] animate-pulse" />
              <span className="font-mono text-[0.72rem] text-inkmute">Atendimento direto, sem agência e sem intermediário.</span>
            </motion.div>
          </div>

          <CodeEditor />
        </div>
      </div>
    </section>
  );
}
