import { getPermalink } from './utils/permalinks';

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
      text: 'Contacto',
      href: getPermalink('/contacto'),
    },
  ],
  actions: [{ text: 'AYUDA EN MISIONES', href: getPermalink('/contacto#ayuda'), class: 'bg-red-600 hover:bg-red-700' }],
};

export const footerData = {
  links: [
    {
      title: 'Asociación',
      links: [
        { text: 'Quiénes somos', href: getPermalink('/quienes-somos') },
        { text: 'Qué hacemos', href: getPermalink('/que-hacemos') },
        { text: 'Contacto', href: getPermalink('/contacto') },
      ],
    },
    {
      title: 'Nuestros Pilares',
      links: [
        { text: 'Prevención', href: '/que-hacemos#prevencion' },
        { text: 'Orientación', href: '/que-hacemos#orientacion' },
        { text: 'Postvención', href: '/que-hacemos#postvencion' },
      ],
    },
    {
      title: 'Contacto',
      links: [
        { text: 'Posadas, Misiones, Argentina', href: '#' },
        { text: 'ChaViS (Misiones): 3764-518800', href: 'tel:+543764518800' },
        { text: 'Línea de crisis IPS: 3765-481000', href: 'tel:+543765481000' },
        { text: 'WhatsApp: 3764-385252', href: 'https://wa.me/5493764385252' },
        { text: 'Emergencias: 911', href: 'tel:911' },
        { text: 'Línea nacional 135 (Prevención)', href: 'tel:135' },
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
    { text: 'Inicios en 2004 · Personería Jurídica desde 2005', href: '#' },
  ],
  socialLinks: [
    { ariaLabel: 'WhatsApp', icon: 'tabler:brand-whatsapp', href: 'https://wa.me/5493764385252' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/AsocDefenderLaVida/' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/asocdefenderlavida/' },
    { ariaLabel: 'Email', icon: 'tabler:mail', href: 'mailto:defenderlavida2006@gmail.com' },
  ],
  footNote: `
    © Hablemos de Defender la Vida · Posadas, Misiones, Argentina · Todos los derechos reservados.<br />
    Desarrollado por <a class="text-primary hover:underline" href="https://github.com/fakumax/" target="_blank" rel="noopener noreferrer">Facundo Vergara</a>.
  `,
};
