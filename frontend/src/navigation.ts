import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Inicio',
      href: getPermalink('/'),
    },
    {
      text: 'Nosotros',
      href: getPermalink('/about'),
    },
    {
      text: 'Noticias (WP)',
      href: getPermalink('/noticias'),
    },
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
    {
      text: 'Contacto',
      href: getPermalink('/contact'),
    },
  ],
  actions: [{ text: 'AYUDA URGENTE', href: 'tel:911', class: 'bg-red-600 hover:bg-red-700' }],
};

export const footerData = {
  links: [
    {
      title: 'Asociación',
      links: [
        { text: 'Nosotros', href: getPermalink('/about') },
        { text: 'Noticias', href: getPermalink('/noticias') },
        { text: 'Contacto', href: getPermalink('/contact') },
      ],
    },
    {
      title: 'Nuestros Pilares',
      links: [
        { text: 'Prevención', href: '#' },
        { text: 'Orientación', href: '#' },
        { text: 'Postvención', href: '#' },
        { text: 'Grupos GARE', href: '#' },
      ],
    },
    {
      title: 'Contacto',
      links: [
        { text: 'Av. Sáenz Peña 2547, Posadas', href: '#' },
        { text: 'WhatsApp: 3764-385252', href: 'https://wa.me/5493764385252' },
        { text: 'Emergencias: 911', href: 'tel:911' },
        { text: 'Línea 135 (Prevención)', href: 'tel:135' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Presidenta: María Rosa Vargas', href: '#' },
    { text: 'Fundada en Posadas, Misiones (2005)', href: '#' },
  ],
  socialLinks: [
    { ariaLabel: 'WhatsApp', icon: 'tabler:brand-whatsapp', href: 'https://wa.me/5493764385252' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
  ],
  footNote: `
    © Hablemos de Defender la Vida · Posadas, Misiones, Argentina · Todos los derechos reservados.
  `,
};
