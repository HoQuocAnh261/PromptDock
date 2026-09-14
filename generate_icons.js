const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

// Create Windows 11 Fluent SVG Icon
const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1e293b"/>
      <stop offset="50%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#090d16"/>
    </linearGradient>
    <linearGradient id="accentGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#70a6ff"/>
      <stop offset="100%" stop-color="#3b82f6"/>
    </linearGradient>
    <filter id="shadow" x="-10%" y="-10%" width="120%" height="125%">
      <feDropShadow dx="0" dy="16" stdDeviation="20" flood-color="#000" flood-opacity="0.45"/>
    </filter>
  </defs>

  <!-- Base App Background with Rounded Corner -->
  <rect x="24" y="24" width="464" height="464" rx="104" fill="url(#bgGrad)" stroke="rgba(255,255,255,0.12)" stroke-width="3" filter="url(#shadow)"/>
  
  <!-- Subtle Inner Glow Border -->
  <rect x="28" y="28" width="456" height="456" rx="100" fill="none" stroke="rgba(255,255,255,0.06)" stroke-width="2"/>

  <!-- Dock Tray Base -->
  <rect x="96" y="112" width="320" height="288" rx="28" fill="#182234" stroke="rgba(255,255,255,0.08)" stroke-width="2"/>
  
  <!-- Terminal / Prompt Header -->
  <rect x="96" y="112" width="320" height="52" rx="28" fill="#1e293b"/>
  <rect x="96" y="136" width="320" height="28" fill="#1e293b"/>
  
  <!-- Window Dots -->
  <circle cx="132" cy="138" r="7" fill="#ef4444" opacity="0.8"/>
  <circle cx="156" cy="138" r="7" fill="#eab308" opacity="0.8"/>
  <circle cx="180" cy="138" r="7" fill="#22c55e" opacity="0.8"/>
  
  <!-- Prompt Symbol >_ -->
  <path d="M 148 210 L 204 256 L 148 302" fill="none" stroke="url(#accentGrad)" stroke-width="18" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="228" y1="298" x2="288" y2="298" stroke="#f8fafc" stroke-width="16" stroke-linecap="round"/>

  <!-- AI Sparkle / Star at Top Right -->
  <g transform="translate(332, 184) scale(1.1)">
    <path d="M 28 0 C 28 15 40 28 56 28 C 40 28 28 41 28 56 C 28 41 16 28 0 28 C 16 28 28 15 28 0 Z" fill="url(#accentGrad)"/>
  </g>
  <circle cx="396" cy="272" r="5" fill="#93c5fd"/>
  
  <!-- Bottom Pill Dock Indicator -->
  <rect x="196" y="434" width="120" height="8" rx="4" fill="url(#accentGrad)" opacity="0.85"/>
</svg>`;

function createPng(width, height, colorFn) {
  const sig = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);

  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr.writeUInt8(8, 8);
  ihdr.writeUInt8(6, 9);
  ihdr.writeUInt8(0, 10);
  ihdr.writeUInt8(0, 11);
  ihdr.writeUInt8(0, 12);

  const ihdrChunk = makeChunk('IHDR', ihdr);

  const rowSize = 1 + width * 4;
  const rawData = Buffer.alloc(rowSize * height);

  for (let y = 0; y < height; y++) {
    const rowOffset = y * rowSize;
    rawData[rowOffset] = 0;
    for (let x = 0; x < width; x++) {
      const [r, g, b, a] = colorFn(x, y, width, height);
      const pxOffset = rowOffset + 1 + x * 4;
      rawData[pxOffset] = r;
      rawData[pxOffset + 1] = g;
      rawData[pxOffset + 2] = b;
      rawData[pxOffset + 3] = a;
    }
  }

  const deflated = zlib.deflateSync(rawData);
  const idatChunk = makeChunk('IDAT', deflated);
  const iendChunk = makeChunk('IEND', Buffer.alloc(0));

  return Buffer.concat([sig, ihdrChunk, idatChunk, iendChunk]);
}

function makeChunk(type, data) {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length, 0);

  const typeBuf = Buffer.from(type, 'ascii');
  const typeAndData = Buffer.concat([typeBuf, data]);

  let crc = 0xffffffff;
  for (let i = 0; i < typeAndData.length; i++) {
    const byte = typeAndData[i];
    crc = (crc >>> 8) ^ crcTable[(crc ^ byte) & 0xff];
  }
  crc = (crc ^ 0xffffffff) >>> 0;

  const crcBuf = Buffer.alloc(4);
  crcBuf.writeUInt32BE(crc, 0);

  return Buffer.concat([len, typeAndData, crcBuf]);
}

const crcTable = new Uint32Array(256);
for (let n = 0; n < 256; n++) {
  let c = n;
  for (let k = 0; k < 8; k++) {
    if (c & 1) {
      c = 0xedb88320 ^ (c >>> 1);
    } else {
      c = c >>> 1;
    }
  }
  crcTable[n] = c;
}

function iconColor(x, y, w, h) {
  const u = x / w;
  const v = y / h;

  const dx = Math.abs(u - 0.5) * 2;
  const dy = Math.abs(v - 0.5) * 2;
  const cornerDist = Math.pow(dx, 4) + Math.pow(dy, 4);

  if (cornerDist > 0.95) {
    if (cornerDist < 1.05) {
      const alpha = Math.max(0, Math.min(255, Math.floor((1.05 - cornerDist) / 0.1 * 255)));
      return [17, 24, 39, alpha];
    }
    return [0, 0, 0, 0];
  }

  let r = Math.floor(30 - v * 20);
  let g = Math.floor(41 - v * 28);
  let b = Math.floor(59 - v * 37);

  if (cornerDist > 0.88) {
    return [112, 166, 255, 220];
  }

  if (u >= 0.2 && u <= 0.8 && v >= 0.22 && v <= 0.78) {
    if (v <= 0.32) {
      r = 30; g = 41; b = 59;
      const dotY = 0.27;
      if (Math.hypot(u - 0.28, v - dotY) < 0.02) return [239, 68, 68, 255];
      if (Math.hypot(u - 0.34, v - dotY) < 0.02) return [234, 179, 8, 255];
      if (Math.hypot(u - 0.40, v - dotY) < 0.02) return [34, 197, 94, 255];
    } else {
      r = 24; g = 34; b = 52;

      const inTopArm = Math.abs((v - 0.42) - 0.8 * (u - 0.32)) < 0.025 && u >= 0.31 && u <= 0.43;
      const inBotArm = Math.abs((v - 0.58) + 0.8 * (u - 0.32)) < 0.025 && u >= 0.31 && u <= 0.43;
      if (inTopArm || inBotArm) {
        return [79, 140, 255, 255];
      }

      if (u >= 0.48 && u <= 0.60 && Math.abs(v - 0.58) < 0.015) {
        return [248, 250, 252, 255];
      }

      const sDx = Math.abs(u - 0.68);
      const sDy = Math.abs(v - 0.38);
      if (sDx + sDy < 0.045 || (sDx < 0.01 && sDy * 0.5 < 0.03) || (sDy < 0.01 && sDx * 0.5 < 0.03)) {
        return [96, 165, 250, 255];
      }
    }
  }

  if (u >= 0.38 && u <= 0.62 && v >= 0.85 && v <= 0.88) {
    return [79, 140, 255, 240];
  }

  return [r, g, b, 255];
}

const iconsDir = path.join(__dirname, 'icons');
if (!fs.existsSync(iconsDir)) {
  fs.mkdirSync(iconsDir, { recursive: true });
}

fs.writeFileSync(path.join(iconsDir, 'icon.svg'), svgContent, 'utf8');
console.log('Saved icons/icon.svg');

const png192 = createPng(192, 192, iconColor);
fs.writeFileSync(path.join(iconsDir, 'icon-192.png'), png192);
console.log('Saved icons/icon-192.png (' + png192.length + ' bytes)');

const png512 = createPng(512, 512, iconColor);
fs.writeFileSync(path.join(iconsDir, 'icon-512.png'), png512);
console.log('Saved icons/icon-512.png (' + png512.length + ' bytes)');

fs.writeFileSync(path.join(iconsDir, 'icon-maskable.png'), png512);
fs.writeFileSync(path.join(__dirname, 'favicon.ico'), createPng(32, 32, iconColor));
console.log('All icons generated successfully!');
