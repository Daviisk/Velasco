import Reveal from './Reveal.jsx';
import { painPoints, serviceTags, serviceCopy } from '../data/content.js';

export default function Pains() {
  return (
    <section id="servicos" className="py-[88px] md:py-[120px] border-t border-line">
      <div className="max-w-wrap mx-auto px-5 md:px-8">
        <Reveal className="max-w-xl mb-14">
          <p className="eyebrow font-mono text-[0.75rem] text-gold mb-4">o-problema</p>
          <h2 className="text-3xl md:text-5xl font-bold">Cansado de esperar meses por um site que nunca fica pronto?</h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-5">
          <Reveal className="rounded-2xl border border-line bg-panel p-6 md:p-8">
            <p className="font-mono text-xs text-inkmute mb-5">{painPoints.bad.label}</p>
            <ul className="flex flex-col gap-3">
              {painPoints.bad.items.map((item) => (
                <li key={item} className="flex gap-3 text-inkmute text-sm">
                  <span className="text-red-400/80 font-mono">×</span> {item}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1} className="rounded-2xl border border-gold/30 bg-panel p-6 md:p-8">
            <p className="font-mono text-xs text-gold mb-5">{painPoints.good.label}</p>
            <ul className="flex flex-col gap-3">
              {painPoints.good.items.map((item) => (
                <li key={item} className="flex gap-3 text-ink text-sm">
                  <span className="text-gold font-mono">✓</span> {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="mt-6 flex flex-wrap gap-2.5">
          {serviceTags.map((tag) => (
            <span key={tag} className="text-xs font-mono px-3.5 py-1.5 rounded-full border border-line text-inkmute">
              {tag}
            </span>
          ))}
        </Reveal>

        <Reveal delay={0.2} className="mt-7 max-w-2xl text-inkmute text-[0.94rem] leading-relaxed">
          <p>{serviceCopy}</p>
        </Reveal>
      </div>
    </section>
  );
}
