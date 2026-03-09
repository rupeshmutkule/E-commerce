#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔍 Verifying Next.js Project Setup...\n');

const requiredFiles = [
  'package.json',
  'tsconfig.json',
  'next.config.js',
  '.eslintrc.json',
  'src/app/layout.tsx',
  'src/app/page.tsx',
  'src/components/Header.tsx',
  'src/components/Footer.tsx',
];

const requiredDirs = [
  'src/app',
  'src/components',
  'src/lib',
  'src/styles',
  'src/types',
  'public',
];

let allGood = true;

console.log('📁 Checking required files...');
requiredFiles.forEach(file => {
  const exists = fs.existsSync(file);
  console.log(`  ${exists ? '✅' : '❌'} ${file}`);
  if (!exists) allGood = false;
});

console.log('\n📂 Checking required directories...');
requiredDirs.forEach(dir => {
  const exists = fs.existsSync(dir);
  console.log(`  ${exists ? '✅' : '❌'} ${dir}`);
  if (!exists) allGood = false;
});

console.log('\n📦 Checking package.json...');
try {
  const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  const hasNext = pkg.dependencies && pkg.dependencies.next;
  const hasReact = pkg.dependencies && pkg.dependencies.react;
  const hasTS = pkg.devDependencies && pkg.devDependencies.typescript;
  
  console.log(`  ${hasNext ? '✅' : '❌'} Next.js dependency`);
  console.log(`  ${hasReact ? '✅' : '❌'} React dependency`);
  console.log(`  ${hasTS ? '✅' : '❌'} TypeScript dependency`);
  
  if (!hasNext || !hasReact || !hasTS) allGood = false;
} catch (e) {
  console.log('  ❌ Error reading package.json');
  allGood = false;
}

console.log('\n' + '='.repeat(50));
if (allGood) {
  console.log('✅ Setup verification passed!');
  console.log('\n📝 Next steps:');
  console.log('  1. Run: npm install');
  console.log('  2. Run: npm run dev');
  console.log('  3. Open: http://localhost:3000');
} else {
  console.log('❌ Setup verification failed!');
  console.log('\n📝 Please check the missing files/directories above.');
}
console.log('='.repeat(50) + '\n');

process.exit(allGood ? 0 : 1);
