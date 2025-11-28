const fs = require('fs');
const path = require('path');

// 递归遍历目录中的所有HTML文件
function traverseDirectory(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      traverseDirectory(filePath);
    } else if (file.endsWith('.html')) {
      fixFilePaths(filePath);
    }
  });
}

// 修复HTML文件中的路径
function fixFilePaths(filePath) {
  console.log(`Fixing paths in: ${filePath}`);
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // 获取文件所在目录相对于doc_build的路径
  const fileDir = path.dirname(filePath);
  const docBuildDir = path.join(__dirname, 'doc_build');
  const relativePath = path.relative(docBuildDir, fileDir);
  
  // 计算从当前文件到doc_build根目录的相对路径
  const depth = relativePath === '' ? 0 : relativePath.split(path.sep).length;
  const basePath = '../'.repeat(depth);
  
  console.log(`  File depth: ${depth}, Base path: "${basePath}"`);
  
  // 1. 修复所有以 / 开头的绝对路径，确保正确处理引号
  // 使用更安全的正则表达式，确保只匹配完整的属性值
  const absolutePathRegex = /(href|src|icon|link)="\/([^"]+)"/g;
  content = content.replace(absolutePathRegex, (match, attr, path) => {
    const newPath = `${basePath}${path}`;
    console.log(`    Fixing ${attr}="/${path}" -> ${attr}="${newPath}"`);
    return `${attr}="${newPath}"`;
  });
  
  // 2. 确保所有属性都有正确的闭合引号
  // 修复可能的语法错误，比如 href="../path 缺少闭合引号
  const unclosedQuoteRegex = /(href|src|icon|link)="([^"]+)\s/g;
  content = content.replace(unclosedQuoteRegex, (match, attr, path) => {
    console.log(`    Fixing unclosed quote: ${attr}="${path} -> ${attr}="${path}"`);
    return `${attr}="${path}"`;
  });
  
  // 3. 修复静态资源路径
  // 确保静态资源使用正确的相对路径
  const staticPathRegex = /(href|src)="(\.\/)*static\//g;
  content = content.replace(staticPathRegex, (match, attr) => {
    const newPath = `${attr}="${basePath}static/`;
    console.log(`    Fixing static path: ${match} -> ${newPath}`);
    return newPath;
  });
  
  // 4. 修复logo和icon路径
  const logoIconRegex = /(src|href)="(\.\/)*\/?(rspress-(icon|light-logo|dark-logo)\.png)"/g;
  content = content.replace(logoIconRegex, (match, attr, prefix, path) => {
    const newPath = `${attr}="${basePath}${path}"`;
    console.log(`    Fixing logo/icon: ${match} -> ${newPath}`);
    return newPath;
  });
  
  // 5. 修复根目录链接
  const rootLinkRegex = /(href)="(\.\/)*\/?(index\.html)"/g;
  content = content.replace(rootLinkRegex, (match, attr, prefix, path) => {
    const newPath = `${attr}="${basePath}${path}"`;
    console.log(`    Fixing root link: ${match} -> ${newPath}`);
    return newPath;
  });
  
  // 6. 清理可能的双斜杠问题
  const doubleSlashRegex = /([^:])\/\//g;
  content = content.replace(doubleSlashRegex, '$1/');
  
  // 7. 清理可能的 .././ 问题
  const redundantPathRegex = /\.\.\/\.\//g;
  content = content.replace(redundantPathRegex, '../');
  
  // 8. 确保根目录文件使用正确的相对路径
  if (depth === 0) {
    // 根目录文件，确保使用 ./ 或直接路径
    const rootFileRegex = /(href|src)="\.\.\/(static\/|index\.html|rspress-(icon|light-logo|dark-logo)\.png)"/g;
    content = content.replace(rootFileRegex, (match, attr, path) => {
      const newPath = `${attr}='./${path}'`;
      console.log(`    Fixing root file path: ${match} -> ${newPath}`);
      return newPath;
    });
  }
  
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`  Fixed paths in: ${filePath}`);
}

// 执行修复
const docBuildDir = path.join(__dirname, 'doc_build');
traverseDirectory(docBuildDir);

console.log('All paths fixed successfully!');
