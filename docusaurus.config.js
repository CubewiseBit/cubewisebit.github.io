// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

async function createConfig() {
  const mdxMermaid = await import('mdx-mermaid');

  /** @type {import('@docusaurus/types').Config} */
  return {
    title: 'CubeBit',
    tagline: 'CubeBit Composable Applications',
    url: 'https://cubewisebit.github.io',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
  
    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'cubewisebit', // Usually your GitHub org/user name.
    projectName: 'cubewisebit.github.io', // Usually your repo name.
  
    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
      defaultLocale: 'zh-Hans',
      locales: ['zh-Hans'],
    },
  
    presets: [
      [
        'classic',
        /** @type {import('@docusaurus/preset-classic').Options} */
        ({
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          docs: {
            sidebarPath: require.resolve('./sidebars.ts'),  
            remarkPlugins: [mdxMermaid.default],
            // editUrl:
            //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // blog: {
          //   showReadingTime: true,
          //   editUrl:
          //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // },
          theme: {
            customCss: [require.resolve('./src/styles/custom.scss')],
          },
        }),
      ],
    ],
  
    themes: [
      [
        require.resolve("@easyops-cn/docusaurus-search-local"),
        {
          // `hashed` is recommended as long-term-cache of index file is possible.
          hashed: false,
          // For Docs using Chinese, The `language` is recommended to set to:
          language: ["zh", "en", ],
        },
      ],
    ],
  
    themeConfig:
      /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        image: 'img/logo-without-name.png',
        navbar: {
          style: 'dark',
          hideOnScroll: true,
          title: 'CubeBit',
          logo: {
            alt: 'CubeBit',
            src: 'images/logo/logo-without-name.png',
          },
          /** https://docusaurus.io/zh-CN/docs/api/themes/configuration#navbar-items */
          items: [
            {
              type: 'dropdown',
              position: 'left',
              label: 'CubeBit Booster',
              items: [
                {
                  type: 'doc',
                  docId: 'cubebit-booster/quickstart',
                  label: 'CubeBit Booster Api',
                },
                {
                  type: 'doc',
                  docId: 'cubebit-booster/quickstart',
                  label: 'CubeBit Booster Core',
                },
                {
                  type: 'doc',
                  docId: 'cubebit-booster/quickstart',
                  html: 'CubeBit Booster Booster <i class="fa-solid fa-fire" style="color: red"></i>',
                },
              ]
            },
            {
              type: 'dropdown',
              position: 'left',
              label: 'CubeBit Composable',
              items: [
                {
                  type: 'doc',
                  docId: 'cubebit-booster/quickstart',
                  label: 'CubeBit Gateway',
                },
                {
                  type: 'doc',
                  docId: 'cubebit-booster/quickstart',
                  label: 'CubeBit Auth',
                },
                {
                  type: 'doc',
                  docId: 'cubebit-booster/quickstart',
                  label: 'CubeBit Formable',
                },
                {
                  type: 'doc',
                  docId: 'cubebit-booster/quickstart',
                  label: 'CubeBit Flowable',
                },
                {
                  type: 'doc',
                  docId: 'cubebit-booster/quickstart',
                  label: 'CubeBit Message',
                },
              ]
            },
            {to: '/blog', label: '博客', position: 'right'},
            {to: '/about', label: '关于我们', position: 'right'},
            {
              href: 'https://github.com/cubewisebit',
              html: 'GitHub <i class="fa-brands fa-square-github"></i>',
              position: 'right',
            },
            {
              type: 'search',
              position: 'right',
            },
          ],
        },
        footer: {
          style: 'dark',
          links: [
            {
              title: 'Docs',
              items: [
                {
                  label: 'Tutorial',
                  to: '/docs/intro',
                },
              ],
            },
            {
              title: 'Community',
              items: [
                {
                  label: 'Stack Overflow',
                  href: 'https://stackoverflow.com/questions/tagged/docusaurus',
                },
                {
                  label: 'Discord',
                  href: 'https://discordapp.com/invite/docusaurus',
                },
                {
                  label: 'Twitter',
                  href: 'https://twitter.com/docusaurus',
                },
              ],
            },
            {
              title: 'More',
              items: [
                {
                  label: 'Blog',
                  to: '/blog',
                },
                {
                  label: 'GitHub',
                  href: 'https://github.com/facebook/docusaurus',
                },
              ],
            },
          ],
          copyright: `Copyright © ${new Date().getFullYear()} CubeBit. Built with Docusaurus.`,
        },
        docs: {
          sidebar: {
            hideable: false,
          },
        },
        prism: {
          theme: require('prism-react-renderer/themes/github'),
          darkTheme: darkCodeTheme,
  
          magicComments: [
            // 要记得复制默认的高亮类！
            {
              className: 'theme-code-block-highlighted-line',
              line: 'highlight-next-line',
              block: {start: 'highlight-start', end: 'highlight-end'},
            },
            {
              className: 'code-block-error-line',
              line: 'highlight-next-line-error',
            },
          ],
  
          /** https://prismjs.com/#supported-languages */
          /** https://github.com/FormidableLabs/prism-react-renderer/blob/master/src/vendor/prism/includeLangs.js */
          additionalLanguages: [
            'java', 'kotlin', 'go', 'python', 'lua',
            'json', 'json5',
            'sql',
            'mermaid',
          ]
        },
        colorMode: {
          defaultMode: 'light',
          disableSwitch: true,
        },
      }),
      plugins: ['docusaurus-plugin-sass'],
  };
}

module.exports = createConfig;
