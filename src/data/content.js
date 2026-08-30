export const contact = {
  whatsapp: '5562981368771',
  whatsappDisplay: '(62) 98136-8771',
  whatsappMessage: 'Olá! Vim pelo site e quero saber mais sobre criação de sites.',
  email: 'velascoservico@gmail.com',
  instagram: 'https://instagram.com/velascosites',
};

export const whatsappLink = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(contact.whatsappMessage)}`;

export const navLinks = [
  { href: '#servicos', label: 'Serviços' },
  { href: '#diferenciais', label: 'Diferenciais' },
  { href: '#trabalhos', label: 'Trabalhos' },
  { href: '#processo', label: 'Processo' },
  { href: '#faq', label: 'FAQ' },
];

export const painPoints = {
  bad: {
    label: 'agencia-tradicional.js',
    items: [
      'Projetos que se arrastam por meses',
      'Você fala com atendente, não com quem faz',
      'Layout genérico, sem cara do seu negócio',
      'Preço salgado pra quem tá começando',
    ],
  },
  good: {
    label: 'velasco.js',
    items: [
      'Site no ar em poucas semanas',
      'Você fala direto comigo, do início ao fim',
      'Design feito sob medida pro seu negócio',
      'Preço justo, sem letra miúda',
    ],
  },
};

export const serviceTags = ['Sites institucionais', 'Landing pages de conversão', 'Sites para comércio local'];

export const serviceCopy =
  'A Velasco faz sites sob medida para pequenos negócios locais — barbearias, salões, lojas de roupa, pizzarias, escritórios de contabilidade e prestadores de serviço que precisam de uma presença online rápida e profissional. Cada projeto é pensado pro seu tipo de negócio: um site para barbearia não deve parecer o mesmo template usado por uma loja de celulares. Se você procura um desenvolvedor de sites freelancer que entrega rápido, cobra justo e fala direto com você do início ao fim, é esse o trabalho.';

export const differentials = [
  {
    title: 'Atendimento direto',
    text: 'Você fala comigo, sempre. Sem burocracia, sem intermediário, sem fila de agência.',
  },
  {
    title: 'Entrega rápida',
    text: 'Do primeiro contato ao site no ar em poucas semanas, com acompanhamento em cada etapa.',
  },
  {
    title: 'Ultra-responsivo',
    text: 'Perfeito no celular, tablet e desktop — porque é lá que seu cliente vai te encontrar.',
  },
  {
    title: 'Preço justo',
    text: 'Valor acessível pra quem está começando, sem cortar qualidade ou personalização.',
  },
];

export const stats = [
  { value: 3, suffix: '', label: 'sites no ar' },
  { value: 100, suffix: '%', label: 'dos projetos com atendimento direto, sem agência' },
  { value: 1, suffix: '', label: 'único responsável do início ao fim' },
];

export const portfolio = [
  {
    url: 'wmcell.vercel.app',
    href: 'https://wmcell.vercel.app',
    title: 'WM Cell',
    description: 'Site institucional para loja de celulares e acessórios.',
  },
  {
    url: 'trevosbarbearia.vercel.app',
    href: 'https://trevosbarbearia.vercel.app',
    title: "Trevo's Barbearia",
    description: 'Site para barbearia, com visual moderno e foco em agendamento.',
  },
  {
    url: 'casellapizzas.vercel.app',
    href: 'https://casellapizzas.vercel.app',
    title: 'Casella Pizzas',
    description: 'Site para pizzaria, com cardápio em destaque e pedido facilitado.',
  },
];

// AVISO PARA O DONO DO SITE: depoimentos ilustrativos — troque pelos relatos reais dos seus clientes antes de publicar
export const testimonials = [
  {
    quote: 'Fechei em uma conversa no WhatsApp e o site ficou pronto antes do prazo. Nada de enrolação.',
    initials: 'RN',
    name: 'Ricardo N.',
    business: 'Barbearia Nunes',
  },
  {
    quote: 'Finalmente um site com a cara da minha loja, não um template igual ao de todo mundo.',
    initials: 'CM',
    name: 'Camila M.',
    business: 'Studio Camila Modas',
  },
  {
    quote: 'Preço justo e falei direto com quem construiu o site do início ao fim. Recomendo.',
    initials: 'JP',
    name: 'João P.',
    business: 'Contabilidade JP',
  },
];

export const processSteps = [
  {
    num: '01',
    title: 'Contato no WhatsApp',
    text: 'Você me chama e conta a ideia do seu negócio, sem compromisso.',
  },
  {
    num: '02',
    title: 'Proposta sem letras miúdas',
    text: 'Orçamento claro, prazo e escopo definidos — sem pegadinha.',
  },
  {
    num: '03',
    title: 'Desenvolvimento acompanhado',
    text: 'Você acompanha o site sendo construído, com espaço pra ajustes.',
  },
  {
    num: '04',
    title: 'Site publicado',
    text: 'No ar, testado e pronto pra atrair clientes.',
  },
];

export const faqItems = [
  {
    q: 'Quanto tempo leva pra ficar pronto?',
    a: 'Depende do tipo de site, mas a maioria dos projetos fica pronta em poucas semanas — o prazo exato eu te passo já na proposta.',
  },
  {
    q: 'Como funciona o pagamento?',
    a: 'Combinamos direto no WhatsApp, sem letra miúda: valor fechado, dividido em etapas do projeto.',
  },
  {
    q: 'Você faz manutenção depois da entrega?',
    a: 'Sim. Depois que o site vai ao ar, seguimos em contato direto pra ajustes e manutenção.',
  },
  {
    q: 'Preciso ter domínio e hospedagem?',
    a: 'Não precisa ter nada pronto. Eu te oriento em cada passo, ou cuido disso pra você.',
  },
  {
    q: 'Dá pra pedir ajustes depois que o site for lançado?',
    a: 'Claro. A ideia é o site crescer junto com o seu negócio, então ajustes fazem parte.',
  },
];

export const codeLines = [
  { text: '<!-- barbearia-nunes/index.html -->', type: 'comment' },
  { text: '<section class="hero">', type: 'tag' },
  { text: '  <h1>Barbearia Nunes</h1>', type: 'tag' },
  { text: '  <p>Cortes clássicos, ambiente moderno.</p>', type: 'tag' },
  { text: '  <button>Agendar horário</button>', type: 'tag' },
  { text: '</section>', type: 'tag' },
];
