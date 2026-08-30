import Reveal from './Reveal.jsx';
import { stats } from '../data/content.js';
import { useCountUp } from '../hooks/useCountUp.js';

function StatItem({ value, suffix, label, delay }) {
  const { ref, value: current } = useCountUp(value);
  return (
    <Reveal delay={delay} className="text-center">
      <div ref={ref} className="text-4xl md:text-5xl font-display font-extrabold text-gold">
        {current}
        {suffix}
      </div>
      <p className="mt-2 text-sm text-inkmute max-w-[220px] mx-auto">{label}</p>
    </Reveal>
  );
}

export default function Stats() {
  return (
    <section className="py-16 md:py-20 border-t border-line">
      <div className="max-w-wrap mx-auto px-5 md:px-8 grid grid-cols-1 sm:grid-cols-3 gap-10">
        {stats.map((s, i) => (
          <StatItem key={s.label} value={s.value} suffix={s.suffix} label={s.label} delay={i * 0.1} />
        ))}
      </div>
    </section>
  );
}
