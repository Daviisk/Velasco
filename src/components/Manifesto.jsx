import Reveal from './Reveal.jsx';
import { testimonials } from '../data/content.js';

export default function Manifesto() {
  return (
    <section className="py-[88px] md:py-[120px] border-t border-line">
      <div className="max-w-wrap mx-auto px-5 md:px-8">
        <Reveal className="glow rounded-3xl p-2 mb-14">
          <p className="eyebrow font-mono text-[0.75rem] text-gold mb-4">manifesto</p>
          <h2 className="text-3xl md:text-5xl font-bold">
            Código bem escrito.
            <br />
            Site que funciona.
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1} className="rounded-2xl border border-line bg-panel p-6 flex flex-col justify-between gap-6">
              <p className="text-[0.95rem] leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-panelalt border border-line grid place-items-center font-mono text-xs font-bold text-gold">
                  {t.initials}
                </div>
                <div className="text-sm">
                  <strong className="block">{t.name}</strong>
                  <small className="text-inkmute">{t.business}</small>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        {/* AVISO PARA O DONO DO SITE: depoimentos ilustrativos — troque pelos relatos reais dos seus clientes antes de publicar */}
      </div>
    </section>
  );
}
