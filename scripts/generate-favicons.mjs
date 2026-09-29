import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// Luxury Alucurve Architectural Emblem SVG Favicon
const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
  <defs>
    <linearGradient id="aluGold" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFF59D"/>
      <stop offset="45%" stop-color="#D4AF37"/>
      <stop offset="100%" stop-color="#996515"/>
    </linearGradient>
    <linearGradient id="aluBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#14181E"/>
      <stop offset="100%" stop-color="#06080B"/>
    </linearGradient>
    <radialGradient id="aluGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#D4AF37" stop-opacity="0.2"/>
      <stop offset="100%" stop-color="#D4AF37" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <!-- Ambient Golden Center Glow -->
  <rect width="64" height="64" rx="14" fill="url(#aluBg)"/>
  <circle cx="32" cy="32" r="28" fill="url(#aluGlow)"/>

  <!-- Outer Squircle Bezel Border -->
  <rect x="1" y="1" width="62" height="62" rx="13" fill="none" stroke="url(#aluGold)" stroke-width="1.5" stroke-opacity="0.35"/>

  <!-- Architectural System Window Frame Profile -->
  <rect x="11" y="11" width="42" height="42" rx="8" fill="none" stroke="url(#aluGold)" stroke-width="2.8"/>

  <!-- Center Mullion Line Divider -->
  <line x1="32" y1="11" x2="32" y2="53" stroke="url(#aluGold)" stroke-width="1.6" stroke-dasharray="3 2" stroke-opacity="0.6"/>

  <!-- Signature Architectural Sweep (The "Alucurve") -->
  <path d="M 14 49 C 14 27, 29 14, 49 14" fill="none" stroke="url(#aluGold)" stroke-width="4.2" stroke-linecap="round"/>

  <!-- Precision Pivot Node Point -->
  <circle cx="49" cy="14" r="3.2" fill="#FFF59D"/>
  <circle cx="49" cy="14" r="1.6" fill="#06080B"/>
</svg>`;

// Helper function to build a valid multi-image Windows .ico file containing raw PNG streams
function createIco(pngBuffers) {
  const numImages = pngBuffers.length;
  const headerSize = 6;
  const directorySize = 16 * numImages;
  let offset = headerSize + directorySize;

  // ICO header: 2 bytes reserved (0), 2 bytes type (1 = ICO), 2 bytes count
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(numImages, 4);

  const directories = [];
  for (const { width, height, buffer } of pngBuffers) {
    const dir = Buffer.alloc(16);
    dir.writeUInt8(width === 256 ? 0 : width, 0);
    dir.writeUInt8(height === 256 ? 0 : height, 1);
    dir.writeUInt8(0, 2); // colors
    dir.writeUInt8(0, 3); // reserved
    dir.writeUInt16LE(1, 4); // color planes
    dir.writeUInt16LE(32, 6); // bits per pixel
    dir.writeUInt32LE(buffer.length, 8); // size of image data
    dir.writeUInt32LE(offset, 12); // file offset
    offset += buffer.length;
    directories.push(dir);
  }

  return Buffer.concat([header, ...directories, ...pngBuffers.map(p => p.buffer)]);
}

async function run() {
  const publicDir = path.join(rootDir, 'public');
  const appDir = path.join(rootDir, 'src', 'app');

  // 1. Write the SVG favicons
  fs.writeFileSync(path.join(publicDir, 'favicon.svg'), svgContent, 'utf-8');
  fs.writeFileSync(path.join(appDir, 'icon.svg'), svgContent, 'utf-8');
  console.log('✓ Created SVG favicons in public/favicon.svg and src/app/icon.svg');

  // 2. Render PNG buffers at various sizes
  const sizes = [16, 32, 48, 64, 180, 192, 512];
  const pngMap = {};

  for (const size of sizes) {
    const pngBuffer = await sharp(Buffer.from(svgContent))
      .resize(size, size)
      .png({ compressionLevel: 9 })
      .toBuffer();
    pngMap[size] = pngBuffer;
  }

  // 3. Apple Touch Icon (180x180)
  fs.writeFileSync(path.join(publicDir, 'apple-touch-icon.png'), pngMap[180]);
  fs.writeFileSync(path.join(appDir, 'apple-icon.png'), pngMap[180]);
  console.log('✓ Created apple-touch-icon.png (180x180) in public and src/app');

  // 4. Android / PWA Icons (192 & 512)
  fs.writeFileSync(path.join(publicDir, 'icon-192.png'), pngMap[192]);
  fs.writeFileSync(path.join(publicDir, 'icon-512.png'), pngMap[512]);
  console.log('✓ Created icon-192.png and icon-512.png in public/');

  // 5. Generate multi-resolution .ico (16, 32, 48)
  const icoData = createIco([
    { width: 16, height: 16, buffer: pngMap[16] },
    { width: 32, height: 32, buffer: pngMap[32] },
    { width: 48, height: 48, buffer: pngMap[48] },
  ]);

  fs.writeFileSync(path.join(publicDir, 'favicon.ico'), icoData);
  fs.writeFileSync(path.join(appDir, 'favicon.ico'), icoData);
  console.log('✓ Created multi-resolution favicon.ico (16x16, 32x32, 48x48) in public/ and src/app/');
}

run().catch(err => {
  console.error('Failed to generate favicons:', err);
  process.exit(1);
});
