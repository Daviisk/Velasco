import { useState } from 'react';
import Reveal from './Reveal.jsx';
import { contact } from '../data/content.js';

export default function Contact() {
  const [form, setForm] = useState({ nome: '', negocio: '', mensagem: '' });
  const [errors, setErrors] = useState({});

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  function validate() {
    const next = {};
    if (!form.nome.trim()) next.nome = 'Conta seu nome pra eu saber com quem falo.';
    if (!form.mensagem.trim()) next.mensagem = 'Escreve um pouco sobre o que você precisa.';
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) return;

    const lines = [
      `Olá! Meu nome é ${form.nome}.`,
      form.negocio.trim() ? `Meu negócio: ${form.negocio}.` : null,
      form.mensagem.trim(),
    ].filter(Boolean);

    const text = encodeURIComponent(lines.join(' '));
    window.open(`https://wa.me/${contact.whatsapp}?text=${text}`, '_blank', 'noopener,noreferrer');
  }

  return (
    <section id="contato" className="py-[88px] md:py-[120px] border-t border-line">
      <div className="max-w-wrap-sm mx-auto px-5 md:px-8">
        <Reveal className="max-w-xl mb-10">
          <p className="eyebrow font-mono text-[0.75rem] text-gold mb-4">contato</p>
          <h2 className="text-3xl md:text-5xl font-bold">Conta sobre o seu negócio</h2>
          <p className="mt-4 text-inkmute">
            Preenche rapidinho — ao enviar, isso abre o WhatsApp já com sua mensagem pronta pra mandar direto pra mim.
          </p>
        </Reveal>

        <Reveal delay={0.1} as="form" onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
          <div>
            <label htmlFor="nome" className="block text-sm font-semibold mb-1.5">
              Seu nome
            </label>
            <input
              id="nome"
              name="nome"
              type="text"
              value={form.nome}
              onChange={handleChange}
              className="w-full rounded-xl border border-line bg-panel px-4 py-3 text-sm outline-none focus:border-gold/60"
              placeholder="Como você se chama?"
            />
            {errors.nome && <p className="text-xs text-red-400 mt-1">{errors.nome}</p>}
          </div>

          <div>
            <label htmlFor="negocio" className="block text-sm font-semibold mb-1.5">
              Nome do negócio <span className="text-inkmute font-normal">(opcional)</span>
            </label>
            <input
              id="negocio"
              name="negocio"
              type="text"
              value={form.negocio}
              onChange={handleChange}
              className="w-full rounded-xl border border-line bg-panel px-4 py-3 text-sm outline-none focus:border-gold/60"
              placeholder="Ex: Barbearia do João"
            />
          </div>

          <div>
            <label htmlFor="mensagem" className="block text-sm font-semibold mb-1.5">
              Conta um pouco sobre a ideia
            </label>
            <textarea
              id="mensagem"
              name="mensagem"
              rows={4}
              value={form.mensagem}
              onChange={handleChange}
              className="w-full rounded-xl border border-line bg-panel px-4 py-3 text-sm outline-none focus:border-gold/60 resize-none"
              placeholder="O que você precisa no site?"
            />
            {errors.mensagem && <p className="text-xs text-red-400 mt-1">{errors.mensagem}</p>}
          </div>

          <button
            type="submit"
            className="self-start inline-flex items-center justify-center gap-2 rounded-full font-bold text-sm px-7 py-3.5 text-bg bg-gradient-to-b from-goldlight to-gold shadow-[0_1px_0_rgba(255,255,255,0.35)_inset,0_8px_24px_-8px_rgba(201,164,99,0.55)] transition-transform hover:-translate-y-0.5"
          >
            Enviar pelo WhatsApp
          </button>
        </Reveal>
      </div>
    </section>
  );
}
