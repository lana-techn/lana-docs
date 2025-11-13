export default defineAppConfig({
  ui: {
    colors: {
      primary: 'green',
      neutral: 'slate'
    },
    footer: {
      slots: {
        root: 'border-t border-default',
        left: 'text-sm text-muted'
      }
    }
  },
  seo: {
    siteName: 'Using Dev'
  },
  header: {
    title: '',
    to: '/',
    logo: {
      alt: '',
      light: '',
      dark: ''
    },
    search: true,
    colorMode: true,
    links: [{
      'icon': 'i-lucide-archive',
      'to': '/templates',
      'aria-label': 'Templates'
    }, {
      'icon': 'i-simple-icons-github',
      'to': 'https://github.com/maulana-tech',
      'target': '_blank',
      'aria-label': 'GitHub'
    }]
  },
  footer: {
    credits: `Built with Using Dev • © ${new Date().getFullYear()} Using Dev`,
    colorMode: false,
    links: [{
      'icon': 'i-simple-icons-linkedin',
      'to': 'https://www.linkedin.com/in/muhammad-maulana-firdaussyah-083362293',
      'target': '_blank',
      'aria-label': 'LinkedIn'
    }, {
      'icon': 'i-lucide-mail',
      'to': 'mailto:firdaussyah03@gmail.com',
      'target': '_blank',
      'aria-label': 'Email'
    }, {
      'icon': 'i-simple-icons-github',
      'to': 'https://github.com/maulana-tech',
      'target': '_blank',
      'aria-label': 'GitHub'
    }]
  },
  toc: {
    title: 'Table of Contents',
    bottom: {
      title: 'Connect',
      edit: 'https://github.com/lana-techn/lana-docs/edit/main/content',
      links: [{
        icon: 'i-lucide-link',
        label: 'Linktree',
        to: 'https://linktr.ee/maulanafirdaussyah',
        target: '_blank'
      }, {
        icon: 'i-simple-icons-linkedin',
        label: 'LinkedIn',
        to: 'https://www.linkedin.com/in/muhammad-maulana-firdaussyah-083362293',
        target: '_blank'
      }]
    }
  }
})
