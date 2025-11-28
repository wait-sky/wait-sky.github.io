# 个人博客创建与发布全流程指南

## 1. 项目初始化

### 1.1 选择技术栈

我选择了以下技术栈来构建个人博客：

- **React**：用于构建用户界面
- **Rspress**：基于 Rsbuild 和 MDX 的静态站点生成器
- **Ant Design**：企业级 UI 组件库
- **TypeScript**：提供类型安全

### 1.2 初始化项目

使用 Rspress 官方提供的脚手架初始化项目：

```bash
npm create rspress@latest . -- --template docs
```

安装依赖：

```bash
npm install
npm install antd
```

## 2. 博客结构设计

### 2.1 栏目规划

根据需求，我设计了以下栏目：

- **介绍**：关于我和博客的介绍
- **技术**：前端技术、后端技术、AI 技术
- **成长故事**：职业发展、学习历程、感悟分享
- **技术记录**：前端笔记、后端笔记、AI 笔记、工具使用
- **生活随笔**：生活感悟、旅行记录、阅读分享、摄影作品
- **AI 探索**：AI 入门、大模型技术、AI 应用、AI 伦理
- **文档**：操作说明、修改说明、添加说明、发布指南

### 2.2 目录结构

```
docs/
├── introduction/     # 介绍栏目
├── technology/       # 技术栏目
├── growth/           # 成长故事栏目
├── tech-notes/       # 技术记录栏目
├── life/             # 生活随笔栏目
├── ai/               # AI探索栏目
├── docs/             # 文档栏目
├── public/           # 静态资源目录
└── _meta.json        # 全局导航配置
```

## 3. 内容编写

### 3.1 编写 Markdown 内容

为每个栏目创建了基本的 Markdown 内容，包括：

- 介绍栏目的 "关于我" 和 "博客介绍"
- 技术栏目的 "前端技术"、"后端技术" 和 "AI 技术"
- 成长故事栏目的 "职业发展"、"学习历程" 和 "感悟分享"
- 技术记录栏目的 "前端笔记"、"后端笔记"、"AI 笔记" 和 "工具使用"
- 生活随笔栏目的 "生活感悟" 和 "旅行记录"
- AI 探索栏目的 "AI 入门"
- 文档栏目的 "操作说明"、"修改说明"、"添加说明" 和 "发布指南"

### 3.2 添加 React 组件

可以在 Markdown 中直接使用 React 组件，例如：

```markdown
import { Calendar } from 'antd';

<Calendar />
```

## 4. 博客配置与优化

### 4.1 主题配置

在 `rspress.config.ts` 文件中配置博客的主题：

```typescript
export default defineConfig({
  title: 'Hay Blog',
  description: 'Personal blog about technology, life and AI',
  icon: '/rspress-icon.png',
  logo: {
    light: '/rspress-light-logo.png',
    dark: '/rspress-dark-logo.png',
  },
  themeConfig: {
    primaryColor: '#1890ff',
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
```

### 4.2 导航配置

在 `docs/_meta.json` 文件中配置全局导航：

```json
[
  {
    "text": "介绍",
    "link": "/introduction/"
  },
  {
    "text": "技术",
    "link": "/technology/"
  },
  {
    "text": "成长故事",
    "link": "/growth/"
  },
  {
    "text": "技术记录",
    "link": "/tech-notes/"
  },
  {
    "text": "生活随笔",
    "link": "/life/"
  },
  {
    "text": "AI探索",
    "link": "/ai/"
  },
  {
    "text": "文档",
    "link": "/docs/"
  }
]
```

### 4.3 性能优化

- 使用 Rspress 的自动代码分割功能
- 优化图片资源，使用适当的尺寸和格式
- 启用 Gzip 压缩
- 使用 CDN 加速静态资源

## 5. 本地开发与预览

### 5.1 启动开发服务器

```bash
npm run dev
```

启动后，访问 `http://localhost:3000` 即可查看博客。

### 5.2 构建生产版本

```bash
npm run build
```

构建完成后，生成的静态文件将位于 `doc_build` 目录。

### 5.3 预览生产版本

```bash
npm run preview
```

预览构建后的静态文件。

## 6. 线上发布

### 6.1 发布到 GitHub Pages

#### 6.1.1 配置 GitHub Actions

创建 `.github/workflows/deploy.yml` 文件：

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

#### 6.1.2 配置 Rspress

修改 `rspress.config.ts` 文件，添加 `base` 配置：

```typescript
export default defineConfig({
  base: '', // 如果是 username.github.io 格式的仓库，base 可以设置为空字符串
  // ...其他配置
});
```

#### 6.1.3 推送代码

```bash
git init
git remote add origin https://github.com/your-username/your-repo-name.git
git add .
git commit -m "Initial commit"
git push -u origin main
```

#### 6.1.4 配置 GitHub Pages

1. 进入 GitHub 仓库页面
2. 点击 "Settings" 选项卡
3. 在左侧菜单中选择 "Pages"
4. 在 "Source" 部分，选择 "Deploy from a branch"
5. 在 "Branch" 部分，选择 "gh-pages" 分支和 "/ (root)" 目录
6. 点击 "Save"

#### 6.1.5 访问博客

部署完成后，访问 `https://your-username.github.io` 或 `https://your-username.github.io/your-repo-name` 查看博客。

### 6.2 发布到其他平台

#### 6.2.1 Netlify

1. 登录 Netlify，点击 "Add new site" → "Import an existing project"
2. 选择 GitHub 并授权访问你的仓库
3. 配置构建设置：
   - Build command: `npm run build`
   - Publish directory: `doc_build`
4. 点击 "Deploy site"

#### 6.2.2 Vercel

1. 登录 Vercel，点击 "New Project"
2. 选择 "Import Git Repository" 并授权访问你的仓库
3. 确认构建设置：
   - Build Command: `npm run build`
   - Output Directory: `doc_build`
4. 点击 "Deploy"

## 7. 博客维护与更新

### 7.1 添加新内容

1. 在对应栏目目录下创建新的 Markdown 文件
2. 编写内容
3. 在 `docs/_meta.json` 文件中添加导航项（可选）
4. 推送代码到 GitHub，自动部署

### 7.2 更新现有内容

1. 编辑对应的 Markdown 文件
2. 推送代码到 GitHub，自动部署

### 7.3 定期优化

- 更新依赖：`npm update`
- 优化图片资源
- 改进 SEO
- 添加新功能和组件

## 8. 总结

通过以上步骤，我成功创建了一个基于 React + Rspress + Antd 的个人博客，并将其部署到了 GitHub Pages。整个过程包括：

1. 项目初始化和技术栈选择
2. 博客结构设计和栏目规划
3. 内容编写和 React 组件添加
4. 博客配置与优化
5. 本地开发与预览
6. 线上发布到 GitHub Pages
7. 博客维护与更新

这个博客可以用于记录技术学习、成长经历、生活感悟和 AI 探索等内容，具有良好的扩展性和可维护性。

## 9. 线上访问

博客已成功部署到 GitHub Pages，可以通过以下地址访问：

- 主地址：https://wait-sky.github.io
- 备用地址：https://your-username.github.io/your-repo-name

## 10. 后续计划

1. 添加更多内容，丰富博客
2. 实现国际化支持
3. 添加评论功能
4. 优化 SEO
5. 添加阅读统计
6. 实现暗色模式切换

---

这篇文章详细介绍了个人博客的创建、编写、优化、访问以及发布线上流程，希望对想要创建个人博客的朋友有所帮助。
