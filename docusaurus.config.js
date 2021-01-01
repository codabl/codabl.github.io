const path = require('path');

module.exports = {
  title: 'Codabl',
  tagline: 'A lightweight and ultra-fast tool for building observability pipelines',
  url: 'https://codabl.github.io',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'codabl',
  projectName: 'codabl.github.io',
  customFields: {
    metadata: require('./metadata'),
  },
  themeConfig: {
    navbar: {
      hideOnScroll: true,
      logo: {
        alt: 'Codabl',
        src: 'img/logo-dark.svg'
      },
      items: [
        {to: 'components/', label: 'Components', position: 'left'},
        {to: 'guides/', label: 'Guides', position: 'left'},
        {to: 'docs/', label: 'Docs', position: 'left'},
        {to: 'blog/', label: 'Blog', position: 'left'},
        {to: 'highlights/', label: 'Highlights', position: 'right'},
        {to: 'releases/', label: 'Download', position: 'right'},
        {to: 'community/', label: 'Community', position: 'right'},
        {href: 'https://github.com/codabl', label: "GitHub", position: 'right'},
      ],
    },
    image: 'img/codabl-open-graph.png',
    prism: {
      theme: require('prism-react-renderer/themes/github'),
      darkTheme: require('prism-react-renderer/themes/dracula'),
    },
    footer: {
      links: [
        {
          title: 'About',
          items: [
            {
              label: 'What is Vector?',
              to: 'docs/about/what-is-vector/',
            },
            {
              label: 'The Team',
              to: 'community/#team',
            },
            {
              label: 'Contact Us',
              to: 'contact/',
            },
            {
              label: 'Press',
              to: 'press/',
            },
          ],
        },
        {
          title: 'Components',
          items: [
            {
              label: 'Sources',
              to: 'docs/reference/sources/',
            },
            {
              label: 'Transforms',
              to: 'docs/reference/transforms/',
            },
            {
              label: 'Sinks',
              to: 'docs/reference/sinks/',
            },
          ],
        },
        {
          title: 'Setup',
          items: [
            {
              label: 'Install',
              to: 'docs/setup/installation/',
            },
            {
              label: 'Deployment',
              to: 'docs/setup/deployment/',
            },
            {
              label: 'Configuration',
              to: 'docs/setup/configuration/',
            },
            {
              label: 'Administration',
              to: 'docs/administration/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Chat',
              to: 'https://chat.vector.dev',
            },
            {
              label: 'Github',
              to: 'https://github.com/timberio/vector',
            },
            {
              label: 'Twitter',
              to: 'https://twitter.com/vectordotdev',
            },
            {
              label: 'Mailing List',
              to: 'mailing_list/',
            },
            {
              label: 'Blog',
              to: 'blog/',
            },
          ],
        },
      ],
      logo: {
        alt: 'Timber.io',
        src: '/img/timber-logo.svg',
        href: 'https://timber.io/',
      },
      copyright: `Copyright © ${new Date().getFullYear()} Timber, Inc.`,
    },
    algolia: {
      apiKey: '2356c5cb76b57b43624c6450b0a031cc',
      indexName: 'timberio_vector',
      algoliaOptions: {}, // Optional, if provided by Algolia
    },
  },
  presets: [],
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        editUrl: 'https://github.com/timberio/vector/edit/master/website/',
        sidebarPath: require.resolve('./sidebars.js')
      }
    ],
    [
      '@docusaurus/plugin-content-blog',
      {
        feedOptions: {
          type: 'all',
          copyright: `Copyright © ${new Date().getFullYear()} Codabl, Inc.`,
        }
      }
    ],
    path.resolve(__dirname, './plugins/guides'),
    path.resolve(__dirname, './plugins/highlights'),
    ['@docusaurus/plugin-content-pages', {}],
    path.resolve(__dirname, './plugins/releases'),
    [path.resolve(__dirname, './plugins/sitemap'), {}]
  ],
  scripts: [],
  stylesheets: [
    'https://use.typekit.net/ckb0rsm.css',
    'https://at-ui.github.io/feather-font/css/iconfont.css'
  ],
  themes: [
    [
      '@docusaurus/theme-classic',
      {
        customCss: require.resolve('./src/css/custom.css')
      }
    ],
    '@docusaurus/theme-search-algolia'
  ]
};
