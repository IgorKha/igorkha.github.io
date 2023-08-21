// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'IgorKha',
  tagline: 'My work notes and blog',
  url: 'https://igorkha.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'igorkha', // Usually your GitHub org/user name.
  projectName: 'igorkha', // Usually your repo name.

  presets: [
    [
      // 'classic',
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/IgorKha/igorkha.github.io/tree/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/IgorKha/igorkha.github.io/tree/main/',
          postsPerPage: 3,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
        googleAnalytics: {
          trackingID: 'G-ZTD1QDPJLS',
          anonymizeIP: true,
        },
        gtag: {
          trackingID: 'G-ZTD1QDPJLS',
          anonymizeIP: true,
        },
      }),
    ],
  ],
  plugins: [
    require.resolve('docusaurus-plugin-image-zoom'),
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        docsDir: ['docs',],
        blogDir: ['blog',],
        highlightSearchTermsOnTargetPage: true,
      },
    ],
    // [
    //   require.resolve("docusaurus-plugin-image-zoom")
    // ],

  ],
  
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      zoom: {
        selector: '.markdown :not(em) > img',
        config: {
          // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
          background: {
            light: 'rgb(255, 255, 255)',
            dark: 'rgb(50, 50, 50)'
          }
        }
      },
      colorMode: {
        defaultMode: 'dark',
        // disableSwitch: true,
      },
      navbar: {
        title: '$ cd ~/',
        // logo: {
        //   alt: 'IKha Logo',
        //   src: 'img/logo.svg',
        // },
        hideOnScroll: true,
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
          {
            label: 'Blog',
            // to: '/blog',
            position: 'left',
            items: [
              {
                label: 'Recent posts',
                to: 'blog'
              },
              {
                label: 'Tags',
                to: 'blog/tags'
              },
              {
                label: 'Archive',
                to: 'blog/archive'
              },
            ],
          },
          {
            label: 'Tools',
            position: 'left',
            items: [
              {
                label: '1046 rcw hex to bin',
                to: '/1046hextobin'
              },
            ],
          },
          {
            href: 'https://github.com/IgorKha',
            // label: 'GitHub',
            position: 'right',
            className: "header-github-link",
            "aria-label": "GitHub repository",
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          // {
          //   title: 'Docs',
          //   items: [
          //     {
          //       label: 'Tutorial',
          //       to: '/docs/intro',
          //     },
          //   ],
          // },
          // {
          //   title: 'Community',
          //   items: [
          //     {
          //       label: 'Stack Overflow',
          //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
          //     },
          //     {
          //       label: 'Discord',
          //       href: 'https://discordapp.com/invite/docusaurus',
          //     },
          //     {
          //       label: 'Twitter',
          //       href: 'https://twitter.com/docusaurus',
          //     },
          //   ],
          // },
          // {
          //   title: 'More',
          //   items: [
          //     {
          //       label: 'Blog',
          //       to: '/blog',
          //     },
          //     {
          //       label: 'GitHub',
          //       href: 'https://github.com/facebook/docusaurus',
          //     },
          //   ],
          // },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} IgorKha, Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        magicComments: [
          // Remember to extend the default highlight class name as well!
          {
            className: 'theme-code-block-highlighted-line',
            line: 'highlight-next-line',
            block: { start: 'highlight-start', end: 'highlight-end' },
          },
          {
            className: 'code-block-red-line',
            line: 'highlight-red',
          },
          {
            className: 'code-block-green-line',
            line: 'highlight-green',
          },
          {
            className: 'code-block-yellow-line',
            line: 'highlight-yellow',
          },
        ],
      },
      metadata: [{ name: 'google-site-verification', content: 'aRKqxYi84oM9TZM4-flY0uNq3bOja5YGvEqH_XNpDOY' }],
    }),
};

module.exports = config;
