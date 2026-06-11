/**
 * Generates raster favicon/app-icon/OG assets from the brand SVGs.
 * Run with: node scripts/generate-icons.mjs
 *
 * Sources (in /public):
 *   - awerton-profile.svg  → square mark-on-ink icons (favicon.ico, PWA, apple)
 *   - awerton-lockup.svg   → composited onto the 1200×630 OG card
 */
import sharp from 'sharp'
import pngToIco from 'png-to-ico'
import { readFile, writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const pub = resolve(root, 'public')
const square = resolve(pub, 'awerton-profile.svg')

// 1. PNG app icons (mark on ink, full-bleed → safe for maskable)
const pngs = { 'apple-touch-icon.png': 180, 'icon-192.png': 192, 'icon-512.png': 512 }
for (const [name, size] of Object.entries(pngs)) {
  await sharp(square).resize(size, size).png().toFile(resolve(pub, name))
  console.log('✓', name)
}

// 2. favicon.ico (16 / 32 / 48)
const icoBuffers = await Promise.all(
  [16, 32, 48].map((s) => sharp(square).resize(s, s).png().toBuffer()),
)
await writeFile(resolve(pub, 'favicon.ico'), await pngToIco(icoBuffers))
console.log('✓ favicon.ico')

// 3. Open Graph card (1200×630): centre the lockup on ink
const lockup = await readFile(resolve(pub, 'awerton-lockup.svg'), 'utf8')
const paths = lockup
  .replace(/^[\s\S]*?<rect[^>]*\/>/, '') // drop the opening <svg> + bg rect
  .replace(/<\/svg>\s*$/, '') // drop the closing </svg>

const vb = { x: 110, y: 214, w: 860, h: 510 } // lockup content viewBox
const box = { x: 240, y: 101, w: 720, h: 428 } // target area inside the card
const s = Math.min(box.w / vb.w, box.h / vb.h)
const tx = box.x + (box.w - vb.w * s) / 2 - vb.x * s
const ty = box.y + (box.h - vb.h * s) / 2 - vb.y * s

const og = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#171515"/>
  <g transform="translate(${tx} ${ty}) scale(${s})">${paths}</g>
</svg>`
await sharp(Buffer.from(og)).png().toFile(resolve(pub, 'og-image.png'))
console.log('✓ og-image.png')

console.log('Done.')
