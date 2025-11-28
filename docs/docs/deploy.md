# 发布指南

## 发布到 GitHub Pages

### 1. 创建 GitHub 仓库

首先，在 GitHub 上创建一个新的仓库，推荐使用 `username.github.io` 格式的仓库名，这样可以直接通过 `https://username.github.io` 访问。

### 2. 配置项目

在项目根目录下创建或编辑 `.github/workflows/deploy.yml` 文件，添加以下内容：

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
          publish_dir: ./dist
```

### 3. 修改 Rspress 配置

编辑 `rspress.config.ts` 文件，添加 `base` 配置：

```typescript
export default defineConfig({
  // 如果是 username.github.io 格式的仓库，base 可以设置为空字符串
  // 如果是其他仓库名，base 应该设置为仓库名
  base: '', // 或者 '/your-repo-name/'
  // ...其他配置
});
```

### 4. 推送代码

```bash
# 初始化 git 仓库
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

### 5. 配置 GitHub Pages

1. 进入 GitHub 仓库页面
2. 点击 "Settings" 选项卡
3. 在左侧菜单中选择 "Pages"
4. 在 "Source" 部分，选择 "Deploy from a branch"
5. 在 "Branch" 部分，选择 "gh-pages" 分支和 "/ (root)" 目录
6. 点击 "Save"

GitHub Actions 会自动构建和部署你的博客。部署完成后，你可以通过 `https://your-username.github.io` 或 `https://your-username.github.io/your-repo-name` 访问你的博客。

## 发布到 Netlify

### 1. 注册 Netlify 账号

访问 [Netlify](https://www.netlify.com/) 并注册一个账号。

### 2. 连接 GitHub 仓库

1. 登录 Netlify 后，点击 "Add new site" → "Import an existing project"
2. 选择 "GitHub" 并授权 Netlify 访问你的 GitHub 账号
3. 选择你的博客仓库

### 3. 配置构建设置

- **Build command**: `npm run build`
- **Publish directory**: `dist`
- 点击 "Deploy site"

### 4. 自定义域名（可选）

部署完成后，你可以在 Netlify 控制台中设置自定义域名。

## 发布到 Vercel

### 1. 注册 Vercel 账号

访问 [Vercel](https://vercel.com/) 并注册一个账号。

### 2. 连接 GitHub 仓库

1. 登录 Vercel 后，点击 "New Project"
2. 选择 "Import Git Repository" 并授权 Vercel 访问你的 GitHub 账号
3. 选择你的博客仓库

### 3. 配置构建设置

Vercel 会自动识别 Rspress 项目，你只需要确认构建设置：

- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- 点击 "Deploy"

### 4. 自定义域名（可选）

部署完成后，你可以在 Vercel 控制台中设置自定义域名。

## 发布到阿里云 OSS

### 1. 安装阿里云 OSS CLI

```bash
npm install -g ossutil
```

### 2. 配置 OSS CLI

```bash
ossutil config
```

按照提示输入你的 AccessKey ID、AccessKey Secret、Endpoint 等信息。

### 3. 构建项目

```bash
npm run build
```

### 4. 上传文件

```bash
ossutil cp -r dist/ oss://your-bucket-name/
```

### 5. 配置静态网站托管

在阿里云 OSS 控制台中，找到你的 bucket，开启静态网站托管功能。

## 发布流程总结

1. **本地开发**: 修改内容，本地预览
2. **构建项目**: 运行 `npm run build` 构建生产版本
3. **部署项目**: 根据选择的平台，执行相应的部署命令或配置
4. **验证部署**: 访问部署后的网站，检查是否正常工作

## 常见问题

### 部署后页面空白

- 检查 `base` 配置是否正确
- 检查构建是否成功，是否有错误信息
- 检查部署目录是否正确

### 资源加载失败

- 检查资源路径是否正确
- 确保静态资源已正确上传

### 自定义域名不生效

- 检查 DNS 配置是否正确
- 等待 DNS 缓存刷新（可能需要 24-48 小时）
- 检查 SSL 证书配置（如果使用 HTTPS）
