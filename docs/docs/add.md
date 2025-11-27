# 添加说明

## 添加新栏目

### 1. 创建栏目目录

```bash
mkdir -p docs/new-category
```

### 2. 创建栏目导航配置

在新栏目目录下创建 `_meta.json` 文件：

```json
[
  {
    "text": "栏目首页",
    "link": "/new-category/"
  },
  {
    "text": "子页面1",
    "link": "/new-category/subpage1/"
  },
  {
    "text": "子页面2",
    "link": "/new-category/subpage2/"
  }
]
```

### 3. 创建栏目首页

在新栏目目录下创建 `index.md` 文件：

```markdown
# 新栏目名称

## 章节标题

内容...
```

### 4. 添加到全局导航

编辑 `docs/_meta.json` 文件，添加新栏目到全局导航：

```json
[
  // 现有导航项
  {
    "text": "新栏目",
    "link": "/new-category/",
    "activeMatch": "/new-category/"
  }
]
```

## 添加新页面

### 1. 在现有栏目下添加页面

在对应栏目目录下创建新的 Markdown 文件，例如 `docs/technology/new-page.md`：

```markdown
# 新页面标题

## 章节1

内容...

## 章节2

内容...
```

### 2. 添加到栏目导航

编辑对应栏目下的 `_meta.json` 文件，添加新页面到导航：

```json
[
  {
    "text": "现有页面1",
    "link": "/technology/"
  },
  {
    "text": "新页面",
    "link": "/technology/new-page/"
  },
  {
    "text": "现有页面2",
    "link": "/technology/other-page/"
  }
]
```

## 添加 React 组件

### 1. 创建组件文件

在项目根目录下创建 `components` 目录，然后创建组件文件，例如 `components/Calendar.tsx`：

```typescript
import React from 'react';
import { Calendar as AntdCalendar } from 'antd';

export default function Calendar() {
  return <AntdCalendar />;
}
```

### 2. 在 Markdown 中使用组件

在 Markdown 文件中导入并使用组件：

```markdown
# 页面标题

## 使用 React 组件

import Calendar from '../../components/Calendar';

<Calendar />

## 其他内容

内容...
```

### 3. 组件示例

#### 日历组件

```markdown
import Calendar from '../../components/Calendar';

<Calendar />
```

#### 表格组件

```markdown
import React from 'react';
import { Table } from 'antd';

const dataSource = [
  {
    key: '1',
    name: '张三',
    age: 32,
    address: '北京',
  },
  {
    key: '2',
    name: '李四',
    age: 42,
    address: '上海',
  },
];

const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '地址',
    dataIndex: 'address',
    key: 'address',
  },
];

<Table dataSource={dataSource} columns={columns} />
```

## 添加图片

### 1. 上传图片

将图片上传到 `docs/public` 目录，例如 `docs/public/images/photo.jpg`。

### 2. 在 Markdown 中引用图片

```markdown
![图片描述](/images/photo.jpg)
```

## 添加链接

### 内部链接

```markdown
[链接文本](/path/to/page/)
```

### 外部链接

```markdown
[链接文本](https://example.com)
```

## 添加代码块

### 基本代码块

```javascript
console.log('Hello, world!');
```

### 带语法高亮的代码块

```typescript
function greet(name: string): string {
  return `Hello, ${name}!`;
}
```

### 带行号的代码块

```typescript
1: function greet(name: string): string {
2:   return `Hello, ${name}!`;
3: }
```

## 添加数学公式

### 行内公式

```markdown
E = mc^2
```

### 块级公式

```markdown
$$
\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}
$$
```

## 添加表格

```markdown
| 列1 | 列2 | 列3 |
| --- | --- | --- |
| 行1列1 | 行1列2 | 行1列3 |
| 行2列1 | 行2列2 | 行2列3 |
| 行3列1 | 行3列2 | 行3列3 |
```

## 添加列表

### 无序列表

```markdown
- 列表项1
- 列表项2
  - 子列表项1
  - 子列表项2
- 列表项3
```

### 有序列表

```markdown
1. 列表项1
2. 列表项2
   1. 子列表项1
   2. 子列表项2
3. 列表项3
```

## 添加引用

```markdown
> 这是一段引用文本。
> 
> 引用可以有多行。
```

## 添加强调

```markdown
**粗体文本**

*斜体文本*

***粗斜体文本***
```