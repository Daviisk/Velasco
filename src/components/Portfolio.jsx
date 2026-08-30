import { motion } from 'framer-motion';
import Reveal from './Reveal.jsx';
import { portfolio } from '../data/content.js';

export default function Portfolio() {
  return (
    <section id="trabalhos" className="py-[88px] md:py-[120px] border-t border-line">
      <div className="max-w-wrap mx-auto px-5 md:px-8">
        <Reveal className="max-w-xl mb-14">
          <p className="eyebrow font-mono text-[0.75rem] text-gold mb-4">trabalhos</p>
          <h2 className="text-3xl md:text-5xl font-bold">Alguns sites que já entreguei</h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-5">
          {portfolio.map((project, i) => (
            <Reveal key={project.url} delay={i * 0.1}>
              <motion.a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="block h-full rounded-2xl border border-line bg-panel overflow-hidden no-underline text-ink hover:shadow-xl hover:border-gold/30 transition-[border-color,box-shadow]"
              >
                <div className="flex items-center gap-1.5 px-4 py-3 border-b border-line">
                  <span className="w-2 h-2 rounded-full" style={{ background: '#4a4a50' }} />
                  <span className="w-2 h-2 rounded-full" style={{ background: '#4a4a50' }} />
                  <span className="w-2 h-2 rounded-full bg-gold" />
                  <span className="ml-2 font-mono text-xs text-inkmute">{project.url}</span>
                </div>
                <div className="p-6 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-bold text-lg mb-1.5">{project.title}</h3>
                    <p className="text-sm text-inkmute leading-relaxed">{project.description}</p>
                  </div>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0 mt-1 text-gold">
                    <path d="M4 12L12 4M12 4H5M12 4V11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </motion.a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
