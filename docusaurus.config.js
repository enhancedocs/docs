// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'EnhanceDocs',
  tagline: 'The AI-powered successor to Angolia',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.enhancedocs.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'enhancedocs', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo. Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/enhancedocs/docs/tree/main',
          remarkPlugins: [
            [require('@docusaurus/remark-plugin-npm2yarn'), { sync: true }]
          ]
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/enhancedocs-social-card.jpg',
      navbar: {
        logo: {
          alt: 'EnhanceDocs Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            href: 'https://twitter.com/enhancedocs',
            label: 'Twitter',
            position: 'right',
          },
          {
            href: 'https://discord.com/invite/AUDa3KZavw',
            label: 'Discord',
            position: 'right',
          },
          {
            href: 'https://github.com/enhancedocs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Getting Started',
                to: '/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.com/invite/AUDa3KZavw',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/enhancedocs',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Website',
                href: 'https://www.enhancedocs.com/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/enhancedocs',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} EnhanceDocs. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
