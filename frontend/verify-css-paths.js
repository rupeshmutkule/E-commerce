#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔍 Verifying CSS image paths...\n');

const cssFiles = [
  'src/styles/header.css',
  'src/styles/footer.css', 
  'src/styles/home.css',
  'src/styles/customnew.css'
];

let allGood = true;

cssFiles.forEach(file => {
  if (fs.existsSync(file)) {
    const content = fs.readFileSync(file, 'utf8');
    
    // Check for relative paths
    const relativePaths = content.match(/url\([^)]*\.\.\//g);
    if (relativePaths) {
      console.log(`❌ ${file} has relative paths:`);
      relativePaths.forEach(path => console.log(`   ${path}`));
      allGood = false;
    } else {
      console.log(`✅ ${file} - All paths are absolute`);
    }
    
    // Check for long Magento paths
    const magentoPaths = content.match(/url\([^)]*frontend[^)]*/g);
    if (magentoPaths) {
      console.log(`❌ ${file} has Magento paths:`);
      magentoPaths.forEach(path => console.log(`   ${path}`));
      allGood = false;
    }
  } else {
    console.log(`⚠️  ${file} not found`);
  }
});

console.log('\n' + '='.repeat(50));
if (allGood) {
  console.log('✅ All CSS paths are correct!');
  console.log('\n🚀 Ready to run:');
  console.log('   npm run dev');
} else {
  console.log('❌ Some CSS paths need fixing');
  console.log('\n🔧 All paths should start with "/images/"');
}
console.log('='.repeat(50) + '\n');

process.exit(allGood ? 0 : 1);