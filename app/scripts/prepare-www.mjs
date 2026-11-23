// Builds app/www from the website in ../globe, with every library and font copied in,
// so the iPhone app works with no internet and doesn't depend on outside CDNs.
import fs from 'node:fs'; import path from 'node:path'; import url from 'node:url';
const here = path.dirname(url.fileURLToPath(import.meta.url)), app = path.join(here, '..'), site = path.join(app, '..', 'globe'), www = path.join(app, 'www'), nm = path.join(app, 'node_modules');
const cp = (src, dst) => { fs.mkdirSync(path.dirname(dst), { recursive: true }); fs.cpSync(src, dst, { recursive: true }); };
fs.rmSync(www, { recursive: true, force: true }); fs.mkdirSync(www, { recursive: true });
for (const f of ['index.html', 'places.txt', 'countries-50m.json', 'icon-192.png', 'icon-512.png', 'privacy.html', 'support.html']) if (fs.existsSync(path.join(site, f))) cp(path.join(site, f), path.join(www, f));
if (fs.existsSync(path.join(site, 'music'))) cp(path.join(site, 'music'), path.join(www, 'music'));
// libraries
cp(path.join(nm, 'three/build/three.module.js'), path.join(www, 'vendor/three/build/three.module.js'));
// only the add-ons the page uses (the whole folder is ~25 MB) — plus anything they import
const jsm = path.join(nm, 'three/examples/jsm'), need = new Set(['controls/OrbitControls.js', 'lines/Line2.js', 'lines/LineGeometry.js', 'lines/LineMaterial.js', 'lines/LineSegments2.js', 'lines/LineSegmentsGeometry.js']);
const html0 = fs.readFileSync(path.join(site, 'index.html'), 'utf8'); for (const m of html0.matchAll(/three\/addons\/([\w/.-]+\.js)/g)) need.add(m[1]);
const queue = [...need]; while (queue.length) { const f = queue.pop(); const src = fs.readFileSync(path.join(jsm, f), 'utf8');
  for (const m of src.matchAll(/from\s+'(\.{1,2}\/[^']+)'/g)) { const dep = path.normalize(path.join(path.dirname(f), m[1])); if (!need.has(dep)) { need.add(dep); queue.push(dep); } } }
for (const f of need) cp(path.join(jsm, f), path.join(www, 'vendor/three/examples/jsm', f));
cp(path.join(nm, 'satellite.js/dist/satellite.min.js'), path.join(www, 'vendor/satellite.min.js'));
cp(path.join(nm, 'topojson-client/dist/topojson-client.min.js'), path.join(www, 'vendor/topojson-client.min.js'));
cp(path.join(nm, 'd3/dist/d3.min.js'), path.join(www, 'vendor/d3.min.js'));
// fonts
const fontCss = [];
for (const [pkg, weights] of [['space-grotesk', [400, 500, 600, 700]], ['jetbrains-mono', [500, 600]]]) {
  const dir = path.join(nm, '@fontsource', pkg); cp(path.join(dir, 'files'), path.join(www, 'vendor/fonts', pkg, 'files'));
  for (const w of weights) { const css = fs.readFileSync(path.join(dir, `${w}.css`), 'utf8').replace(/url\(\.\/files\//g, `url(./${pkg}/files/`); fontCss.push(css); } }
fs.writeFileSync(path.join(www, 'vendor/fonts/fonts.css'), fontCss.join('\n'));
// point the page at the local copies
let html = fs.readFileSync(path.join(www, 'index.html'), 'utf8');
const swaps = [
  ['https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js', './vendor/three/build/three.module.js'],
  ['https://cdn.jsdelivr.net/npm/three@0.160.0/examples/jsm/', './vendor/three/examples/jsm/'],
  ['https://cdn.jsdelivr.net/npm/satellite.js@5.0.0/dist/satellite.min.js', './vendor/satellite.min.js'],
  ['https://cdn.jsdelivr.net/npm/topojson-client@3.1.0/dist/topojson-client.min.js', './vendor/topojson-client.min.js'],
  ['https://cdnjs.cloudflare.com/ajax/libs/d3/7.8.5/d3.min.js', './vendor/d3.min.js'],
];
for (const [a, b] of swaps) { if (!html.includes(a)) throw new Error('Expected to find ' + a + ' in index.html'); html = html.split(a).join(b); }
html = html.replace(/<link[^>]+fonts\.googleapis\.com\/css2[^>]*>/, '<link rel="stylesheet" href="./vendor/fonts/fonts.css">').replace(/<link rel="preconnect"[^>]*fonts\.(googleapis|gstatic)\.com[^>]*>\s*/g, '');
fs.writeFileSync(path.join(www, 'index.html'), html);
const left = (html.match(/https:\/\/(cdn\.jsdelivr|cdnjs\.cloudflare|fonts\.googleapis)[^"'\s)]*/g) || []);
console.log(`✅ www ready (${fs.readdirSync(www).length} items).` + (left.length ? ' Still loading from the web: ' + left.join(', ') : ' Everything is bundled.'));
