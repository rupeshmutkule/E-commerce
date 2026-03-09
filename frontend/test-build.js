#!/usr/bin/env node

const { spawn } = require('child_process');

console.log('🧪 Testing Next.js build...\n');

const build = spawn('npm', ['run', 'build'], {
  stdio: 'inherit',
  shell: true
});

build.on('close', (code) => {
  if (code === 0) {
    console.log('\n✅ Build successful! The conversion is working correctly.');
    console.log('\n🚀 You can now run:');
    console.log('   npm run dev    # Development server');
    console.log('   npm start      # Production server');
  } else {
    console.log('\n❌ Build failed. Please check the error messages above.');
    console.log('\n🔧 Common fixes:');
    console.log('   1. Clear cache: rm -rf .next');
    console.log('   2. Reinstall: rm -rf node_modules && npm install');
    console.log('   3. Check CSS syntax in src/styles/');
  }
  process.exit(code);
});

build.on('error', (err) => {
  console.error('❌ Failed to start build process:', err.message);
  process.exit(1);
});