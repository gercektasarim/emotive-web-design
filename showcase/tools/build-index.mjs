// Galeri sayfasını üretir: apps.json + her sitenin meta.json'u + küçük ekran görüntüleri.
// Kullanım: node showcase/tools/build-index.mjs
import { readFileSync, writeFileSync, existsSync, mkdirSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const apps = JSON.parse(readFileSync(join(ROOT, "apps.json"), "utf8"));
const esc = (s = "") => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

mkdirSync(join(ROOT, "thumbs"), { recursive: true });
const rows = apps.map(a => {
  const metaPath = join(ROOT, a.slug, "meta.json");
  const meta = existsSync(metaPath) ? JSON.parse(readFileSync(metaPath, "utf8")) : {};
  const shot = join(ROOT, "_shots", `${a.slug}-desktop.png`);
  const thumb = join(ROOT, "thumbs", `${a.slug}.jpg`);
  if (existsSync(shot)) {
    execFileSync("sips", ["-s", "format", "jpeg", "-s", "formatOptions", "72", "--resampleWidth", "640", shot, "--out", thumb], { stdio: "ignore" });
  }
  return { ...a, meta, hasThumb: existsSync(thumb), hasSite: existsSync(join(ROOT, a.slug, "index.html")) };
}).filter(r => r.hasSite);

const groups = [...new Set(rows.map(r => r.group))];
const scored = rows.filter(r => typeof r.meta.score === "number");
const avg = scored.length ? (scored.reduce((s, r) => s + r.meta.score, 0) / scored.length).toFixed(1) : "–";
const fontCount = new Set(rows.flatMap(r => r.meta.fonts || [])).size;

const card = r => {
  const pal = (r.meta.palette || []).slice(0, 6).map(c => `<i style="background:${esc(c)}" title="${esc(c)}"></i>`).join("");
  return `<li class="card" data-group="${esc(r.group)}">
  <a href="${r.slug}/" aria-label="${esc(r.name)} sitesini aç">
    <figure class="shot">${r.hasThumb ? `<img src="thumbs/${r.slug}.jpg" alt="${esc(r.name)} sitesinin ilk ekranı" loading="lazy" width="640" height="450">` : `<span class="noshot">${esc(r.name)}</span>`}</figure>
    <div class="info">
      <p class="no">${String(r.n).padStart(3, "0")}</p>
      <h3>${esc(r.name)}</h3>
      <p class="does">${esc(r.does)}</p>
      <dl>
        <div><dt>Yorum</dt><dd>${esc(r.meta.interpretation || "—")}</dd></div>
        <div><dt>Ziyaretçi</dt><dd>${esc(r.visitor)}</dd></div>
        <div><dt>Çıkış</dt><dd>${esc(r.exit)}</dd></div>
        <div><dt>Font</dt><dd>${esc((r.meta.fonts || []).join(" + ") || "—")}</dd></div>
      </dl>
      <div class="foot"><span class="pal" aria-hidden="true">${pal}</span>${typeof r.meta.score === "number" ? `<span class="score">${r.meta.score}<small>/30</small></span>` : ""}</div>
    </div>
  </a>
</li>`;
};

const html = `<!doctype html>
<html lang="tr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Cihazda Kalan Akıl · emotive-web-design</title>
<meta name="description" content="Cihaz üzerinde çalışan yapay zekâ ile hayatı kolaylaştıran ${rows.length} uygulama; her birinin sitesi emotive-web-design skill'iyle, uygulamanın kendi duygusuna göre ayrı ayrı tasarlandı.">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@62..125,400..800&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet">
<style>
:root{--paper:#ECECE8;--ink:#141414;--mute:#55554F;--rule:#C9C9C2;--card:#F7F7F4;--focus:#0047FF}
*{box-sizing:border-box;margin:0;padding:0}
body{background:var(--paper);color:var(--ink);font:400 16px/1.5 Archivo,system-ui,sans-serif}
a{color:inherit}
:focus-visible{outline:3px solid var(--focus);outline-offset:3px}
.wrap{max-width:1440px;margin:0 auto;padding:0 clamp(16px,3vw,40px)}
header{padding:clamp(40px,7vw,96px) 0 32px;border-bottom:1px solid var(--ink)}
.kicker{font:500 13px/1.4 "IBM Plex Mono",monospace;color:var(--mute)}
h1{font-weight:780;font-stretch:72%;font-size:clamp(48px,10.5vw,168px);line-height:.86;letter-spacing:-.01em;margin:18px 0 28px;max-width:12ch}
.lede{display:grid;grid-template-columns:minmax(0,1.3fr) minmax(0,1fr);gap:clamp(24px,4vw,64px);align-items:end}
.lede p{font-size:clamp(18px,1.6vw,22px);max-width:56ch}
.stats{display:flex;gap:clamp(20px,3vw,48px);font:500 13px/1.3 "IBM Plex Mono",monospace;color:var(--mute)}
.stats b{display:block;font:780 clamp(36px,4vw,56px)/1 Archivo,sans-serif;font-stretch:72%;color:var(--ink)}
nav.filter{position:sticky;top:0;z-index:5;background:var(--paper);border-bottom:1px solid var(--rule);padding:12px 0;display:flex;gap:8px;overflow-x:auto;scrollbar-width:none}
nav.filter button{flex:none;font:500 13px/1 "IBM Plex Mono",monospace;padding:10px 14px;border:1px solid var(--ink);background:transparent;color:var(--ink);border-radius:999px;cursor:pointer}
nav.filter button[aria-pressed=true]{background:var(--ink);color:var(--paper)}
.grid{list-style:none;display:grid;grid-template-columns:repeat(auto-fill,minmax(320px,1fr));gap:clamp(16px,2vw,28px);padding:32px 0 80px}
.card a{display:flex;flex-direction:column;height:100%;text-decoration:none;background:var(--card);border:1px solid var(--rule)}
.shot{aspect-ratio:640/450;overflow:hidden;border-bottom:1px solid var(--rule);background:#ddd}
.shot img{width:100%;height:100%;object-fit:cover;object-position:top;display:block;transition:transform .5s ease}
.card a:hover .shot img{transform:scale(1.03)}
.noshot{display:grid;place-items:center;height:100%;font-weight:700}
.info{padding:18px 18px 16px;display:flex;flex-direction:column;gap:10px;flex:1}
.no{font:500 12px/1 "IBM Plex Mono",monospace;color:var(--mute)}
h3{font-weight:760;font-stretch:80%;font-size:28px;line-height:1}
.does{font-size:15px;color:#2b2b28}
dl{display:grid;gap:4px;font-size:13px;border-top:1px solid var(--rule);padding-top:10px}
dl div{display:grid;grid-template-columns:76px 1fr;gap:8px}
dt{font:500 11px/1.6 "IBM Plex Mono",monospace;color:var(--mute)}
.foot{margin-top:auto;display:flex;justify-content:space-between;align-items:center;padding-top:8px}
.pal{display:flex}.pal i{width:22px;height:22px;border:1px solid rgba(0,0,0,.12);margin-right:-4px;border-radius:50%}
.score{font:780 26px/1 Archivo,sans-serif;font-stretch:72%}.score small{font-size:13px;color:var(--mute);font-weight:500}
.method{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:24px;border-top:1px solid var(--ink);padding:48px 0}
.method h2{font-weight:760;font-stretch:72%;font-size:clamp(32px,4vw,52px);line-height:.95;grid-column:1/-1;max-width:20ch}
.method p{font-size:15px;max-width:40ch}
.method strong{display:block;font:500 12px/1.4 "IBM Plex Mono",monospace;color:var(--mute);margin-bottom:6px}
footer{border-top:1px solid var(--rule);padding:24px 0 40px;font:500 13px/1.5 "IBM Plex Mono",monospace;color:var(--mute)}
[hidden]{display:none!important}
@media (max-width:720px){.lede{grid-template-columns:1fr}.grid{grid-template-columns:1fr}}
@media (prefers-reduced-motion:reduce){*{transition:none!important}}
</style>
</head>
<body>
<header class="wrap">
  <p class="kicker">emotive-web-design · örnek arşivi</p>
  <h1>Cihazda kalan akıl, ${rows.length} kez.</h1>
  <div class="lede">
    <p>Telefonda, saatte, dizüstünde çalışan yapay zekâ ile hayatı biraz kolaylaştıran ${rows.length} uygulama. Hiçbirinin sitesi ortak bir şablondan çıkmadı: her biri için skill önce ziyaretçinin hangi halde geldiğini sordu, üç yön taslağı çıkarıp puanladı, seçileni kodladı ve ekran görüntüsünden yeniden puanladı.</p>
    <div class="stats"><span><b>${rows.length}</b>site</span><span><b>${fontCount}</b>font ailesi</span><span><b>${avg}</b>ort. uyum / 30</span></div>
  </div>
</header>
<nav class="filter wrap" aria-label="Gruba göre süz">
  <button type="button" aria-pressed="true" data-g="">Hepsi</button>
  ${groups.map(g => `<button type="button" aria-pressed="false" data-g="${esc(g)}">${esc(g)}</button>`).join("\n  ")}
</nav>
<main class="wrap">
  <ul class="grid">
${rows.map(card).join("\n")}
  </ul>
  <section class="method" aria-labelledby="m">
    <h2 id="m">Her site aynı soruyla başladı: bu insan hangi halde geliyor?</h2>
    <p><strong>1 · Sor</strong>Ziyaretçi kim, siteden çıkarken ne hissetmeli? Gece üçte uyanan diyabetli çocuğun ebeveyni ile şantiye şefi aynı sayfayı istemez.</p>
    <p><strong>2 · Taslak ve puan</strong>Her uygulama için 2-3 duygusal yorum çıkarıldı, altı ölçütlü uyum kartıyla puanlandı, en uygunu seçildi.</p>
    <p><strong>3 · Kodla, gör, yeniden puanla</strong>Bitmiş sayfanın masaüstü ve mobil ekran görüntüsü aynı kartla puanlandı; eşik 24/30, hiçbir ölçüt 3'ün altında değil.</p>
    <p><strong>4 · Ortak tema, ayrı dünyalar</strong>Hepsinde veri cihazda kalıyor; ama bu söz her sitede o konunun diliyle söyleniyor.</p>
  </section>
</main>
<footer class="wrap">Tasarım süreci: <a href="https://github.com/gercektasarim/emotive-web-design">github.com/gercektasarim/emotive-web-design</a> · Uygulamalar kurgusaldır.</footer>
<script>
const bs=[...document.querySelectorAll("nav.filter button")],cs=[...document.querySelectorAll(".card")];
bs.forEach(b=>b.addEventListener("click",()=>{bs.forEach(x=>x.setAttribute("aria-pressed",x===b));cs.forEach(c=>c.hidden=!!b.dataset.g&&c.dataset.group!==b.dataset.g)}));
</script>
</body>
</html>
`;
writeFileSync(join(ROOT, "index.html"), html);
console.log(`index.html: ${rows.length} site, ${scored.length} puanlı, ort ${avg}, ${fontCount} font`);
