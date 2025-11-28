# Hay Blog 使用说明

## 项目简介

Hay Blog 是一个基于 React + Rspress + Antd 构建的个人博客系统，用于记录技术、生活随笔、AI 探索等内容。

## 快速开始

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

启动后，访问 `http://localhost:3000` 即可查看博客。

### 构建生产版本

```bash
npm run build
```

构建完成后，生成的静态文件将位于 `doc_build` 目录。

### 预览生产版本

```bash
npm run preview
```

预览构建后的静态文件。

## 目录结构

```
├── docs/                 # 文档目录
│   ├── introduction/     # 介绍栏目
│   ├── technology/       # 技术栏目
│   ├── growth/           # 成长故事栏目
│   ├── tech-notes/       # 技术记录栏目
│   ├── life/             # 生活随笔栏目
│   ├── ai/               # AI探索栏目
│   ├── docs/             # 文档栏目
│   ├── public/           # 静态资源目录
│   └── _meta.json        # 全局导航配置
├── components/           # React组件目录（可选）
├── .github/              # GitHub Actions配置
│   └── workflows/        # CI/CD工作流
├── package.json          # 项目依赖配置
├── rspress.config.ts     # Rspress配置文件
├── tsconfig.json         # TypeScript配置文件
└── USAGE.md              # 使用说明文档
```

## 基本操作

### 修改博客标题

编辑 `rspress.config.ts` 文件中的 `title` 字段：

```typescript
export default defineConfig({
  title: '你的博客标题',
  // ...其他配置
});
```

### 修改导航菜单

编辑 `docs/_meta.json` 文件，修改或添加导航项：

```json
[
  {
    "text": "导航名称",
    "link": "/path/"
  }
  // 其他导航项
]
```

### 修改页面内容

直接编辑对应栏目下的 Markdown 文件即可，例如：

- 介绍栏目：`docs/introduction/index.md`
- 技术栏目：`docs/technology/index.md`
- 成长故事栏目：`docs/growth/index.md`
- 技术记录栏目：`docs/tech-notes/index.md`
- 生活随笔栏目：`docs/life/index.md`
- AI探索栏目：`docs/ai/index.md`
- 文档栏目：`docs/docs/index.md`

## 添加新内容

### 添加新页面

1. 在对应栏目目录下创建新的 Markdown 文件，例如 `docs/technology/new-page.md`

2. 编辑文件内容：

```markdown
# 新页面标题

## 章节1

内容...

## 章节2

内容...
```

3. 在 `docs/_meta.json` 文件中添加导航项（可选）：

```json
[
  // 现有导航项
  {
    "text": "新页面",
    "link": "/technology/new-page/"
  }
]
```

### 添加 React 组件

1. 在项目根目录下创建 `components` 目录（如果不存在）

2. 创建组件文件，例如 `components/Calendar.tsx`：

```typescript
import React from 'react';
import { Calendar as AntdCalendar } from 'antd';

export default function Calendar() {
  return <AntdCalendar />;
}
```

3. 在 Markdown 文件中使用组件：

```markdown
# 页面标题

## 使用 React 组件

import Calendar from '../../components/Calendar';

<Calendar />

## 其他内容

内容...
```

### 添加图片

1. 将图片上传到 `docs/public` 目录，例如 `docs/public/images/photo.jpg`

2. 在 Markdown 中引用图片：

```markdown
![图片描述](/images/photo.jpg)
```

## 主题配置

### 修改主题颜色

编辑 `rspress.config.ts` 文件，添加或修改 `themeConfig` 字段：

```typescript
export default defineConfig({
  themeConfig: {
    primaryColor: '#1890ff', // 设置主题色
    // ...其他主题配置
  },
  // ...其他配置
});
```

### 修改社交媒体链接

编辑 `rspress.config.ts` 文件中的 `socialLinks` 字段：

```typescript
export default defineConfig({
  themeConfig: {
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/your-username',
      },
      {
        icon: 'twitter',
        mode: 'link',
        content: 'https://twitter.com/your-username',
      },
      // 其他社交媒体链接
    ],
  },
  // ...其他配置
});
```

## 发布指南

### 发布到 GitHub Pages

1. 在 GitHub 上创建一个新的仓库

2. 创建 `.github/workflows/deploy.yml` 文件，添加以下内容：

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'

      - name: Install dependencies
        run: npm install

      - name: Build
        run: npm run build

      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./doc_build
```

3. 修改 `rspress.config.ts` 文件，添加 `base` 配置：

```typescript
export default defineConfig({
  base: '', // 如果是 username.github.io 格式的仓库，base 可以设置为空字符串
  // 如果是其他仓库名，base 应该设置为仓库名，例如 '/your-repo-name/'
  // ...其他配置
});
```

4. 推送代码到 GitHub：

```bash
# 初始化 git 仓库（如果尚未初始化）
git init

# 添加远程仓库
git remote add origin https://github.com/your-username/your-repo-name.git

# 添加文件
git add .

# 提交更改
git commit -m "Initial commit"

# 推送到远程仓库
git push -u origin main
```

5. 在 GitHub 仓库页面的 "Settings" → "Pages" 中，选择 "gh-pages" 分支和 "/ (root)" 目录，点击 "Save"

6. 等待 GitHub Actions 完成部署，访问 `https://your-username.github.io` 或 `https://your-username.github.io/your-repo-name` 查看博客

### 发布到其他平台

#### Netlify

1. 登录 Netlify，点击 "Add new site" → "Import an existing project"
2. 选择 GitHub 并授权访问你的仓库
3. 配置构建设置：
   - Build command: `npm run build`
   - Publish directory: `doc_build`
4. 点击 "Deploy site"

#### Vercel

1. 登录 Vercel，点击 "New Project"
2. 选择 "Import Git Repository" 并授权访问你的仓库
3. 确认构建设置：
   - Build Command: `npm run build`
   - Output Directory: `doc_build`
4. 点击 "Deploy"

## 常见问题

### 开发服务器无法启动

- 检查是否有其他进程占用了 3000 端口
- 尝试修改端口：`npm run dev -- --port 4000`
- 检查依赖是否安装完整：`rm -rf node_modules && npm install`

### 构建失败

- 检查是否有语法错误
- 检查依赖是否安装完整
- 查看构建日志，根据错误信息进行修复

### 页面无法访问

- 检查文件路径和链接是否正确
- 确保每个页面都有对应的 Markdown 文件
- 检查导航配置是否正确

### 资源加载失败

- 检查资源路径是否正确
- 确保静态资源已正确上传到 `docs/public` 目录

## 自定义配置

### Rspress 配置

详细的 Rspress 配置请参考 [Rspress 文档](https://rspress.dev/)

### Antd 配置

可以在组件中直接使用 Antd 组件，无需额外配置。详细的 Antd 组件文档请参考 [Antd 文档](https://ant.design/)

## 后续维护

### 定期更新依赖

```bash
npm update
```

### 添加新栏目

1. 在 `docs` 目录下创建新的栏目目录，例如 `docs/new-category/`
2. 在新栏目目录下创建 `index.md` 文件，编写栏目内容
3. 在 `docs/_meta.json` 文件中添加导航项

### 添加新页面

1. 在对应栏目目录下创建新的 Markdown 文件
2. 编写页面内容
3. 在 `docs/_meta.json` 文件中添加导航项（可选）

## 贡献指南

欢迎提交 Issue 和 Pull Request 来改进 Hay Blog。

## 许可证

MIT License
