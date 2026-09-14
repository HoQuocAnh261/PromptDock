const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

const crcTable = new Uint32Array(256);
for (let n = 0; n < 256; n++) {
  let c = n;
  for (let k = 0; k < 8; k++) {
    if (c & 1) c = 0xedb88320 ^ (c >>> 1);
    else c = c >>> 1;
  }
  crcTable[n] = c;
}

function makeChunk(type, data) {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length, 0);

  const typeBuf = Buffer.from(type, 'ascii');
  const typeAndData = Buffer.concat([typeBuf, data]);

  let crc = 0xffffffff;
  for (let i = 0; i < typeAndData.length; i++) {
    crc = (crc >>> 8) ^ crcTable[(crc ^ typeAndData[i]) & 0xff];
  }
  crc = (crc ^ 0xffffffff) >>> 0;

  const crcBuf = Buffer.alloc(4);
  crcBuf.writeUInt32BE(crc, 0);

  return Buffer.concat([len, typeAndData, crcBuf]);
}

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

// 1. Desktop Screenshot 1280x720
function desktopColor(x, y, w, h) {
  // Titlebar
  if (y < 42) {
    if (x >= 20 && x <= 140 && y >= 14 && y <= 28) return [79, 140, 255, 255]; // app title badge
    if (x > w - 120 && y >= 14 && y <= 28) return [148, 163, 184, 255]; // controls
    return [17, 24, 39, 255];
  }
  // Sidebar (left 260px)
  if (x < 260) {
    if (x > 20 && x < 240) {
      // Nav buttons
      const itemY = (y - 50) % 44;
      if (y >= 50 && y <= 230 && itemY >= 4 && itemY <= 36) {
        if (y < 94) return [30, 41, 59, 255]; // active item
        return [22, 30, 46, 255];
      }
    }
    return [15, 23, 42, 255];
  }
  // Content area (260px to 740px)
  if (x < 740) {
    // Search bar
    if (y >= 54 && y <= 94 && x > 280 && x < 720) return [30, 41, 59, 255];
    // Cards
    const cardY = (y - 110) % 95;
    if (y >= 110 && y <= 680 && cardY >= 6 && cardY <= 86 && x > 280 && x < 720) {
      if (y >= 110 && y <= 200) return [35, 48, 71, 255]; // selected card
      return [24, 32, 47, 255];
    }
    return [17, 24, 39, 255];
  }
  // Preview panel (740px to w)
  // Copy button
  if (y >= 54 && y <= 104 && x > 760 && x < w - 24) return [79, 140, 255, 255];
  // Variable box
  if (y >= 120 && y <= 220 && x > 760 && x < w - 24) return [30, 45, 69, 255];
  // Code preview
  if (y > 234 && y < h - 30 && x > 760 && x < w - 24) return [10, 15, 26, 255];
  return [15, 23, 42, 255];
}

// 2. Mobile Screenshot 720x1280
function mobileColor(x, y, w, h) {
  // Titlebar
  if (y < 56) return [17, 24, 39, 255];
  // Search bar
  if (y >= 70 && y <= 120 && x > 24 && x < w - 24) return [30, 41, 59, 255];
  // Huge Copy Button
  if (y >= 134 && y <= 194 && x > 24 && x < w - 24) return [79, 140, 255, 255];
  // Variables Section
  if (y >= 210 && y <= 330 && x > 24 && x < w - 24) return [30, 45, 69, 255];
  // Content preview
  if (y > 344 && y < h - 40 && x > 24 && x < w - 24) return [10, 15, 26, 255];
  return [15, 23, 42, 255];
}

console.log('Generating Desktop screenshot (1280x720)...');
const desktopPng = createPng(1280, 720, desktopColor);
fs.writeFileSync(path.join(__dirname, 'icons', 'screenshot-desktop.png'), desktopPng);

console.log('Generating Mobile screenshot (720x1280)...');
const mobilePng = createPng(720, 1280, mobileColor);
fs.writeFileSync(path.join(__dirname, 'icons', 'screenshot-mobile.png'), mobilePng);

console.log('Screenshots generated successfully in icons/ directory!');
