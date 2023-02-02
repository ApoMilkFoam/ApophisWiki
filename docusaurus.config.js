// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
module.exports =  {

  title: 'Apophis WiKi百科',
  tagline: '一个关于 科技与未来 的MINECRAFT社区',
  url: 'https://baike.apophis.club',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  themes: [
    [
      "@easyops-cn/docusaurus-search-local",
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        hashed: true,
        language: ["zh"],
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
      }),
    ],
  ],

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "zh-Hans",
    locales: ["zh-Hans"],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {

          showReadingTime: false,
          blogSidebarCount: 0 ,
        },
        
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Apophis',
        logo: {
          alt: 'LOGO',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: '/category/常见问题',
            position: 'left',
            label: '百科目录',
          },
          {
            to: '/blog/background', 
            label: '背景故事', 
            position: 'left'
          },
          {
            href: 'http://www.apophis.club/index.html',
            label: '官网',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        // links: [
        //   {
        //     title: '技术支持',
        //     items: [
        //       {
        //         label: 'Apophis工作室',
        //         href: 'http://www.apophis.club',
        //       },
        //       {
        //         label: 'VACsystem协议规则',
        //         href: 'http://www.apophis.club/rules.html',
        //       },
        //       {
        //         label: 'Ray_Hughes [枫溪]',
        //         href: 'https://github.com/FxRayHughes',
        //       },
        //       {
        //         label: 'Bkm016 [坏黑]',
        //         href: 'https://github.com/Bkm016?tab=repositories',
        //       },
              
        //     ],
        //   },
        //   {
        //     title: '相关链接',
        //     items: [
        //       {
        //         label: '官方网站',
        //         href: 'http://www.apophis.club/index.html',
        //       },
        //       {
        //         label: '开黑啦(KOOK)',
        //         href: 'https://kook.top/4CVK47',
        //       },
        //       {
        //         label: '官方QQ交流群',
        //         href: 'https://jq.qq.com/?_wv=1027&k=2J3fRH6U',
        //       },
        //       {
        //         label: 'MCBBS论坛',
        //         href: 'https://www.mcbbs.net/',
        //       },
        //     ],
        //   },
        //   {
        //     title: '更多',
        //     items: [
        //       {
        //         label: '文档源代码',
        //         href: 'https://github.com/facebook/docusaurus',
        //       },
        //       {
        //         label: '隐私政策',
        //         href: 'https://github.com/AopMilkFoam',
        //       },
        //     ],
        //   },
        // ],
        copyright: `Copyright © 2022 - ${new Date().getFullYear()} Apophis All Rights Reserved`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

