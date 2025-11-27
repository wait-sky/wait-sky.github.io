# 前端笔记

## React Hooks 最佳实践

### useState
- 避免在初始状态中进行复杂计算
- 使用函数式更新处理依赖于前一个状态的值
- 对于复杂状态，考虑使用 useReducer

### useEffect
- 明确依赖项，避免无限循环
- 使用 cleanup 函数处理副作用
- 避免在 useEffect 中进行阻塞操作

### useCallback 和 useMemo
- 用于优化性能，避免不必要的重新渲染
- useCallback 缓存函数，useMemo 缓存计算结果
- 不要过度使用，只有在性能问题明显时才使用

## TypeScript 技巧

### 类型断言
- 谨慎使用 as 断言，确保类型安全
- 优先使用类型守卫和类型推断

### 泛型
- 用于创建可复用的组件和函数
- 结合约束条件使用，提高类型安全性

### 工具类型
- Partial<T>：将所有属性变为可选
- Required<T>：将所有属性变为必填
- Pick<T, K>：从 T 中选择 K 属性
- Omit<T, K>：从 T 中排除 K 属性

## 性能优化

### 代码分割
- 使用 React.lazy 和 Suspense 实现组件懒加载
- 使用动态 import() 实现代码分割
- 结合 Webpack 的 SplitChunksPlugin 优化打包

### 渲染优化
- 使用 React.memo 优化组件渲染
- 避免在渲染过程中创建新函数和对象
- 使用虚拟列表处理大量数据

### 网络优化
- 使用 HTTP/2 和 HTTP/3
- 实现资源缓存策略
- 使用 CDN 加速资源加载

## CSS 最佳实践

### 命名规范
- 使用 BEM 或 CSS Modules 避免样式冲突
- 保持命名的语义化和可读性

### 性能优化
- 避免使用复杂的选择器
- 减少重排和重绘
- 使用 CSS 变量实现主题切换

### 响应式设计
- 使用媒体查询适配不同屏幕尺寸
- 采用移动优先的设计理念
- 使用相对单位（rem, em, vw, vh）
