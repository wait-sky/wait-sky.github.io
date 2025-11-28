# Node.js 工具使用说明

## Nvm - Node Version Manager

Nvm是一个Node.js版本管理工具，允许你在同一台机器上安装和切换不同版本的Node.js。

### 安装Nvm

#### macOS/Linux

```bash
# 使用curl安装
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash

# 或使用wget安装
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```

安装完成后，需要重新打开终端或运行以下命令使nvm生效：

```bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
```

#### Windows

Windows用户可以使用[nvm-windows](https://github.com/coreybutler/nvm-windows)，从GitHub releases页面下载安装程序并按照提示进行安装。

### 使用Nvm

```bash
# 查看可用的Node.js版本
nvm ls-remote

# 安装指定版本的Node.js
nvm install <version>

# 安装最新版本的Node.js
nvm install node

# 安装最新的LTS版本
nvm install --lts

# 查看已安装的Node.js版本
nvm ls

# 使用指定版本的Node.js
nvm use <version>

# 使用最新版本的Node.js
nvm use node

# 使用最新的LTS版本
nvm use --lts

# 设置默认版本
nvm alias default <version>

# 卸载指定版本
nvm uninstall <version>

# 查看当前使用的Node.js版本
node -v

# 查看当前使用的npm版本
npm -v
```

## Nrm - Npm Registry Manager

Nrm是一个npm镜像源管理工具，允许你快速切换不同的npm镜像源。

### 安装Nrm

```bash
npm install -g nrm
```

### 使用Nrm

```bash
# 查看可用的镜像源
nrm ls

# 切换到指定的镜像源
nrm use <registry-name>

# 添加自定义镜像源
nrm add <registry-name> <registry-url>

# 删除镜像源
nrm del <registry-name>

# 测试镜像源的响应速度
nrm test <registry-name>

# 查看当前使用的镜像源
npm config get registry
```

### 常用镜像源

- **npm** - https://registry.npmjs.org/
- **yarn** - https://registry.yarnpkg.com/
- **taobao** - https://registry.npmmirror.com/ (原https://registry.npm.taobao.org/)
- **cnpm** - https://r.cnpmjs.org/
- **nj** - https://registry.nodejitsu.com/
- **npmMirror** - https://skimdb.npmjs.com/registry/

## Yarn

Yarn是一个快速、可靠、安全的依赖管理工具，由Facebook、Google、Exponent和Tilde联合开发。

### 安装Yarn

#### 使用npm安装

```bash
npm install -g yarn
```

#### 使用Homebrew安装 (macOS)

```bash
brew install yarn
```

#### 使用Chocolatey安装 (Windows)

```bash
choco install yarn
```

### 使用Yarn

```bash
# 初始化项目
mkdir my-project
cd my-project
yarn init

# 安装依赖
# 安装package.json中列出的所有依赖
yarn
# 或
yarn install

# 安装指定包
# 安装最新版本
yarn add <package-name>
# 安装指定版本
yarn add <package-name>@<version>
# 安装开发依赖
yarn add <package-name> --dev
# 或
yarn add <package-name> -D

# 全局安装包
yarn global add <package-name>

# 卸载包
yarn remove <package-name>

# 卸载全局包
yarn global remove <package-name>

# 更新包
# 更新所有包
yarn upgrade
# 更新指定包
yarn upgrade <package-name>
# 更新指定包到指定版本
yarn upgrade <package-name>@<version>

# 查看依赖树
yarn list

# 查看包的信息
yarn info <package-name>

# 运行脚本
yarn <script-name>

# 清除缓存
yarn cache clean

# 查看yarn版本
yarn --version
```

### Yarn工作区

Yarn工作区允许你在一个单一的代码库中管理多个包，这对于monorepo项目非常有用。

在package.json中配置工作区：

```json
{
  "private": true,
  "workspaces": [
    "packages/*"
  ]
}
```

## Pnpm

Pnpm是一个快速、节省磁盘空间的Node.js包管理器，使用符号链接来共享依赖，避免重复安装。

### 安装Pnpm

#### 使用npm安装

```bash
npm install -g pnpm
```

#### 使用Homebrew安装 (macOS)

```bash
brew install pnpm
```

#### 使用Chocolatey安装 (Windows)

```bash
choco install pnpm
```

#### 使用安装脚本

```bash
curl -fsSL https://get.pnpm.io/install.sh | sh -
```

### 使用Pnpm

```bash
# 初始化项目
mkdir my-project
cd my-project
pnpm init

# 安装依赖
# 安装package.json中列出的所有依赖
pnpm install

# 安装指定包
# 安装最新版本
pnpm add <package-name>
# 安装指定版本
pnpm add <package-name>@<version>
# 安装开发依赖
pnpm add <package-name> --save-dev
# 或
pnpm add <package-name> -D

# 全局安装包
pnpm add -g <package-name>

# 卸载包
pnpm remove <package-name>

# 卸载全局包
pnpm remove -g <package-name>

# 更新包
# 更新所有包
pnpm update
# 更新指定包
pnpm update <package-name>
# 更新指定包到指定版本
pnpm update <package-name>@<version>

# 查看依赖树
pnpm list

# 查看包的信息
pnpm info <package-name>

# 运行脚本
pnpm <script-name>

# 清除缓存
pnpm store prune

# 查看pnpm版本
pnpm --version
```

### Pnpm工作区

Pnpm工作区允许你在一个单一的代码库中管理多个包。

在pnpm-workspace.yaml中配置工作区：

```yaml
packages:
  # all packages in direct subdirs of packages/
  - 'packages/*'
  # all packages in subdirs of components/
  - 'components/**'
  # exclude packages that are inside test directories
  - '!**/test/**'
```

## 比较

| 特性 | npm | Yarn | Pnpm |
|------|-----|------|------|
| 速度 | 中等 | 快 | 最快 |
| 磁盘空间 | 占用多 | 占用多 | 占用少 |
| 依赖共享 | 不支持 | 部分支持 | 完全支持 |
| 工作区 | 支持 | 支持 | 支持 |
| 离线模式 | 支持 | 支持 | 支持 |
| 锁文件 | package-lock.json | yarn.lock | pnpm-lock.yaml |
| 安全性 | 中等 | 高 | 高 |

## 最佳实践

1. **选择合适的包管理器**：根据项目需求选择合适的包管理器，小型项目可以使用npm，大型项目或monorepo项目可以考虑使用Yarn或Pnpm。
2. **使用锁文件**：始终提交锁文件（package-lock.json、yarn.lock或pnpm-lock.yaml），确保团队成员使用相同版本的依赖。
3. **定期更新依赖**：定期更新依赖，修复安全漏洞和获取新功能。
4. **使用语义化版本**：在package.json中使用语义化版本，避免依赖冲突。
5. **使用.npmrc文件**：配置npm镜像源和其他npm设置，提高安装速度和安全性。
6. **避免全局安装**：尽量避免全局安装包，使用npx或yarn dlx来运行一次性命令。
7. **清理缓存**：定期清理包管理器的缓存，释放磁盘空间。