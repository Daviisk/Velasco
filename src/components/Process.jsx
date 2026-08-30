import Reveal from './Reveal.jsx';
import { processSteps } from '../data/content.js';

export default function Process() {
  return (
    <section id="processo" className="py-[88px] md:py-[120px] border-t border-line">
      <div className="max-w-wrap mx-auto px-5 md:px-8">
        <Reveal className="max-w-xl mb-4">
          <p className="eyebrow font-mono text-[0.75rem] text-gold mb-4">como-funciona</p>
          <h2 className="text-3xl md:text-5xl font-bold">Do contato ao site no ar</h2>
        </Reveal>

        <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
          <div className="hidden lg:block absolute top-5 left-0 right-0 h-px bg-line" />
          {processSteps.map((step, i) => (
            <Reveal key={step.num} delay={i * 0.1} className="relative">
              <div
                className={`w-10 h-10 rounded-full grid place-items-center font-mono font-bold text-sm mb-4 relative z-10 ${
                  i === processSteps.length - 1 ? 'bg-gold text-bg' : 'border border-line bg-panel text-gold'
                }`}
              >
                {step.num}
              </div>
              <h3 className="font-bold text-lg mb-1.5">{step.title}</h3>
              <p className="text-sm text-inkmute leading-relaxed">{step.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
