import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Xin Admin',
  tagline: '一套完整的前后端解决方案，助力开发者快速构建企业级应用',
  favicon: 'https://file.xinadmin.cn/file/favicons.ico',
  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://xin-admin.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'xin-admin', // Usually your GitHub org/user name.
  projectName: 'xin-admin.github.io', // Usually your repo name.
  deploymentBranch: 'main',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh',
    locales: ['zh', 'en'],
    path: 'i18n',
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: false,
      },
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        path: 'docs',
        routeBasePath: 'introduce',
        sidebarPath: 'sidebars.ts',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'ui',
        path: 'docs-ui',
        routeBasePath: 'ui',
        sidebarPath: 'sidebars.ts',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'laravel',
        path: 'docs-laravel',
        routeBasePath: 'laravel',
        sidebarPath: 'sidebars.ts',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'thinkphp',
        path: 'docs-thinkphp',
        routeBasePath: 'thinkphp',
        sidebarPath: 'sidebars.ts',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'taro',
        path: 'docs-taro',
        routeBasePath: 'taro',
        sidebarPath: 'sidebars.ts',
      },
    ],
  ],
  themeConfig: {
    // Replace with your project's social card
    // image: 'img/docusaurus-social-card.jpg',
    algolia: {
      appId: '1RS3CBSQ8Q',
      apiKey: '93b7a984e61961af3f17938cd617ec88',
      indexName: 'prod_xinadmin',
      contextualSearch: true,
      // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
      externalUrlRegex: 'external\\.com|domain\\.com',
      // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
      replaceSearchResultPathname: {
        from: '/docs/', // or as RegExp: /\/docs\//
        to: '/',
      },
      // Optional: Algolia search parameters
      searchParameters: {},
      // Optional: path for search page that enabled by default (`false` to disable it)
      searchPagePath: 'search',
      // Optional: whether the insights feature is enabled or not on Docsearch (`false` by default)
      insights: false,
    },
    navbar: {
      title: 'Xin Admin',
      logo: {
        alt: 'Xin Admin Logo',
        src: 'https://file.xinadmin.cn/file/favicons.ico',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'introduceSidebar',
          position: 'left',
          label: '介绍',
        },
        {
          type: 'docSidebar',
          docsPluginId: 'ui',
          sidebarId: 'introduceSidebar',
          position: 'left',
          label: 'UI 文档',
        },
        {
          type: 'docSidebar',
          docsPluginId: 'laravel',
          sidebarId: 'introduceSidebar',
          position: 'left',
          label: 'Laravel 应用',
        },
        {
          type: 'docSidebar',
          docsPluginId: 'thinkphp',
          sidebarId: 'introduceSidebar',
          position: 'left',
          label: 'ThinkPHP 应用',
        },
        {
          type: 'docSidebar',
          docsPluginId: 'taro',
          sidebarId: 'introduceSidebar',
          position: 'left',
          label: 'Taro 应用',
        },
        {
          type: 'docsVersionDropdown',
          docsPluginId: 'ui',
          position: 'right',
        },
        {href: 'https://bbs.xinadmin.cn', label: '论坛', position: 'right'},
        {href: 'https://github.com/xin-admin', label: 'GitHub', position: 'right'},
        {type: 'localeDropdown', position: 'right'},
        {type: 'search', position: 'right'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '文档',
          items: [
            {
              label: '项目介绍',
              to: '/introduce/intro',
            },
            {
              label: 'XinAdmin 文档',
              to: '/ui/intro',
            },
            {
              label: 'Laravel 版文档 ',
              to: '/laravel/intro',
            },
            {
              label: 'ThinkPHP 版文档',
              to: '/thinkphp/intro',
            },
            {
              label: 'Taro 项目文档',
              to: '/taro/intro',
            },
          ],
        },
        {
          title: '相关链接',
          items: [
            {
              label: 'Ant Design',
              href: 'https://ant.design',
              logo: {
                alt: 'Ant Design Logo',
                src: 'img/logo.svg',
                target: '_self',
                width: 32,
                height: 32,
              },
            },
            {
              label: 'Laravel',
              href: 'https://laravel.com',
            },
            {
              label: 'ThinkPHP',
              href: 'https://www.thinkphp.cn',
            },
            {
              label: 'Taro',
              href: 'https://docs.taro.zone',
            },
            {
              label: 'React',
              href: 'https://react.dev',
            },
          ],
        },
        {
          title: '更多',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/xin-admin',
            },
            {
              label: 'Gitee',
              href: 'https://gitee.cn/xin-admin',
            },
            {
              label: 'XinAdmin论坛',
              href: 'https://bbs.xinadmin.cn',
            },
            {
              label: '小刘同学',
              href: 'https://xineny.cn',
            },
          ],
        },
        {
          title: '法律',
          items: [
            {
              label: '隐私',
              href: 'https://bbs.xinadmin.cn',
            },
            {
              label: '条款',
              href: 'https://bbs.xinadmin.cn',
            },
            {
              label: 'Cookie 政策',
              href: 'https://bbs.xinadmin.cn',
            },
            {
              label: '开源协议',
              href: 'https://bbs.xinadmin.cn',
            },
            {
              label: '公安网备案',
              href: 'https://bbs.xinadmin.cn',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. with 小刘同学. `,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['php'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
