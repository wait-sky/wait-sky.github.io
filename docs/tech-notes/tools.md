# 工具使用

## 开发工具

### VS Code 技巧

- **快捷键**：Ctrl+P 快速打开文件，Ctrl+Shift+F 全局搜索
- **插件推荐**：ESLint、Prettier、GitLens、Live Server
- **自定义配置**：settings.json 个性化设置，keybindings.json 自定义快捷键
- **多光标编辑**：Alt+鼠标点击，Ctrl+Alt+上下箭头

### Git 常用命令

```bash
# 基本操作
git init                    # 初始化仓库
git add .                   # 添加所有文件
git commit -m "message"      # 提交更改
git push origin main        # 推送到远程仓库

# 分支管理
git branch dev              # 创建分支
git checkout dev            # 切换分支
git merge dev               # 合并分支
git branch -d dev           # 删除分支

# 版本管理
git log                     # 查看提交历史
git reset --hard HEAD~1     # 回退到上一个版本
git stash                   # 暂存更改
git stash pop               # 恢复暂存
```

## 构建工具

### Webpack 配置

- **基础配置**：entry、output、module、plugins
- **优化策略**：代码分割、Tree Shaking、压缩
- **开发工具**：webpack-dev-server、source-map
- **性能监控**：webpack-bundle-analyzer

### Vite 使用

- **快速启动**：基于 ES modules 的开发服务器
- **热模块替换**：即时更新，无需刷新
- **构建优化**：使用 Rollup 进行生产构建
- **插件系统**：丰富的插件生态

## 容器化技术

### Docker 基础

```bash
docker build -t myapp .     # 构建镜像
docker run -p 3000:3000 myapp  # 运行容器
docker ps                   # 查看运行的容器
docker stop <container-id>  # 停止容器
docker rm <container-id>    # 删除容器
docker rmi <image-id>       # 删除镜像
```

### Docker Compose

- 定义和运行多容器应用
- 使用 YAML 文件配置服务
- 一键启动所有服务
- 支持环境变量和卷挂载

## 云服务

### AWS 常用服务

- **EC2**：弹性计算云服务
- **S3**：对象存储服务
- **Lambda**：无服务器计算服务
- **DynamoDB**：NoSQL 数据库服务
- **CloudFront**：内容分发网络

### GitHub Actions

- 自动化 CI/CD 工作流
- 基于事件触发的工作流
- 支持矩阵构建和并行测试
- 与 GitHub 生态深度集成

## 效率工具

### 终端工具

- **Oh My Zsh**：增强的命令行工具
- **Tmux**：终端复用工具
- **Fzf**：模糊查找工具
- **Bat**：增强的 cat 命令

### 生产力工具

- **Notion**：笔记和知识库管理
- **Figma**：设计和原型工具
- **Postman**：API 测试工具
- **Docker Desktop**：容器管理 GUI
- **VS Code Remote**：远程开发环境
