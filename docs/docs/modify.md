# 修改说明

## 修改现有页面

### 修改页面内容

直接编辑对应页面的 Markdown 文件即可。例如，要修改"关于我"页面，编辑 `docs/introduction/index.md` 文件。

### 修改页面标题

在 Markdown 文件中修改一级标题：

```markdown
# 新的页面标题

## 章节标题

内容...
```

### 修改页面结构

可以通过添加或删除 Markdown 标题（`##`、`###` 等）来修改页面结构。

## 修改导航菜单

### 修改全局导航

编辑 `docs/_meta.json` 文件，修改或重新排序导航项：

```json
[
  {
    "text": "新的导航名称",
    "link": "/path/",
    "activeMatch": "/path/"
  }
  // 其他导航项
]
```

### 修改栏目导航

编辑每个栏目下的 `_meta.json` 文件，例如 `docs/technology/_meta.json`：

```json
[
  {
    "text": "新的子导航名称",
    "link": "/technology/new-page/"
  }
  // 其他子导航项
]
```

## 修改主题配置

### 修改主题颜色

在 `rspress.config.ts` 文件中配置主题颜色：

```typescript
export default defineConfig({
  themeConfig: {
    primaryColor: '#1890ff', // 设置主题色
    // ...
  },
  // ...
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
      // 其他社交媒体链接
    ],
  },
  // ...
});
```

## 修改国际化配置

### 添加新语言

在 `rspress.config.ts` 文件中添加新的语言配置：

```typescript
export default defineConfig({
  locales: [
    {
      lang: 'zh-CN',
      label: '中文',
      title: '中文标题',
      description: '中文描述',
    },
    {
      lang: 'en-US',
      label: 'English',
      title: 'English Title',
      description: 'English Description',
    },
    // 添加新语言
  ],
  // ...
});
```

### 创建多语言页面

在对应栏目下创建语言子目录，例如：

```
docs/introduction/
├── zh-CN/
│   └── index.md
└── en-US/
    └── index.md
```

## 修改页脚信息

编辑 `rspress.config.ts` 文件中的 `footer` 字段：

```typescript
export default defineConfig({
  themeConfig: {
    footer: {
      message: '自定义消息',
      copyright: '自定义版权信息',
    },
  },
  // ...
});
```

## 修改首页布局

### 修改首页内容

编辑 `docs/index.md` 文件，修改首页的内容。

### 添加首页组件

可以在 `docs/index.md` 文件中使用 React 组件，例如：

```markdown
# 首页标题

<MyComponent />

## 章节标题

内容...
```

然后在项目中创建对应的 React 组件。
