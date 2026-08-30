import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { navLinks, whatsappLink } from '../data/content.js';
import ThemeToggle from './ThemeToggle.jsx';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="max-w-wrap mx-auto px-5 md:px-8">
          <div className="mt-3 flex items-center justify-between rounded-2xl border border-line bg-panel/80 backdrop-blur-md px-4 md:px-5 py-3">
            <a href="#conteudo" className="flex items-center gap-2 font-display font-bold text-lg no-underline text-ink">
              <span className="text-gold font-mono">{'</>'}</span> velasco
            </a>

            <nav className="hidden md:flex items-center gap-8 font-mono text-[0.8rem] text-inkmute">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="no-underline transition-colors hover:text-goldlight">
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <ThemeToggle />
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center justify-center gap-2 rounded-full font-semibold text-[0.8rem] px-5 py-2.5 whitespace-nowrap text-bg bg-gradient-to-b from-goldlight to-gold shadow-[0_1px_0_rgba(255,255,255,0.35)_inset,0_8px_24px_-8px_rgba(201,164,99,0.55)] transition-transform hover:-translate-y-0.5"
              >
                Chamar no WhatsApp
              </a>
              <button
                onClick={() => setOpen(true)}
                aria-label="Abrir menu"
                aria-expanded={open}
                className="grid md:hidden place-items-center w-10 h-10 rounded-[10px] border border-line"
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M1 4H17M1 9H17M1 14H17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/60 z-[55] md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.div
              className="fixed top-0 right-0 h-full w-[78%] max-w-[320px] z-[60] bg-panel border-l border-line p-6 flex flex-col md:hidden"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.4, ease: [0.77, 0, 0.18, 1] }}
            >
              <div className="flex items-center justify-between mb-12">
                <span className="font-mono text-gold text-[0.85rem]">Menu</span>
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Fechar menu"
                  className="w-9 h-9 grid place-items-center rounded-[10px] border border-line"
                >
                  <svg width="14" height="14" viewBox="0 0 14 14">
                    <path d="M1 1L13 13M13 1L1 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                </button>
              </div>
              <div className="flex flex-col gap-6 font-mono text-lg">
                {navLinks.map((link) => (
                  <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="no-underline text-ink">
                    {link.label}
                  </a>
                ))}
              </div>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center justify-center gap-2 rounded-full font-semibold text-[0.875rem] px-7 py-3.5 text-bg bg-gradient-to-b from-goldlight to-gold"
              >
                Chamar no WhatsApp
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
