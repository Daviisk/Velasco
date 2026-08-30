import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Reveal from './Reveal.jsx';
import { faqItems } from '../data/content.js';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className="py-[88px] md:py-[120px] border-t border-line">
      <div className="max-w-wrap-sm mx-auto px-5 md:px-8">
        <Reveal className="max-w-xl mb-14">
          <p className="eyebrow font-mono text-[0.75rem] text-gold mb-4">duvidas</p>
          <h2 className="text-3xl md:text-5xl font-bold">Perguntas frequentes</h2>
        </Reveal>

        <div className="flex flex-col gap-3">
          {faqItems.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <Reveal key={item.q} delay={i * 0.05} className="rounded-2xl border border-line bg-panel overflow-hidden">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 text-left px-5 py-4 font-semibold"
                >
                  <span>{item.q}</span>
                  <span className={`shrink-0 font-mono text-gold text-lg transition-transform ${isOpen ? 'rotate-45' : ''}`}>+</span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-4 text-sm text-inkmute leading-relaxed">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
