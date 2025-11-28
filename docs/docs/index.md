# 操作说明

## 项目结构

```
├── docs/                 # 文档目录
│   ├── introduction/     # 介绍栏目
│   ├── technology/       # 技术栏目
│   ├── growth/           # 成长故事栏目
│   ├── tech-notes/       # 技术记录栏目
│   ├── life/             # 生活随笔栏目
│   ├── ai/               # AI探索栏目
│   ├── docs/             # 文档栏目
│   └── _meta.json        # 全局导航配置
├── rspress.config.ts     # Rspress配置文件
├── package.json          # 项目依赖配置
└── tsconfig.json         # TypeScript配置文件
```

## 开发环境

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

启动后，访问 `http://localhost:4173` 即可查看博客。

### 构建生产版本

```bash
npm run build
```

构建完成后，生成的静态文件将位于 `dist` 目录。

### 预览生产版本

```bash
npm run preview
```

预览构建后的静态文件。

## 目录结构说明

- **docs/**：存放所有文档内容
- **docs/[category]/\_meta.json**：每个栏目的导航配置
- **docs/[category]/index.md**：每个栏目的主页
- **docs/[category]/[subpage].md**：每个栏目的子页面
- **rspress.config.ts**：配置博客的标题、主题、国际化等

## 基本操作

### 修改博客标题

编辑 `rspress.config.ts` 文件中的 `title` 字段：

```typescript
export default defineConfig({
  title: '你的博客标题',
  // ...
});
```

### 修改导航菜单

编辑 `docs/_meta.json` 文件，修改或添加导航项：

```json
[
  {
    "text": "导航名称",
    "link": "/path/",
    "activeMatch": "/path/"
  }
  // ...
]
```

### 修改栏目内容

直接编辑对应栏目下的 Markdown 文件即可。

## 快捷键

- **Ctrl+K**：打开搜索
- **Ctrl+/**：切换主题
- **Esc**：关闭搜索或侧边栏

## 常见问题

### 开发服务器无法启动

检查是否有其他进程占用了 4173 端口，或尝试修改端口：

```bash
npm run dev -- --port 3000
```

### 构建失败

检查是否有语法错误或依赖问题，尝试重新安装依赖：

```bash
rm -rf node_modules
npm install
```

### 页面无法访问

检查文件路径和链接是否正确，确保每个页面都有对应的 Markdown 文件和导航配置。
