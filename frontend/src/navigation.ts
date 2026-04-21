import { getPermalink, getBlogPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Inicio',
      href: getPermalink('/'),
    },
    {
      text: 'Quiénes somos',
      href: getPermalink('/quienes-somos'),
    },
    {
      text: 'Qué hacemos',
      href: getPermalink('/que-hacemos'),
    },
    {
      text: 'Noticias',
      href: getPermalink('/noticias'),
    },
    {
      text: 'Contacto',
      href: getPermalink('/contacto'),
    },
  ],
  actions: [{ text: 'AYUDA URGENTE · 135', href: 'tel:135', class: 'bg-red-600 hover:bg-red-700' }],
};

export const footerData = {
  links: [
    {
      title: 'Asociación',
      links: [
        { text: 'Quiénes somos', href: getPermalink('/quienes-somos') },
        { text: 'Qué hacemos', href: getPermalink('/que-hacemos') },
        { text: 'Noticias', href: getPermalink('/noticias') },
        { text: 'Contacto', href: getPermalink('/contacto') },
      ],
    },
    {
      title: 'Nuestros Pilares',
      links: [
        { text: 'Prevención', href: '/que-hacemos#prevencion' },
        { text: 'Orientación', href: '/que-hacemos#orientacion' },
        { text: 'Postvención', href: '/que-hacemos#postvencion' },
        { text: 'Grupos GARE', href: '/que-hacemos#gare' },
      ],
    },
    {
      title: 'Contacto',
      links: [
        { text: 'Posadas, Misiones, Argentina', href: '#' },
        { text: 'WhatsApp: 3764-385252', href: 'https://wa.me/5493764385252' },
        { text: 'Emergencias: 911', href: 'tel:911' },
        { text: 'Línea 135 (Prevención)', href: 'tel:135' },
      ],
    },
    {
      title: 'Datos Legales',
      links: [
        { text: 'Personería Jurídica Nº A-2839', href: '#' },
        { text: 'Entidad de Bien Público N°409', href: '#' },
        { text: 'CUIT: 30-70972472-6', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Presidenta: María Rosa Vargas', href: '#' },
    { text: 'Fundada en Posadas, Misiones (2005)', href: '#' },
  ],
  socialLinks: [
    { ariaLabel: 'WhatsApp', icon: 'tabler:brand-whatsapp', href: 'https://wa.me/5493764385252' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/defenderlavida' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/defenderlavida' },
    { ariaLabel: 'Email', icon: 'tabler:mail', href: 'mailto:defenderlavida@gmail.com' },
  ],
  footNote: `
    © Hablemos de Defender la Vida · Posadas, Misiones, Argentina · Todos los derechos reservados.
  `,
};
