# Git 使用说明

Git是一个分布式版本控制系统，用于跟踪文件的变化，协调多人协作开发。

## 安装Git

### macOS

```bash
# 使用Homebrew安装
brew install git

# 验证安装
git --version
```

### Windows

从[Git官网](https://git-scm.com/download/win)下载安装程序，按照提示进行安装。

### Linux

```bash
# Debian/Ubuntu
sudo apt-get update
sudo apt-get install git

# CentOS/RHEL
sudo yum install git

# 验证安装
git --version
```

## 基本配置

### 配置用户名和邮箱

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

### 配置默认编辑器

```bash
# 使用VS Code作为默认编辑器
git config --global core.editor "code --wait"

# 使用Vim作为默认编辑器
git config --global core.editor "vim"
```

### 配置换行符处理

```bash
# macOS/Linux
git config --global core.autocrlf input

# Windows
git config --global core.autocrlf true
```

## 基本操作

### 初始化仓库

```bash
# 在当前目录初始化Git仓库
git init

# 克隆远程仓库
git clone <repository-url>
```

### 查看状态

```bash
# 查看当前仓库状态
git status

# 查看当前仓库状态的简洁输出
git status -s
```

### 暂存文件

```bash
# 暂存单个文件
git add <file-name>

# 暂存所有文件
git add .

# 暂存所有修改的文件
git add -u

# 暂存所有文件，包括新文件
git add -A
```

### 提交文件

```bash
# 提交暂存的文件
git commit -m "commit message"

# 提交所有修改的文件，跳过暂存步骤
git commit -a -m "commit message"

# 修改最后一次提交信息
git commit --amend -m "new commit message"
```

### 查看提交历史

```bash
# 查看提交历史
git log

# 查看提交历史的简洁输出
git log --oneline

# 查看提交历史，显示每次提交的修改内容
git log -p

# 查看最近N次提交
git log -n <N>
```

### 撤销修改

```bash
# 撤销工作区的修改
git checkout -- <file-name>

# 撤销暂存区的修改
git reset HEAD <file-name>

# 撤销最近N次提交，保留修改
git reset HEAD~<N>

# 撤销最近N次提交，丢弃修改
git reset --hard HEAD~<N>
```

### 分支操作

```bash
# 查看所有分支
git branch

# 创建新分支
git branch <branch-name>

# 切换分支
git checkout <branch-name>

# 创建并切换到新分支
git checkout -b <branch-name>

# 合并分支
git merge <branch-name>

# 删除分支
git branch -d <branch-name>

# 强制删除分支
git branch -D <branch-name>
```

### 远程操作

```bash
# 查看远程仓库
git remote -v

# 添加远程仓库
git remote add <remote-name> <remote-url>

# 推送分支到远程仓库
git push <remote-name> <branch-name>

# 推送所有分支到远程仓库
git push --all <remote-name>

# 拉取远程仓库的更新
git pull <remote-name> <branch-name>

# 从远程仓库获取更新，但不合并
git fetch <remote-name>
```

### 标签操作

```bash
# 查看所有标签
git tag

# 创建轻量标签
git tag <tag-name>

# 创建带注释的标签
git tag -a <tag-name> -m "tag message"

# 推送标签到远程仓库
git push <remote-name> <tag-name>

# 推送所有标签到远程仓库
git push --tags <remote-name>

# 删除标签
git tag -d <tag-name>

# 删除远程标签
git push <remote-name> :refs/tags/<tag-name>
```

## 高级操作

### 忽略文件

创建 `.gitignore` 文件，添加需要忽略的文件和目录：

```
# 忽略node_modules目录
node_modules/

# 忽略日志文件
*.log

# 忽略环境变量文件
.env
.env.local
.env.*.local

# 忽略编辑器配置文件
.vscode/
.idea/
*.swp
*.swo
*~

# 忽略操作系统文件
.DS_Store
Thumbs.db
```

### 解决冲突

当合并分支或拉取远程更新时，可能会遇到冲突。冲突的文件会显示冲突的内容，需要手动解决：

```
<<<<<<< HEAD
当前分支的内容
=======
合并分支的内容
>>>>>>> branch-name
```

解决冲突后，需要暂存文件并提交：

```bash
git add <conflict-file>
git commit -m "resolve conflicts"
```

### 储藏修改

当需要切换分支，但又不想提交当前的修改时，可以使用储藏功能：

```bash
# 储藏当前的修改
git stash

# 储藏当前的修改，并添加注释
git stash save "stash message"

# 查看所有储藏
git stash list

# 应用最近的储藏
git stash apply

# 应用最近的储藏，并删除该储藏
git stash pop

# 应用指定的储藏
git stash apply stash@{<index>}

# 删除最近的储藏
git stash drop

# 删除指定的储藏
git stash drop stash@{<index>}

# 删除所有储藏
git stash clear
```

### 查看差异

```bash
# 查看工作区和暂存区的差异
git diff

# 查看暂存区和提交的差异
git diff --staged

# 查看工作区和指定提交的差异
git diff <commit-hash>

# 查看两个提交之间的差异
git diff <commit-hash1> <commit-hash2>

# 查看两个分支之间的差异
git diff <branch1> <branch2>
```

## 最佳实践

1. **频繁提交**：每次修改完成一个小功能或修复一个bug，就应该提交一次，保持提交的粒度小而清晰。
2. **写好提交信息**：提交信息应该简洁明了，说明本次提交的内容和目的。
3. **使用分支**：每个功能或bug修复都应该在独立的分支上进行开发，避免直接在主分支上修改。
4. **定期拉取更新**：定期从远程仓库拉取更新，避免代码冲突。
5. **使用标签**：对于重要的版本发布，使用标签进行标记，便于后续查找和回滚。
6. **忽略不必要的文件**：使用 `.gitignore` 文件忽略不必要的文件，如日志文件、环境变量文件、编辑器配置文件等。
7. **定期备份**：定期备份Git仓库，避免数据丢失。

## 常用命令速查表

| 命令 | 功能 |
|------|------|
| `git init` | 初始化Git仓库 |
| `git clone <url>` | 克隆远程仓库 |
| `git status` | 查看仓库状态 |
| `git add <file>` | 暂存文件 |
| `git commit -m "msg"` | 提交文件 |
| `git log` | 查看提交历史 |
| `git branch` | 查看分支 |
| `git checkout <branch>` | 切换分支 |
| `git merge <branch>` | 合并分支 |
| `git push <remote> <branch>` | 推送分支 |
| `git pull <remote> <branch>` | 拉取分支 |
| `git tag <tag>` | 创建标签 |
| `git diff` | 查看差异 |
| `git stash` | 储藏修改 |
| `git reset` | 重置提交 |
| `git checkout -- <file>` | 撤销修改 |