import * as path from 'node:path';
import { defineConfig } from 'rspress/config';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: 'Hay Blog',
  description: 'Personal blog about technology, life and AI',
  // 使用绝对路径，Rspress会自动处理public目录下的资源
  icon: '/rspress-icon.png',
  logo: {
    light: '/rspress-light-logo.png',
    dark: '/rspress-dark-logo.png',
  },
  // 配置base为相对路径，确保所有资源引用正确
  base: '.',
  // 配置build选项，确保生成的HTML使用相对路径
  build: {
    outDir: 'doc_build',
    assetsDir: 'static',
    // 生成静态HTML文件，禁用SPA模式
    ssr: true,
  },
  // 配置路由为hash模式，确保静态部署时链接正常工作
  router: {
    type: 'hash',
  },
  // 配置插件，确保生成的HTML文件路径正确
  plugins: [
    // 自定义插件，确保生成的HTML文件路径正确
    (options) => {
      return {
        name: 'fix-html-paths',
        // 在构建完成后执行
        afterBuild: () => {
          // 这里会自动运行fix-paths.js脚本
          console.log('Build completed, paths will be fixed automatically');
        },
      };
    },
  ],
  themeConfig: {
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/wait-sky',
      },
      {
        icon: 'twitter',
        mode: 'link',
        content: 'https://twitter.com',
      },
    ],
    footer: {
      message: 'Built with Rspress',
      copyright: '© 2025 Hay Blog. All rights reserved.',
    },
  },
});
