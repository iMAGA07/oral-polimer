interface PdfEmbedViewerProps {
  pdfUrl: string;
  className?: string;
}

function buildSrcDoc(url: string): string {
  // JSON.stringify safely escapes the URL for use in JS
  const safeUrl = JSON.stringify(url);
  return `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { background: #1a1a1a; overflow: hidden; height: 100vh; }
</style>
</head>
<body>
<div id="pdfRoot" style="width:100%;height:100vh;position:relative;background:#1a1a1a;overflow:hidden;touch-action:none;cursor:grab;font-family:-apple-system,BlinkMacSystemFont,sans-serif">
  <div id="canvasWrap" style="position:absolute;transform-origin:0 0"><canvas id="pdfC"></canvas></div>
  <div id="ctrls" style="position:absolute;bottom:12px;left:50%;transform:translateX(-50%);display:flex;align-items:center;gap:6px;background:rgba(0,0,0,.7);backdrop-filter:blur(10px);padding:6px 14px;border-radius:40px;z-index:10;opacity:.3;transition:opacity .3s">
    <button onclick="pdfPrev()" style="all:unset;width:30px;height:30px;background:rgba(255,255,255,.15);color:#fff;border-radius:50%;cursor:pointer;font-size:15px;display:flex;align-items:center;justify-content:center">&#8592;</button>
    <button onclick="pdfZoomOut()" style="all:unset;width:30px;height:30px;background:rgba(255,255,255,.15);color:#fff;border-radius:50%;cursor:pointer;font-size:15px;display:flex;align-items:center;justify-content:center">&#8722;</button>
    <span id="pdfInfo" style="color:rgba(255,255,255,.8);font-size:12px;min-width:64px;text-align:center;user-select:none">загрузка</span>
    <button onclick="pdfZoomIn()" style="all:unset;width:30px;height:30px;background:rgba(255,255,255,.15);color:#fff;border-radius:50%;cursor:pointer;font-size:15px;display:flex;align-items:center;justify-content:center">&#43;</button>
    <button onclick="pdfNext()" style="all:unset;width:30px;height:30px;background:rgba(255,255,255,.15);color:#fff;border-radius:50%;cursor:pointer;font-size:15px;display:flex;align-items:center;justify-content:center">&#8594;</button>
  </div>
  <div id="pdfLoad" style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:#888;font-size:14px;z-index:5">
    <div style="width:18px;height:18px;border:2px solid #444;border-top-color:#fff;border-radius:50%;animation:pdfspin .7s linear infinite;margin-right:8px"></div>Загрузка...
  </div>
  <style>
    @keyframes pdfspin { to { transform: rotate(360deg) } }
    #ctrls:hover { opacity: 1 !important }
  </style>
</div>
<script type="module">
const PDF_URL = ${safeUrl};
const pdfjsLib = await import('https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.4.168/pdf.min.mjs');
pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.4.168/pdf.worker.min.mjs';

const root = document.getElementById('pdfRoot');
const cv   = document.getElementById('pdfC');
const cx   = cv.getContext('2d');
const wrap = document.getElementById('canvasWrap');
const inf  = document.getElementById('pdfInfo');
const ld   = document.getElementById('pdfLoad');

let pdf, pg = 1, pgs = 1, bs = 2, vs = 1, px = 0, py = 0;
let drag = false, sx, sy, spx, spy, ld2 = 0;

try {
  pdf = await pdfjsLib.getDocument(PDF_URL).promise;
  pgs = pdf.numPages;
  ld.style.display = 'none';
  await rp();
  fit();
} catch(e) {
  ld.innerHTML = '<span style="color:#f66">Ошибка загрузки</span>';
}

async function rp() {
  const p = await pdf.getPage(pg);
  const v = p.getViewport({ scale: bs });
  cv.width  = v.width;
  cv.height = v.height;
  await p.render({ canvasContext: cx, viewport: v }).promise;
  ui(); at();
}

function fit() {
  const sx2 = root.clientWidth  / cv.width;
  const sy2 = root.clientHeight / cv.height;
  vs = Math.min(sx2, sy2) * 0.95;
  px = (root.clientWidth  - cv.width  * vs) / 2;
  py = (root.clientHeight - cv.height * vs) / 2;
  at(); ui();
}

function at()  { wrap.style.transform = 'translate(' + px + 'px,' + py + 'px) scale(' + vs + ')'; }
function ui()  { inf.textContent = pg + '/' + pgs + ' \u00b7 ' + Math.round(vs * bs * 50) + '%'; }

function zm(d, cx2, cy2) {
  const o = vs;
  vs = Math.max(0.05, Math.min(15, vs * (1 + d)));
  px = cx2 - (cx2 - px) * (vs / o);
  py = cy2 - (cy2 - py) * (vs / o);
  at(); ui();
}

/* ── mouse ── */
root.addEventListener('wheel', e => {
  e.preventDefault();
  const r = root.getBoundingClientRect();
  zm(e.deltaY > 0 ? -0.08 : 0.08, e.clientX - r.left, e.clientY - r.top);
}, { passive: false });

root.addEventListener('mousedown', e => {
  drag = true; root.style.cursor = 'grabbing';
  sx = e.clientX; sy = e.clientY; spx = px; spy = py;
});
window.addEventListener('mousemove', e => {
  if (!drag) return;
  px = spx + (e.clientX - sx);
  py = spy + (e.clientY - sy);
  at();
});
window.addEventListener('mouseup', () => { drag = false; root.style.cursor = 'grab'; });

/* ── touch ── */
root.addEventListener('touchstart', e => {
  if (e.touches.length === 1) {
    drag = true;
    sx = e.touches[0].clientX; sy = e.touches[0].clientY;
    spx = px; spy = py;
  } else if (e.touches.length === 2) {
    ld2 = Math.hypot(
      e.touches[0].clientX - e.touches[1].clientX,
      e.touches[0].clientY - e.touches[1].clientY
    );
  }
}, { passive: false });

root.addEventListener('touchmove', e => {
  e.preventDefault();
  const r = root.getBoundingClientRect();
  if (e.touches.length === 1 && drag) {
    px = spx + (e.touches[0].clientX - sx);
    py = spy + (e.touches[0].clientY - sy);
    at();
  } else if (e.touches.length === 2) {
    const d = Math.hypot(
      e.touches[0].clientX - e.touches[1].clientX,
      e.touches[0].clientY - e.touches[1].clientY
    );
    const mx = (e.touches[0].clientX + e.touches[1].clientX) / 2 - r.left;
    const my = (e.touches[0].clientY + e.touches[1].clientY) / 2 - r.top;
    zm((d - ld2) / ld2 / 3.5, mx, my);
    ld2 = d;
  }
}, { passive: false });

root.addEventListener('touchend', () => { drag = false; });

/* ── controls (called from inline onclick) ── */
window.pdfPrev    = async () => { if (pg > 1)   { pg--; await rp(); fit(); } };
window.pdfNext    = async () => { if (pg < pgs) { pg++; await rp(); fit(); } };
window.pdfZoomIn  = () => zm( 0.2, root.clientWidth / 2, root.clientHeight / 2);
window.pdfZoomOut = () => zm(-0.2, root.clientWidth / 2, root.clientHeight / 2);
</script>
</body>
</html>`;
}

export function PdfEmbedViewer({ pdfUrl, className }: PdfEmbedViewerProps) {
  return (
    <div className={`w-full overflow-hidden ${className ?? "rounded-2xl h-[400px] md:h-[600px]"}`}>
      <iframe
        srcDoc={buildSrcDoc(pdfUrl)}
        className="w-full h-full border-0 block"
        title="PDF Viewer"
      />
    </div>
  );
}