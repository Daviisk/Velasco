import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { codeLines } from '../data/content.js';

export default function CodeEditor() {
  const [displayedLines, setDisplayedLines] = useState([]);
  const [previewStage, setPreviewStage] = useState(0); // 0 none, 1 heading, 2 text, 3 button
  const timeoutRef = useRef(null);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduced) {
      setDisplayedLines(codeLines.map((l) => l.text));
      setPreviewStage(3);
      return;
    }

    let lineIndex = 0;
    let charIndex = 0;
    const speed = 18;

    function tick() {
      if (lineIndex >= codeLines.length) return;
      const fullText = codeLines[lineIndex].text;
      charIndex += 1;

      setDisplayedLines((prev) => {
        const next = prev.slice(0, lineIndex);
        next[lineIndex] = fullText.slice(0, charIndex);
        return next;
      });

      if (charIndex >= fullText.length) {
        if (lineIndex === 2) setPreviewStage(1);
        if (lineIndex === 3) setPreviewStage(2);
        if (lineIndex === 4) setPreviewStage(3);
        lineIndex += 1;
        charIndex = 0;
        timeoutRef.current = setTimeout(tick, speed * 3);
      } else {
        timeoutRef.current = setTimeout(tick, speed);
      }
    }

    timeoutRef.current = setTimeout(tick, 500);
    return () => clearTimeout(timeoutRef.current);
  }, []);

  return (
    <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
      <div className="rounded-2xl border border-line bg-panel overflow-hidden">
        <div className="flex items-center gap-2 px-4 py-3 border-b border-line">
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#4a4a50' }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#4a4a50' }} />
          <span className="w-2.5 h-2.5 rounded-full bg-gold" />
          <div className="flex gap-1 ml-3">
            <div className="px-3 py-1 rounded-md bg-panelalt text-xs font-mono">index.html</div>
            <div className="px-3 py-1 rounded-md text-xs font-mono text-inkmute">style.css</div>
          </div>
        </div>
        <div className="grid md:grid-cols-2">
          <div className="p-4 font-mono text-[0.8rem] leading-relaxed min-h-[200px] whitespace-pre-wrap break-words">
            {displayedLines.map((line, i) => (
              <div key={i} className={codeLines[i]?.type === 'comment' ? 'text-[#68686e]' : 'text-inkmute'}>
                {line || '\u00A0'}
              </div>
            ))}
          </div>
          <div className="p-5 border-t md:border-t-0 md:border-l border-line flex flex-col gap-2 justify-center">
            <h4 className="text-lg font-bold transition-opacity duration-500" style={{ opacity: previewStage >= 1 ? 1 : 0 }}>
              Barbearia Nunes
            </h4>
            <p className="text-sm text-inkmute transition-opacity duration-500" style={{ opacity: previewStage >= 2 ? 1 : 0 }}>
              Cortes clássicos, ambiente moderno.
            </p>
            <span
              tabIndex={-1}
              aria-hidden="true"
              className="inline-flex w-fit items-center justify-center rounded-full font-bold text-[0.75rem] px-5 py-2 text-bg bg-gradient-to-b from-goldlight to-gold mt-1 transition-opacity duration-500"
              style={{ opacity: previewStage >= 3 ? 1 : 0 }}
            >
              Agendar horário
            </span>
          </div>
        </div>
      </div>
      <p className="mt-3 text-center text-xs font-mono text-inkmute">código sendo escrito → site no ar, em tempo real</p>
    </motion.div>
  );
}
