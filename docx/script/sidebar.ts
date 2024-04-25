import fs from 'fs'
import path from 'path';

// 指定文档目录路径
const docsDir = 'md/'
const docsDirAll = path.resolve(process.cwd(), 'docx', docsDir);
const sidePath = path.resolve(process.cwd(), 'docx/.vitepress', 'sides.ts');
console.log('扫描dir:', docsDirAll)

// 递归扫描文档目录
function scanDirectory(dirPath, sonDir = '/') {
  const sidebar: any[] = []
  const items1 = fs.readdirSync(dirPath);
  items1.forEach(item => {
    const itemPath = path.join(dirPath, item);
    const isDir = fs.statSync(itemPath).isDirectory();
    if(isDir) {
      const obj = {text: item, items: scanDirectory(itemPath, sonDir + item + '/')}
      if(obj.items.length > 0) {
        sidebar.push(obj)
      }
    } else if(path.extname(item) === '.md'){
      const obj = {text: item.replace('.md', ''), link: `/${sonDir}${item}`}
      sidebar.push(obj)
    }
  });
  return sidebar
}

// 生成并写入侧边栏配置文件
const sidebarConfig = scanDirectory(docsDirAll, docsDir);
const fileContent = `export const sides = ${JSON.stringify(sidebarConfig, null, 2)};`
fs.writeFileSync(sidePath, fileContent);

console.log('侧边栏配置文件已生成:' + sidePath);
