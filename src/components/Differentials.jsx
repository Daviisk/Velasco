import { motion } from 'framer-motion';
import Reveal from './Reveal.jsx';
import { differentials } from '../data/content.js';

const icons = [
  <path key="1" d="M13 2L15.5 9.5L23 12L15.5 14.5L13 22L10.5 14.5L3 12L10.5 9.5L13 2Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />,
  <>
    <path key="2a" d="M4 13H16M16 13L11 8M16 13L11 18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    <path key="2b" d="M20 5V21" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </>,
  <>
    <rect key="3a" x="8" y="2" width="10" height="22" rx="2" stroke="currentColor" strokeWidth="1.4" />
    <path key="3b" d="M12 20H14" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
  </>,
  <>
    <circle key="4a" cx="13" cy="13" r="9.5" stroke="currentColor" strokeWidth="1.4" />
    <path key="4b" d="M13 8V13L16.5 15.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </>,
];

export default function Differentials() {
  return (
    <section id="diferenciais" className="py-[88px] md:py-[120px] border-t border-line">
      <div className="max-w-wrap mx-auto px-5 md:px-8">
        <Reveal className="max-w-xl mb-14">
          <p className="eyebrow font-mono text-[0.75rem] text-gold mb-4">diferenciais</p>
          <h2 className="text-3xl md:text-5xl font-bold">Por que trabalhar comigo</h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {differentials.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="h-full rounded-2xl border border-line bg-panel p-6 hover:shadow-xl hover:border-gold/30 transition-[border-color,box-shadow]"
              >
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" className="text-gold mb-4">
                  {icons[i]}
                </svg>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-inkmute leading-relaxed">{item.text}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
