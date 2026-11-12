import fs from 'fs';
import path from 'path';

const distPath = path.resolve('dist');
const htmlFile = path.join(distPath, 'index.html');

console.log('--- BUILD AUDIT REPORT ---');
if (fs.existsSync(htmlFile)) {
  const content = fs.readFileSync(htmlFile, 'utf8');
  console.log('✓ dist/index.html exists (Length:', content.length, 'bytes)');
  console.log('✓ Contains <div id="root">:', content.includes('id="root"'));
  console.log('✓ Contains Schema.org MedicalClinic:', content.includes('"@type": "MedicalClinic"'));
  console.log('✓ Contains Dudahi address in schema:', content.includes('Dudahi'));
  console.log('✓ Contains phone 9305238955:', content.includes('9305238955'));
  console.log('✓ Contains Raj Clinic title:', content.includes('Raj Clinic'));
  console.log('✓ Contains Hindi name राज क्लिनिक:', content.includes('राज क्लिनिक'));
} else {
  console.error('✗ dist/index.html missing');
}

const assetsDir = path.join(distPath, 'assets');
if (fs.existsSync(assetsDir)) {
  const files = fs.readdirSync(assetsDir);
  console.log('✓ dist/assets contains', files.length, 'bundles:');
  files.forEach(f => {
    const stats = fs.statSync(path.join(assetsDir, f));
    console.log(`  - ${f} (${(stats.size / 1024).toFixed(2)} KB)`);
  });
}

const postersDir = path.join(distPath, 'images', 'posters');
if (fs.existsSync(postersDir)) {
  const posters = fs.readdirSync(postersDir);
  console.log('✓ dist/images/posters contains', posters.length, 'reference posters:');
  posters.forEach(p => console.log(`  - ${p}`));
}

