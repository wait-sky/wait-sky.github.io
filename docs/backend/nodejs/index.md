# Node.js

Node.js是一个基于Chrome V8引擎的JavaScript运行时，用于构建快速、可扩展的网络应用程序。

## 核心概念

### 异步编程

Node.js采用异步、事件驱动的编程模型，通过回调函数、Promise和async/await处理异步操作。

#### 回调函数

```javascript
const fs = require('fs');

fs.readFile('file.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
```

#### Promise

```javascript
const fs = require('fs/promises');

fs.readFile('file.txt', 'utf8')
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.error(err);
  });
```

#### async/await

```javascript
const fs = require('fs/promises');

async function readFile() {
  try {
    const data = await fs.readFile('file.txt', 'utf8');
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}

readFile();
```

### 事件循环

事件循环是Node.js处理异步操作的核心机制，负责调度和执行回调函数。

### 模块系统

Node.js采用CommonJS模块系统，通过`require`和`module.exports`实现模块的导入和导出。

```javascript
// 导出模块
module.exports = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b
};

// 导入模块
const math = require('./math');
console.log(math.add(1, 2)); // 输出: 3
```

### 包管理

npm是Node.js的包管理器，用于安装、管理和发布Node.js包。

## 常用模块

### 核心模块

#### fs - 文件系统

用于操作文件和目录。

```javascript
const fs = require('fs');

// 读取文件
fs.readFile('file.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});

// 写入文件
fs.writeFile('file.txt', 'Hello, Node.js!', (err) => {
  if (err) throw err;
  console.log('文件已写入');
});
```

#### http - HTTP服务器和客户端

用于创建HTTP服务器和客户端。

```javascript
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, World!\n');
});

server.listen(3000, '127.0.0.1', () => {
  console.log('服务器运行在 http://127.0.0.1:3000/');
});
```

#### path - 路径处理

用于处理文件和目录路径。

```javascript
const path = require('path');

// 解析路径
console.log(path.resolve('file.txt')); // 输出: /Users/username/path/to/file.txt

// 连接路径
console.log(path.join('/foo', 'bar', 'baz/asdf', 'quux', '..')); // 输出: /foo/bar/baz/asdf
```

#### url - URL处理

用于解析和格式化URL。

```javascript
const url = require('url');

const myURL = new URL('https://example.org/foo?bar=baz');
console.log(myURL.searchParams.get('bar')); // 输出: baz
```

#### events - 事件处理

用于处理事件。

```javascript
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('event', () => {
  console.log('事件被触发');
});

myEmitter.emit('event'); // 输出: 事件被触发
```

#### stream - 流

用于处理流数据，如文件流、网络流等。

```javascript
const fs = require('fs');
const readable = fs.createReadStream('file.txt');
const writable = fs.createWriteStream('output.txt');

readable.pipe(writable);
```

#### buffer - 缓冲区

用于处理二进制数据。

```javascript
const buf = Buffer.from('Hello, World!', 'utf8');
console.log(buf.toString('hex')); // 输出: 48656c6c6f2c20576f726c6421
```

### 第三方模块

#### Express - Web框架

Express是Node.js最流行的Web框架，用于构建Web应用和API。

```javascript
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

app.listen(3000, () => {
  console.log('服务器运行在 http://localhost:3000/');
});
```

#### Koa - Web框架

Koa是Express团队开发的新一代Web框架，采用了更现代的异步编程模型。

```javascript
const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
  ctx.body = 'Hello, Koa!';
});

app.listen(3000);
```

#### NestJS - 渐进式Node.js框架

NestJS是一个用于构建高效、可扩展的Node.js服务器端应用程序的渐进式框架，基于TypeScript和Express。

#### Socket.IO - 实时通信

Socket.IO用于实现实时、双向的通信应用，如聊天应用、实时游戏等。

#### Mongoose - MongoDB对象建模

Mongoose是MongoDB的对象建模工具，用于在Node.js中与MongoDB数据库交互。

## 性能优化

- 使用异步编程
- 优化数据库查询
- 使用缓存
- 优化代码结构
- 使用负载均衡

## 最佳实践

- 使用TypeScript提高代码质量和可维护性
- 编写单元测试和集成测试
- 遵循RESTful API设计原则
- 实现适当的错误处理和日志记录
- 使用环境变量管理配置
- 实现适当的安全措施，如输入验证、SQL注入防护、XSS防护等
- 使用PM2或其他进程管理器管理Node.js应用
