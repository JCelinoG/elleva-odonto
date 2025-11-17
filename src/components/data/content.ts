import type { NavigationItem, Service, Procedure, Testimonial } from "../types";

export const navigationItems: NavigationItem[] = [
  { name: 'Áreas de Atuação', href: '#areas' },
  { name: 'Procedimentos', href: '#procedimentos' },
  { name: 'Depoimentos', href: '#depoimentos' },
  { name: 'Sobre Nós', href: '#sobre' },
];

export const servicesData: Service[] = [
  {
    title: 'Prevenção Odontológica',
    description: 'A prevenção é o caminho para um sorriso saudável por toda a vida. Acompanhamento regular, exames e cuidados personalizados para evitar problemas futuros.'
  },
  {
    title: 'Limpeza Dental',
    description: 'Remoção profissional de placas e tártaro para manter gengivas saudáveis, prevenir cáries e garantir sensação duradoura de frescor e bem-estar.'
  },
  {
    title: 'Restaurações',
    description: 'Tratamento estético para reparar dentes cariados ou fraturados, devolvendo a aparência natural, conforto e segurança ao sorrir.'
  },
  {
    title: 'Clareamento Dental',
    description: 'Conquiste um sorriso mais branco e luminoso com técnicas de clareamento seguras e eficazes.'
  },
  {
    title: 'Lente de Contato',
    description: 'Correção estética que harmonizam a forma, cor e proporção dos dentes. Um sorriso transformado de maneira rápida, personalizada e natural.'
  }
];

export const testimonialsData: Testimonial[] = [
  {
    id: '1',
    name: 'Ana Carolina Silva',
    rating: 5,
    comment: 'Atendimento excepcional! A Dra. Isadora é muito atenciosa e profissional. Meu tratamento foi completo e sem dor. Recomendo a todos!',
    date: '2024-01-15'
  },
  {
    id: '2',
    name: 'Carlos Eduardo Santos',
    rating: 5,
    comment: 'Fiz implante na Elleva e o resultado foi fantástico. Dr. Lucas explicou todo o processo e me deixou muito seguro. Equipe maravilhosa!',
    date: '2024-01-10'
  },
  {
    id: '3',
    name: 'Mariana Oliveira',
    rating: 5,
    comment: 'Ambiente acolhedor e equipamentos modernos. Fiz clareamento e amei o resultado. Voltarei para manutenção sempre!',
    date: '2024-01-08'
  },
  {
    id: '4',
    name: 'Roberto Almeida',
    rating: 5,
    comment: 'Procurei a clínica para tratamento de canal e fui muito bem atendido. Zero dor e recuperação rápida. Profissionais excelentes!',
    date: '2024-01-05'
  },
  {
    id: '5',
    name: 'Juliana Costa',
    rating: 5,
    comment: 'Minha filha fez ortodontia aqui e o acompanhamento foi impecável. Equipe muito paciente com crianças. Super indico!',
    date: '2024-01-03'
  },
  {
    id: '6',
    name: 'Pedro Henrique Lima',
    rating: 5,
    comment: 'Fiz harmonização facial e o resultado superou minhas expectativas. Natural e muito bem feito. Agradeço toda a equipe!',
    date: '2023-12-28'
  }
];

export const proceduresData: Procedure[] = [
  {
    title: 'Tratamento de Canal',
    description: 'Indicado para dentes comprometidos por cáries profundas ou traumas, eliminando a dor, preservando a estrutura dental e devolvendo conforto.',
    icon: '🦷'
  },
  {
    title: 'Reconstrução de Coroa e Bloco',
    description: 'Solução estética e resistentes para recuperar dentes muito danificados. Reconstrução precisa que devolve função e aparência natural ao seu sorriso.',
    icon: '👑'
  },
  {
    title: 'Implante Dentário',
    description: 'O implante dentário é a solução mais segura e natural para repor dentes perdidos. Recupera firmeza, melhora a mastigação e traz de volta a confiança para sorrir sem medo.',
    icon: '🦴'
  },
  {
    title: 'Cirurgia de Siso',
    description: 'Extração segura, rápida e planejada, reduzindo riscos e desconfortos. Ideal para evitar dores, inflamações e futuros problemas bucais.',
    icon: '😁'
  },
  {
    title: 'Harmonização Facial',
    description: 'Procedimento que valorizam sua beleza natural e equilibra as proporções do seu rosto.',
    icon: '✨'
  }
];

export const aboutData = {
  title: 'Elleva Clínica Odontológica',
  description: 'Nosso objetivo é oferecer tratamentos odontológicos modernos, seguros e personalizados. Acreditamos que um sorriso saudável transforma a autoestima, relações e a qualidade de vida.',
  mission: 'A clínica é dirigida pelo Dr. Lucas Rodrigues e Dra. Isadora Miranda, casal de dentistas com formação em diversas especialidades. Juntos, unem técnica, empatia e dedicação para proporcionar uma experiência humanizada e resultados que realmente fazem a diferença.',
  dentists: [
    {
      name: 'Dr. Lucas Rodrigues',
      specialty: 'Cirurgião Dentista',
      description: 'Especialista em implantes dentários e cirurgias, com anos de experiência em tratamentos complexos.',
      image: '/images/dr-lucas.jpg' 
    },
    {
      name: 'Dra. Isadora Miranda',
      specialty: 'Dentista Estética',
      description: 'Especializada em harmonização facial e procedimentos estéticos, com abordagem humanizada.',
      image: '/images/dra-isadora.jpg'
    }
  ],
  values: [
    {
      title: 'Qualidade',
      description: 'Utilizamos tecnologia de ponta e materiais da mais alta qualidade',
      icon: '🎯'
    },
    {
      title: 'Confiança',
      description: 'Relação transparente e honesta com nossos pacientes',
      icon: '🤝'
    },
    {
      title: 'Inovação',
      description: 'Sempre atualizados com as mais modernas técnicas odontológicas',
      icon: '💡'
    },
    {
      title: 'Humanização',
      description: 'Atendimento acolhedor e individualizado para cada paciente',
      icon: '❤️'
    }
  ]
};
export const footerData = {
  contact: {
    address: 'Quadra ARSO 41, Av. LO-9, 30 - SL.03, Palmas - TO, 77000-000',
    phone: '(63) 99211-7815',
    email: 'contato@ellevaclinica.com.br',
    whatsapp: '(63) 99211-7815'
  },
  hours: {
    weekdays: 'Segunda a Sexta: 08:00 às 18:00',
    saturday: 'Sábado: 08:00 às 12:00',
    sunday: 'Domingo: Fechado'
  },
  socialMedia: {
    instagram: 'https://www.instagram.com/clinicaelleva.to/',
   // facebook: 'https://facebook.com/ellevaclinica'
  },
  quickLinks: [
    { name: 'Início', href: '#home' },
    { name: 'Áreas de Atuação', href: '#areas' },
    { name: 'Procedimentos', href: '#procedimentos' },
    { name: 'Depoimentos', href: '#depoimentos' },
    { name: 'Sobre Nós', href: '#sobre' }
  ]
};

export const whatsappInfo = {
  phone: '5563992117815',
  message: 'Olá! Gostaria de agendar uma consulta na Elleva Clínica Odontológica.'
};