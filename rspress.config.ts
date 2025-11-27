import * as path from 'node:path';
import { defineConfig } from 'rspress/config';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: 'Hay Blog',
  description: 'Personal blog about technology, life and AI',
  icon: '/rspress-icon.png',
  logo: {
    light: '/rspress-light-logo.png',
    dark: '/rspress-dark-logo.png',
  },
  // 移除 plugins: [] 配置，使用默认插件
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
