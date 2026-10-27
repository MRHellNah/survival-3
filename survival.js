/* MODE SURVIVAL — dunia dungeon top-down, joystick analog, monster, EXP/level, bos tiap 2 menit -> battle matematika */
(function(){
'use strict';
const D = {"S":{"p_idle":{"src":"assets/survival/spr/p_idle.png","frames":6},"p_attack":{"src":"assets/survival/spr/p_attack.png","frames":5},"p_hurt":{"src":"assets/survival/spr/p_hurt.png","frames":2},"p_dead":{"src":"assets/survival/spr/p_dead.png","frames":4},"p_walk":{"src":"assets/survival/spr/p_walk.png","frames":8},"p_run":{"src":"assets/survival/spr/p_run.png","frames":8},"w_white_idle":{"src":"assets/survival/spr/w_white_idle.png","frames":8},"w_white_walk":{"src":"assets/survival/spr/w_white_walk.png","frames":11},"w_white_run":{"src":"assets/survival/spr/w_white_run.png","frames":9},"w_white_attack":{"src":"assets/survival/spr/w_white_attack.png","frames":6},"w_white_hurt":{"src":"assets/survival/spr/w_white_hurt.png","frames":2},"w_white_dead":{"src":"assets/survival/spr/w_white_dead.png","frames":2},"w_black_idle":{"src":"assets/survival/spr/w_black_idle.png","frames":8},"w_black_walk":{"src":"assets/survival/spr/w_black_walk.png","frames":11},"w_black_run":{"src":"assets/survival/spr/w_black_run.png","frames":9},"w_black_attack":{"src":"assets/survival/spr/w_black_attack.png","frames":6},"w_black_hurt":{"src":"assets/survival/spr/w_black_hurt.png","frames":2},"w_black_dead":{"src":"assets/survival/spr/w_black_dead.png","frames":2},"w_red_idle":{"src":"assets/survival/spr/w_red_idle.png","frames":8},"w_red_walk":{"src":"assets/survival/spr/w_red_walk.png","frames":11},"w_red_run":{"src":"assets/survival/spr/w_red_run.png","frames":9},"w_red_attack":{"src":"assets/survival/spr/w_red_attack.png","frames":6},"w_red_hurt":{"src":"assets/survival/spr/w_red_hurt.png","frames":2},"w_red_dead":{"src":"assets/survival/spr/w_red_dead.png","frames":2},"b0_idle":{"src":"assets/survival/spr/b0_idle.png","frames":6},"b0_walk":{"src":"assets/survival/spr/b0_walk.png","frames":8},"b0_attack":{"src":"assets/survival/spr/b0_attack.png","frames":6},"b0_hurt":{"src":"assets/survival/spr/b0_hurt.png","frames":2},"b0_dead":{"src":"assets/survival/spr/b0_dead.png","frames":3},"b1_idle":{"src":"assets/survival/spr/b1_idle.png","frames":9},"b1_walk":{"src":"assets/survival/spr/b1_walk.png","frames":8},"b1_attack":{"src":"assets/survival/spr/b1_attack.png","frames":5},"b1_hurt":{"src":"assets/survival/spr/b1_hurt.png","frames":3},"b1_dead":{"src":"assets/survival/spr/b1_dead.png","frames":5},"b2_idle":{"src":"assets/survival/spr/b2_idle.png","frames":6},"b2_walk":{"src":"assets/survival/spr/b2_walk.png","frames":9},"b2_attack":{"src":"assets/survival/spr/b2_attack.png","frames":4},"b2_hurt":{"src":"assets/survival/spr/b2_hurt.png","frames":3},"b2_dead":{"src":"assets/survival/spr/b2_dead.png","frames":6},"b3_idle":{"src":"assets/survival/spr/b3_idle.png","frames":6},"b3_walk":{"src":"assets/survival/spr/b3_walk.png","frames":8},"b3_attack":{"src":"assets/survival/spr/b3_attack.png","frames":4},"b3_hurt":{"src":"assets/survival/spr/b3_hurt.png","frames":3},"b3_dead":{"src":"assets/survival/spr/b3_dead.png","frames":3},"b4_idle":{"src":"assets/survival/spr/b4_idle.png","frames":5},"b4_walk":{"src":"assets/survival/spr/b4_walk.png","frames":9},"b4_attack":{"src":"assets/survival/spr/b4_attack.png","frames":4},"b4_hurt":{"src":"assets/survival/spr/b4_hurt.png","frames":2},"b4_dead":{"src":"assets/survival/spr/b4_dead.png","frames":6},"b5_idle":{"src":"assets/survival/spr/b5_idle.png","frames":10},"b5_walk":{"src":"assets/survival/spr/b5_walk.png","frames":12},"b5_attack":{"src":"assets/survival/spr/b5_attack.png","frames":5},"b5_hurt":{"src":"assets/survival/spr/b5_hurt.png","frames":3},"b5_dead":{"src":"assets/survival/spr/b5_dead.png","frames":5},"b6_idle":{"src":"assets/survival/spr/b6_idle.png","frames":10},"b6_walk":{"src":"assets/survival/spr/b6_walk.png","frames":12},"b6_attack":{"src":"assets/survival/spr/b6_attack.png","frames":5},"b6_hurt":{"src":"assets/survival/spr/b6_hurt.png","frames":3},"b6_dead":{"src":"assets/survival/spr/b6_dead.png","frames":5},"b7_idle":{"src":"assets/survival/spr/b7_idle.png","frames":10},"b7_walk":{"src":"assets/survival/spr/b7_walk.png","frames":12},"b7_attack":{"src":"assets/survival/spr/b7_attack.png","frames":4},"b7_hurt":{"src":"assets/survival/spr/b7_hurt.png","frames":3},"b7_dead":{"src":"assets/survival/spr/b7_dead.png","frames":5},"b8_idle":{"src":"assets/survival/spr/b8_idle.png","frames":7},"b8_walk":{"src":"assets/survival/spr/b8_walk.png","frames":13},"b8_attack":{"src":"assets/survival/spr/b8_attack.png","frames":16},"b8_hurt":{"src":"assets/survival/spr/b8_hurt.png","frames":3},"b8_dead":{"src":"assets/survival/spr/b8_dead.png","frames":3},"b9_idle":{"src":"assets/survival/spr/b9_idle.png","frames":7},"b9_walk":{"src":"assets/survival/spr/b9_walk.png","frames":13},"b9_attack":{"src":"assets/survival/spr/b9_attack.png","frames":16},"b9_hurt":{"src":"assets/survival/spr/b9_hurt.png","frames":3},"b9_dead":{"src":"assets/survival/spr/b9_dead.png","frames":3},"b10_idle":{"src":"assets/survival/spr/b10_idle.png","frames":7},"b10_walk":{"src":"assets/survival/spr/b10_walk.png","frames":13},"b10_attack":{"src":"assets/survival/spr/b10_attack.png","frames":16},"b10_hurt":{"src":"assets/survival/spr/b10_hurt.png","frames":3},"b10_dead":{"src":"assets/survival/spr/b10_dead.png","frames":3}},"bosses":["Samurai Bayangan","Pemanah Samurai","Samurai","Petarung Shinobi","Komandan Samurai","Minotaur I","Minotaur II","Minotaur III","Gorgon I","Gorgon II","Gorgon III"]};
const S = D.S, BOSSES = D.bosses;
const ZB = 0.85; // zoom dasar kamera (makin kecil = area terlihat makin luas)
const FR = 128, SC = 1.0, K = SC / 0.8, WW = 4320, WH = 1920 * 1.5, BOSS_EVERY = 120;
const frame = document.getElementById('frame');
const MK = () => window.MKGame;

// ---------- CSS & DOM ----------
const st = document.createElement('style');
st.textContent = `
#svLayer{position:absolute;inset:0;z-index:40;background:var(--panel,#1b1530);display:none;flex-direction:column;touch-action:none;user-select:none;-webkit-user-select:none;overflow:hidden;font-family:'VT323',monospace;color:#fff}
#svLayer.on{display:flex;animation:svFade .6s ease}
@keyframes svFade{from{opacity:0}to{opacity:1}}
.sv-title{display:flex;justify-content:space-between;align-items:center;padding:12px 16px;border-bottom:3px solid var(--line,#3a2f66)}
.sv-title h1{font-family:'Press Start 2P',monospace;font-size:16px;margin:0;color:var(--gold,#ffd75e);text-shadow:2px 2px #000}
.sv-right{display:flex;align-items:center;gap:8px}
#svPause{width:38px;height:38px;background:transparent;color:#fff;border:3px solid var(--line,#3a2f66);border-radius:6px;font-size:14px}
#svBoss{font-family:'Press Start 2P',monospace;font-size:10px;border:3px solid var(--line,#3a2f66);padding:10px 10px;border-radius:6px;text-shadow:1px 1px #000;white-space:nowrap}
#svBoss.warn{color:#ff5a5a;border-color:#ff5a5a;animation:svBlink .5s infinite alternate}
@keyframes svBlink{to{opacity:.45}}
.sv-hud2{display:flex;flex-direction:column;gap:5px;padding:8px 16px 9px;border-bottom:3px solid var(--line,#3a2f66)}
.sv-row{display:flex;align-items:center;gap:8px;font-size:17px}
.sv-row b{font-family:'Press Start 2P',monospace;font-size:9px;min-width:40px;color:#7fe9f3;text-shadow:1px 1px #000}
.sv-bar{position:relative;flex:1;height:16px;background:#120a1c;border:2px solid var(--line,#3a2f66)}
.sv-bar i{position:absolute;left:0;top:0;bottom:0;width:100%;transition:width .2s}
.sv-bar.hp i{background:linear-gradient(90deg,#2aa7b3,#5ce1e6)} .sv-bar.xp i{background:linear-gradient(#ffe27a,#d9a21b)}
.sv-bar span{position:absolute;inset:0;text-align:center;font-size:14px;line-height:13px;text-shadow:1px 1px #000}
.sv-stage{position:relative;flex:1;min-height:0;background:#000;border-bottom:3px solid var(--line,#3a2f66)}
#svCanvas{position:absolute;inset:0;width:100%;height:100%;display:block}
.sv-panel{height:172px;flex:none;display:flex;align-items:center;justify-content:space-between;padding:0 22px;background:var(--panel,#1b1530)}
.sv-mid{flex:1;text-align:center;font-size:17px;color:#b9a9e6;padding:0 10px;line-height:1.15}
#svJoy{position:relative;flex:none;width:126px;height:126px;border-radius:50%;background:radial-gradient(#ffffff1f,#ffffff0a);border:3px solid #ffffff55;touch-action:none}
#svKnob{position:absolute;left:50%;top:50%;width:54px;height:54px;margin:-27px 0 0 -27px;border-radius:50%;background:radial-gradient(#fff,#9fe7f0 60%,#4aa6b5);box-shadow:0 2px 8px #000a;pointer-events:none}
#svAtk{flex:none;width:96px;height:96px;border-radius:50%;background:radial-gradient(#ff8a5e,#c8321f);border:4px solid #ffd2b8;color:#fff;font-size:40px;touch-action:none;box-shadow:0 4px 14px #000a}
#svAtk:active,#svAtk.hold{transform:scale(.92);filter:brightness(1.25)}
.sv-banner{position:absolute;left:0;right:0;top:6%;text-align:center;pointer-events:none;opacity:0;text-shadow:3px 3px #000,0 0 18px #000}
.sv-banner h2{font-family:'Press Start 2P',monospace;font-size:18px;margin:0 0 8px;color:#ffd75e;line-height:1.4;padding:0 10px}
.sv-banner p{font-size:21px;margin:0;color:#e9dcff}
.sv-banner.show{animation:svBan var(--ms,2400ms) ease forwards}
@keyframes svBan{0%{opacity:0;transform:scale(1.5)}12%{opacity:1;transform:scale(1)}82%{opacity:1}100%{opacity:0}}
.sv-ov{position:absolute;inset:0;background:#05030cd9;display:none;flex-direction:column;align-items:center;justify-content:center;gap:12px;text-align:center;padding:16px;z-index:5}
.sv-ov.on{display:flex}
.sv-ov h2{font-family:'Press Start 2P',monospace;font-size:22px;margin:0 0 6px;color:#ffd75e}
.sv-ov h2.lose{color:#ff5a5a}
.sv-ov p{font-size:22px;margin:0;line-height:1.25}
.sv-ov button{font-family:'Press Start 2P',monospace;font-size:12px;padding:13px 18px;min-width:210px;background:#241a3d;color:#fff;border:3px solid #7a64b0;border-radius:6px}
.sv-ov button.pri{background:#1f6f7a;border-color:#8ff0ff}
`;
document.head.appendChild(st);
const layer = document.createElement('div');
layer.id = 'svLayer';
layer.innerHTML = `
<div class="sv-title"><h1>SURVIVAL</h1><div class="sv-right"><div id="svBoss"></div><button id="svPause" aria-label="Jeda">❚❚</button></div></div>
<div class="sv-hud2">
 <div class="sv-row"><b id="svLv">LV 1</b><div class="sv-bar hp"><i id="svHp"></i><span id="svHpT"></span></div></div>
 <div class="sv-row"><b>EXP</b><div class="sv-bar xp"><i id="svXp"></i><span id="svXpT"></span></div></div></div>
<div class="sv-stage"><canvas id="svCanvas"></canvas><div class="sv-banner" id="svBanner"></div></div>
<div class="sv-panel"><div id="svJoy"><div id="svKnob"></div></div>
 <div class="sv-mid"></div>
 <button id="svAtk" aria-label="Serang">⚔</button></div>
<div class="sv-ov" id="svPauseOv"><h2>JEDA</h2><button class="pri" id="svResume">▶ LANJUTKAN</button><button id="svQuit">✕ KE MENU</button></div>
<div class="sv-ov" id="svOver"><h2 class="lose">GAME OVER</h2><p id="svStats"></p><button class="pri" id="svRetry">↻ MAIN LAGI</button><button id="svMenu">✕ KE MENU</button></div>`;
frame.appendChild(layer);
const $ = (id) => document.getElementById(id);
const cv = $('svCanvas'), ctx = cv.getContext('2d');

// ---------- util ----------
const rnd = (a, b) => a + Math.random() * (b - a);
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const IMG = {}, MISSING = [];
const okImg = (i) => i && i.complete && i.naturalWidth > 0;
let cw = 0, ch = 0, dpr = 1, raf = 0, last = 0, G = null, cfg = null, loaded = false;
function loadAll(){
  if(loaded) return Promise.resolve();
  const list = Object.keys(S).map(k => [k, S[k].src]).concat([['map', 'assets/survival/dungeon-map.jpg'], ['slash', 'assets/slash.png']]);
  MISSING.length = 0;
  return Promise.all(list.map(([k, src]) => new Promise(res => { const i = new Image(); i.onload = () => res(); i.onerror = () => { MISSING.push(src); res(); }; i.src = src; IMG[k] = i; }))).then(() => { loaded = true; if(MISSING.length) console.error('Gagal memuat:', MISSING.slice(0, 5)); });
}
function resize(){
  dpr = Math.min(2, window.devicePixelRatio || 1);
  const r = cv.parentNode; cw = r.clientWidth; ch = r.clientHeight;
  cv.width = Math.round(cw * dpr); cv.height = Math.round(ch * dpr);
}
window.addEventListener('resize', () => { if(G) resize(); });

// cahaya ambient (obor, kristal, kolam) — koordinat peta asli, dicerminkan 4x mengikuti peta
const LIGHTS = [];
[[190,328,'255,170,60',70],[293,282,'255,170,60',70],[547,265,'255,170,60',70],[575,545,'255,170,60',70],[375,632,'255,170,60',70],[708,718,'255,170,60',75],[858,742,'255,170,60',75],[1048,140,'255,170,60',70],[1190,318,'255,170,60',70],[1222,735,'255,170,60',70],[570,892,'255,170,60',70],
 [938,478,'90,255,120',95],[556,765,'90,255,120',95],[470,125,'190,90,255',85],[160,825,'190,90,255',85],[780,560,'255,70,200',120]]
 .forEach(([x,y,c,r]) => { for(let i = 0; i < 3; i++) for(let j = 0; j < 3; j++) LIGHTS.push({x:i * 1440 + (i % 2 ? 1440 - x : x), y:j * 960 + (j % 2 ? 960 - y : y), c, r, ph:Math.random()*6}); });

// ---------- input ----------
const keys = {}; let joy = {x:0, y:0}, kbAtk = false, atkHeld = false;
addEventListener('keydown', e => { keys[e.code] = true; if(e.code === 'Space' || e.code === 'KeyJ') kbAtk = true; });
addEventListener('keyup', e => { keys[e.code] = false; if(e.code === 'Space' || e.code === 'KeyJ') kbAtk = false; });
(function(){
  const base = $('svJoy'), knob = $('svKnob'); let pid = null;
  function mv(e){
    const r = base.getBoundingClientRect(), R = r.width / 2;
    let dx = e.clientX - (r.left + R), dy = e.clientY - (r.top + R);
    const d = Math.hypot(dx, dy), k = d > R ? R / d : 1; dx *= k; dy *= k;
    knob.style.transform = `translate(${dx}px,${dy}px)`;
    const m = Math.hypot(dx, dy) / R; joy = m < 0.12 ? {x:0, y:0} : {x: dx / R, y: dy / R};
  }
  base.addEventListener('pointerdown', e => { pid = e.pointerId; base.setPointerCapture(pid); mv(e); e.preventDefault(); });
  base.addEventListener('pointermove', e => { if(e.pointerId === pid) mv(e); });
  const up = e => { if(e.pointerId !== pid) return; pid = null; joy = {x:0, y:0}; knob.style.transform = ''; };
  base.addEventListener('pointerup', up); base.addEventListener('pointercancel', up);
  const ab = $('svAtk');
  ab.addEventListener('pointerdown', e => { atkHeld = true; ab.classList.add('hold'); ab.setPointerCapture(e.pointerId); e.preventDefault(); });
  const au = () => { atkHeld = false; ab.classList.remove('hold'); };
  ab.addEventListener('pointerup', au); ab.addEventListener('pointercancel', au);
})();

// ---------- game ----------
const needFor = lv => Math.round(30 * Math.pow(1.22, lv - 1) + 10 * lv);
const tierOf = () => Math.floor(G.p.lv / 5);
const dmgMul = () => 1 + 0.15 * (G.p.lv - 1);
const MON = [
  {c:'white', hp:30, dmg:6,  spd:72, exp:8},
  {c:'black', hp:55, dmg:10, spd:88, exp:14},
  {c:'red',   hp:90, dmg:15, spd:104, exp:24},
];
function banner(t, s, ms){
  const b = $('svBanner'); b.style.setProperty('--ms', (ms || 2400) + 'ms');
  b.innerHTML = `<h2>${t}</h2>${s ? `<p>${s}</p>` : ''}`;
  b.classList.remove('show'); void b.offsetWidth; b.classList.add('show');
}
function newGame(){
  G = { t:0, bossT:BOSS_EVERY, bossN:0, boss:null, kills:0, bossKills:0, mons:[], fx:[], txt:[], spT:1.2, intro:2.6,
        over:false, paused:false, mode:'play', flash:0, ptick:0,
        p:{x:1830, y:1270, hp:100, max:100, lv:1, exp:0, need:needFor(1), face:1, anim:'idle', t:0, atkT:-1, atkHit:false, cd:0, hurt:0, inv:0, dead:false, deadT:0} };
}
function addText(x, y, txt, col){ G.txt.push({x, y, txt, col: col || '#fff', t:0}); }
function gainExp(n){
  const p = G.p; p.exp += n;
  while(p.exp >= p.need){
    p.exp -= p.need; p.lv++; p.need = needFor(p.lv); p.max = 100 + 20 * (p.lv - 1);
    p.hp = Math.min(p.max, p.hp + p.max * 0.35);
    addText(p.x, p.y - 90 * K, 'LEVEL UP!', '#ffe27a');
    if(p.lv % 5 === 0) banner('KESULITAN NAIK!', 'Monster jadi lebih kuat &amp; lebih tebal', 2600);
    else banner('LEVEL ' + p.lv, 'Damage &amp; HP meningkat', 1600);
  }
}
function offscreen(dist){
  const p = G.p, vw = cw / ZB, vh = ch / ZB;
  for(let i = 0; i < 14; i++){
    const a = Math.random() * Math.PI * 2, x = p.x + Math.cos(a) * dist, y = p.y + Math.sin(a) * dist;
    const out = Math.abs(x - p.x) > vw / 2 + 40 || Math.abs(y - p.y) > vh / 2 + 40;
    if(out && x > 40 && x < WW - 40 && y > 60 && y < WH - 20) return {x, y};
  }
  return {x: clamp(p.x + (p.x < WW / 2 ? 1 : -1) * dist, 40, WW - 40), y: clamp(p.y + (p.y < WH / 2 ? 1 : -1) * dist, 60, WH - 20)};
}
function spawnMon(){
  const lv = G.p.lv, r = Math.random();
  const ti = lv < 4 ? 0 : lv < 9 ? (r < 0.6 ? 0 : 1) : (r < 0.4 ? 0 : r < 0.75 ? 1 : 2);
  const T = MON[ti], t = tierOf(), pos = offscreen(Math.hypot(cw, ch) / ZB / 2 + 60);
  const hp = Math.round(T.hp * (1 + 0.4 * t) * (1 + 0.04 * lv));
  G.mons.push({x:pos.x, y:pos.y, c:T.c, hp, max:hp, dmg:Math.round(T.dmg * (1 + 0.3 * t)), spd:T.spd * 1.2 * rnd(0.9, 1.1), exp:Math.round(T.exp * (1 + 0.1 * t)),
               st:'move', t:0, cd:rnd(0, 0.6), hitDone:false, face:1, kx:0, ky:0});
}
function spawnBoss(){
  const i = G.bossN % BOSSES.length, cycle = Math.floor(G.bossN / BOSSES.length);
  const scale = (1 + 0.4 * i) * Math.pow(5, cycle), pos = offscreen(Math.hypot(cw, ch) / ZB / 2 + 220);
  G.boss = {x:pos.x, y:pos.y, i, name:BOSSES[i] + (cycle ? ' ×' + Math.pow(5, cycle) : ''), scale, t:0, face:1};
  banner('⚠ BOS MENDEKAT!', G.boss.name, 2600);
  try{ MK().audio.play('atkEnemy'); }catch(e){}
}
function hurtPlayer(dmg){
  const p = G.p; if(p.inv > 0 || p.dead) return;
  p.hp -= dmg; p.inv = 0.55; p.hurt = 0.3; G.flash = 1; addText(p.x, p.y - 80 * K, '-' + dmg, '#ff6b6b');
  try{ MK().audio.play('hit'); }catch(e){}
  if(p.hp <= 0){ p.hp = 0; p.dead = true; p.deadT = 0; }
}
function playerAttack(){
  const p = G.p; p.atkT = 0; p.atkHit = false; p.cd = 0.5;
  let best = null, bd = 150 * K;
  for(const m of G.mons){ if(m.st === 'dead') continue; const d = Math.hypot(m.x - p.x, m.y - p.y); if(d < bd){ bd = d; best = m; } }
  if(best) p.face = best.x >= p.x ? 1 : -1;
  try{ MK().audio.play('atkPlayer'); }catch(e){}
}
function playerHit(){
  const p = G.p; let hit = false;
  for(const m of G.mons){
    if(m.st === 'dead') continue;
    const dx = (m.x - p.x) * p.face, dy = m.y - p.y;
    if(dx > -20 * K && dx < 100 * K && Math.abs(dy) < 60 * K){
      const dmg = Math.max(1, Math.round(14 * dmgMul() + rnd(-2, 3)));
      m.hp -= dmg; hit = true; m.st = 'hurt'; m.t = 0; m.hitDone = true;
      const k = Math.hypot(m.x - p.x, m.y - p.y) || 1; m.kx = (m.x - p.x) / k * 150; m.ky = (m.y - p.y) / k * 150;
      addText(m.x, m.y - 70 * K, '-' + dmg, '#fff');
      G.fx.push({x:m.x, y:m.y - 30 * K, t:0, f:p.face < 0});
      if(m.hp <= 0){ m.st = 'dead'; m.t = 0; G.kills++; gainExp(m.exp); addText(m.x, m.y - 90 * K, '+' + m.exp + ' EXP', '#ffe27a'); }
    }
  }
  if(hit){ try{ MK().audio.play('hit'); }catch(e){} }
}
function startBossBattle(){
  const b = G.boss, g = G, cycle = Math.floor(g.bossN / BOSSES.length);
  const pre = 'b' + b.i + '_', an = (k, dur) => ({src:S[pre + k].src, frames:S[pre + k].frames, dur});
  const atkFr = S[pre + 'attack'].frames;
  g.mode = 'battle'; cancelAnimationFrame(raf);
  banner('⚔ BOS MENANTANG!', b.name, 900);
  setTimeout(() => {
    if(G !== g) return;
    layer.classList.remove('on');
    MK().startBattle({
      name:b.name, difficulty:cfg.difficulty, roundMs:cfg.roundMs,
      playerHP:Math.max(1, Math.ceil(g.p.hp)), playerMax:g.p.max, playerMul:dmgMul(),
      enemyMax:Math.round(120 * b.scale), enemyMul:b.scale,
      anims:{ idle:an('idle', (S[pre + 'idle'].frames * 0.16).toFixed(2) + 's'),
              attack:an('attack', Math.min(1.1, Math.max(0.55, atkFr * 0.09)).toFixed(2) + 's'),
              hurt:an('hurt', '.3s'), dead:an('dead', (S[pre + 'dead'].frames * 0.2).toFixed(2) + 's') },
      onEnd:(won, res) => { if(G !== g) return; battleDone(won, res, b, cycle); },
      onQuit:() => stop('noMenu'),
    });
  }, 900);
}
function battleDone(won, res, b){
  frame.classList.add('menu-mode');
  layer.classList.add('on'); resize();
  MK().audio.playBgm();
  if(!won){ G.p.hp = 0; G.p.dead = true; G.p.deadT = 1; G.mode = 'play'; G.over = true; showOver(); return; }
  const p = G.p; p.hp = Math.min(p.max, res.playerHP + p.max * 0.25); p.inv = 2.5;
  const xp = Math.round(150 * (1 + 0.5 * G.bossN)); G.bossKills++; G.bossN++; G.boss = null; G.bossT = BOSS_EVERY; G.mons = [];
  G.mode = 'play'; gainExp(xp);
  banner('BOS DIKALAHKAN!', '+' + xp + ' EXP', 2400);
  last = performance.now(); raf = requestAnimationFrame(loop);
}
function showOver(){
  const t = Math.floor(G.t), mm = Math.floor(t / 60), ss = String(t % 60).padStart(2, '0');
  $('svStats').innerHTML = `Level ${G.p.lv}<br>Waktu bertahan ${mm}:${ss}<br>Monster dikalahkan ${G.kills}<br>Bos dikalahkan ${G.bossKills}`;
  $('svOver').classList.add('on');
  try{ MK().audio.play('gameover'); MK().audio.stopBgm(); }catch(e){}
}

function update(dt){
  if(!cw || !ch) resize();
  const p = G.p;
  if(G.intro > 0){ G.intro -= dt; return; }
  G.t += dt; G.flash = Math.max(0, G.flash - dt * 3);
  p.t += dt; p.cd -= dt; p.inv -= dt; p.hurt -= dt;
  if(p.dead){ p.deadT += dt; if(p.deadT > 1.3 && !G.over){ G.over = true; showOver(); } }
  else {
    // gerak (analog + keyboard)
    const hx = (joy.x || 0) + ((keys.KeyD || keys.ArrowRight) ? 1 : 0) - ((keys.KeyA || keys.ArrowLeft) ? 1 : 0);
    const hy = (joy.y || 0) + ((keys.KeyS || keys.ArrowDown) ? 1 : 0) - ((keys.KeyW || keys.ArrowUp) ? 1 : 0);
    const hm = Math.hypot(hx, hy), mag = Math.min(1, hm); const ux = hm ? hx / hm : 0, uy = hm ? hy / hm : 0;
    const atking = p.atkT >= 0, sp = 180 * mag * (atking ? 0.45 : 1);
    if(p.hurt <= 0){ p.x = clamp(p.x + ux * sp * dt, 24, WW - 24); p.y = clamp(p.y + uy * sp * dt, 70, WH - 8); }
    if(mag > 0.1 && !atking && Math.abs(ux) > 0.15) p.face = ux > 0 ? 1 : -1;
    if((atkHeld || kbAtk) && p.cd <= 0 && !atking) playerAttack();
    if(atking){ p.atkT += dt; if(!p.atkHit && p.atkT > 0.2){ p.atkHit = true; playerHit(); } if(p.atkT > 0.42) p.atkT = -1; }
    p.anim = p.hurt > 0 ? 'hurt' : atking ? 'attack' : mag > 0.1 ? (mag > 0.65 ? 'run' : 'walk') : 'idle';
  }
  // spawn monster
  G.spT -= dt; const cap = 8 + Math.min(8, Math.floor(p.lv / 2));
  if(G.spT <= 0 && G.mons.filter(m => m.st !== 'dead').length < cap){ spawnMon(); G.spT = Math.max(0.55, 1.8 - p.lv * 0.07 - tierOf() * 0.05); }
  // monster AI
  for(const m of G.mons){
    m.t += dt; m.cd -= dt;
    if(m.st === 'dead') continue;
    const dx = p.x - m.x, dy = p.y - m.y, d = Math.hypot(dx, dy) || 1;
    if(m.st === 'hurt'){ m.x += m.kx * dt; m.y += m.ky * dt; m.kx *= 0.88; m.ky *= 0.88; if(m.t > 0.3){ m.st = 'move'; m.t = 0; } }
    else if(m.st === 'attack'){
      if(!m.hitDone && m.t > 0.35){ m.hitDone = true; if(!p.dead && Math.hypot(p.x - m.x, p.y - m.y) < 72 * K) hurtPlayer(m.dmg); }
      if(m.t > 0.6){ m.st = 'move'; m.t = 0; m.cd = 1.0; }
    } else {
      if(d > 46 * K){ m.x += dx / d * m.spd * dt; m.y += dy / d * m.spd * dt; } else if(m.cd <= 0 && !p.dead){ m.st = 'attack'; m.t = 0; m.hitDone = false; }
      m.face = dx >= 0 ? 1 : -1;
    }
    for(const o of G.mons){ if(o !== m && o.st !== 'dead'){ const ox = m.x - o.x, oy = m.y - o.y, od = Math.hypot(ox, oy); if(od > 0 && od < 30 * K){ m.x += ox / od * 40 * dt; m.y += oy / od * 40 * dt; } } }
  }
  G.mons = G.mons.filter(m => !(m.st === 'dead' && m.t > 1.6));
  // bos
  if(!G.boss){ G.bossT -= dt; if(G.bossT <= 0) spawnBoss(); }
  else if(!p.dead){
    const b = G.boss, dx = p.x - b.x, dy = p.y - b.y, d = Math.hypot(dx, dy) || 1; b.t += dt; b.face = dx >= 0 ? 1 : -1;
    b.x += dx / d * 75 * dt; b.y += dy / d * 75 * dt;
    if(d < 78 * K && G.mode === 'play') startBossBattle();
  }
  G.fx.forEach(f => f.t += dt); G.fx = G.fx.filter(f => f.t < 0.4);
  G.txt.forEach(t => t.t += dt); G.txt = G.txt.filter(t => t.t < 0.9);
  hud();
}
function hud(){
  const p = G.p;
  $('svLv').textContent = 'LV ' + p.lv;
  $('svHp').style.width = Math.max(0, p.hp / p.max * 100) + '%'; $('svHpT').textContent = Math.ceil(p.hp) + ' / ' + p.max;
  $('svXp').style.width = p.exp / p.need * 100 + '%'; $('svXpT').textContent = p.exp + ' / ' + p.need;
  const b = $('svBoss');
  if(G.boss){ b.textContent = '⚠ BOS MENDEKAT'; b.className = 'warn'; }
  else { const s = Math.max(0, Math.ceil(G.bossT)); b.textContent = 'BOS ' + Math.floor(s / 60) + ':' + String(s % 60).padStart(2, '0'); b.className = ''; }
}

// ---------- render ----------
function spr(key, t, fps, loop, x, y, flip, sc, alpha){
  const s = S[key], img = IMG[key]; if(!s) return;
  if(!okImg(img)){ // sprite tidak ada: gambar siluet agar game tetap jalan
    ctx.save(); ctx.globalAlpha = alpha == null ? 1 : alpha; ctx.fillStyle = key[0] === 'p' ? '#5ce1e6' : key[0] === 'w' ? '#b04a3a' : '#a050e0';
    ctx.fillRect(x - 14 * sc, y - 70 * sc, 28 * sc, 70 * sc); ctx.restore(); return;
  }
  const n = s.frames; let i = Math.floor(t * fps); i = loop ? i % n : Math.min(n - 1, i);
  const w = FR * sc;
  ctx.save(); ctx.globalAlpha = alpha == null ? 1 : alpha; ctx.translate(x, y); if(flip) ctx.scale(-1, 1);
  ctx.drawImage(img, i * FR, 0, FR, FR, -w / 2, -w + 3, w, w); ctx.restore();
}
function bar(x, y, w, v, col){
  ctx.fillStyle = '#000'; ctx.fillRect(x - w / 2 - 1, y - 1, w + 2, 6);
  ctx.fillStyle = '#3a1020'; ctx.fillRect(x - w / 2, y, w, 4);
  ctx.fillStyle = col; ctx.fillRect(x - w / 2, y, w * clamp(v, 0, 1), 4);
}
function render(){
  const p = G.p, e = Math.min(1, Math.max(0, G.intro) / 2.4), Z = ZB * (1 + 0.9 * e * e * e);
  const vw = cw / Z, vh = ch / Z, tx = p.x - vw / 2, ty = p.y - 30 - vh / 2;
  if(!G.cam) G.cam = {x:tx, y:ty};
  const k = G.intro > 0 ? 1 : 1 - Math.exp(-9 * (G.dt || 0.016)); // halus mengikuti player
  G.cam.x += (tx - G.cam.x) * k; G.cam.y += (ty - G.cam.y) * k;
  const cx = clamp(G.cam.x, 0, WW - vw), cy = clamp(G.cam.y, 0, WH - vh);
  ctx.setTransform(dpr * Z, 0, 0, dpr * Z, -cx * dpr * Z, -cy * dpr * Z);
  ctx.imageSmoothingEnabled = true; if(okImg(IMG.map)) ctx.drawImage(IMG.map, 0, 0); else { ctx.fillStyle = '#4a3f55'; ctx.fillRect(cx, cy, vw, vh); }
  ctx.imageSmoothingEnabled = false;
  const list = [];
  for(const m of G.mons) list.push({y:m.y, f:() => {
    const k = 'w_' + m.c + '_', dead = m.st === 'dead';
    if(dead) spr(k + 'dead', m.t, 6, false, m.x, m.y, m.face < 0, SC * 0.9, clamp(1.6 - m.t, 0, 1));
    else {
      const a = m.st === 'attack' ? 'attack' : m.st === 'hurt' ? 'hurt' : 'walk';
      spr(k + a, m.t + (a === 'walk' ? m.x * 0.01 : 0), a === 'attack' ? 10 : a === 'hurt' ? 7 : 10, a === 'walk', m.x, m.y, m.face < 0, SC * 0.9);
      bar(m.x, m.y - 58 * K, 34 * K, m.hp / m.max, '#ff4a4a');
    }
  }});
  if(G.boss){ const b = G.boss; list.push({y:b.y, f:() => {
    spr('b' + b.i + '_walk', b.t, 9, true, b.x, b.y, b.face < 0, SC * 1.3);
    ctx.fillStyle = '#ff5a5a'; ctx.font = '9px "Press Start 2P",monospace'; ctx.textAlign = 'center'; ctx.fillText('BOS', b.x, b.y - 118 * K);
  }}); }
  list.push({y:p.y, f:() => {
    const a = p.anim, fps = {idle:6, walk:10, run:14, attack:12, hurt:7, dead:5}[a];
    if(p.dead) spr('p_dead', p.deadT, 5, false, p.x, p.y, p.face < 0, SC);
    else {
      const al = p.inv > 0 && Math.floor(G.t * 20) % 2 ? 0.45 : 1;
      spr('p_' + a, a === 'attack' ? p.atkT : p.t, fps, a !== 'hurt' && a !== 'attack', p.x, p.y, p.face < 0, SC, al);
      bar(p.x, p.y - 74 * K, 48, p.hp / p.max, '#4ade80'); bar(p.x, p.y - 67 * K, 48, p.exp / p.need, '#ffd75e');
    }
  }});
  list.sort((a, b) => a.y - b.y).forEach(o => o.f());
  for(const f of G.fx){ const i = Math.min(11, Math.floor(f.t / 0.4 * 12)), w = 96 * K; ctx.save(); ctx.translate(f.x, f.y); if(f.f) ctx.scale(-1, 1); if(okImg(IMG.slash)) ctx.drawImage(IMG.slash, i * 160, 0, 160, 160, -w / 2, -w / 2, w, w); ctx.restore(); }
  // suasana: tint gelap + cahaya obor/kristal
  ctx.fillStyle = 'rgba(14,6,36,.30)'; ctx.fillRect(cx, cy, vw, vh);
  ctx.globalCompositeOperation = 'lighter';
  for(const L of LIGHTS){
    if(L.x < cx - L.r * 2 || L.x > cx + vw + L.r * 2 || L.y < cy - L.r * 2 || L.y > cy + vh + L.r * 2) continue;
    const fl = 0.75 + 0.25 * Math.sin(G.t * 9 + L.ph) * Math.sin(G.t * 4.3 + L.ph * 2), g = ctx.createRadialGradient(L.x, L.y, 0, L.x, L.y, L.r * 1.6);
    g.addColorStop(0, `rgba(${L.c},${0.42 * fl})`); g.addColorStop(1, `rgba(${L.c},0)`); ctx.fillStyle = g; ctx.fillRect(L.x - L.r * 1.6, L.y - L.r * 1.6, L.r * 3.2, L.r * 3.2);
  }
  ctx.globalCompositeOperation = 'source-over';
  ctx.font = '12px "Press Start 2P",monospace'; ctx.textAlign = 'center';
  for(const t of G.txt){ ctx.globalAlpha = 1 - t.t / 0.9; ctx.fillStyle = '#000'; ctx.fillText(t.txt, t.x + 1, t.y - t.t * 40 + 1); ctx.fillStyle = t.col; ctx.fillText(t.txt, t.x, t.y - t.t * 40); }
  ctx.globalAlpha = 1;
  // layar: vinyet, flash luka, panah bos
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  const vg = ctx.createRadialGradient(cw / 2, ch / 2, Math.min(cw, ch) * 0.35, cw / 2, ch / 2, Math.max(cw, ch) * 0.75);
  vg.addColorStop(0, 'rgba(0,0,0,0)'); vg.addColorStop(1, 'rgba(0,0,0,.62)'); ctx.fillStyle = vg; ctx.fillRect(0, 0, cw, ch);
  if(G.flash > 0){ ctx.fillStyle = `rgba(255,0,0,${G.flash * 0.3})`; ctx.fillRect(0, 0, cw, ch); }
  if(G.boss){
    const sx = (G.boss.x - cx) * Z, sy = (G.boss.y - cy) * Z;
    if(sx < 0 || sx > cw || sy < 0 || sy > ch){
      const ang = Math.atan2(sy - ch / 2, sx - cw / 2), mx = cw / 2 - 26, my = ch / 2 - 26, k = Math.min(Math.abs(mx / Math.cos(ang || 1e-6)), Math.abs(my / Math.sin(ang || 1e-6)));
      ctx.save(); ctx.translate(cw / 2 + Math.cos(ang) * k, ch / 2 + Math.sin(ang) * k); ctx.rotate(ang);
      ctx.globalAlpha = 0.65 + 0.35 * Math.sin(G.t * 8); ctx.fillStyle = '#ff3a3a'; ctx.beginPath(); ctx.moveTo(16, 0); ctx.lineTo(-10, -13); ctx.lineTo(-10, 13); ctx.fill(); ctx.restore();
    }
  }
}
function loop(now){
  if(!G || G.mode !== 'play') return;
  const dt = Math.min(0.05, (now - last) / 1000); last = now; G.dt = dt;
  try{ if(!G.paused) update(dt); render(); }catch(err){ console.error(err); }
  raf = requestAnimationFrame(loop);
}

// ---------- kontrol ----------
function begin(){
  frame.classList.add('menu-mode');
  newGame(); layer.classList.add('on'); $('svOver').classList.remove('on'); $('svPauseOv').classList.remove('on');
  resize(); hud();
  if(MISSING.length) setTimeout(() => { if(G) banner('SPRITE TIDAK DITEMUKAN', 'Unggah folder assets/survival/spr', 6000); }, 3200);
  banner('MEMASUKI WILAYAH', 'BENTENG TENGKORAK<br><span style="font-size:17px;color:#bfb0e0">Bertahan hidup · bos datang tiap 2 menit</span>', 2800);
  last = performance.now(); cancelAnimationFrame(raf); raf = requestAnimationFrame(loop);
}
function start(c){
  cfg = c; MK().audio.playBgm();
  loadAll().then(begin);
}
function stop(toMenu){
  cancelAnimationFrame(raf); if(G) G.mode = 'stopped'; G = null; layer.classList.remove('on');
  $('svOver').classList.remove('on'); $('svPauseOv').classList.remove('on');
  if(toMenu !== 'noMenu') MK().toMenu();
}
$('svPause').addEventListener('click', () => { if(!G || G.over) return; G.paused = true; $('svPauseOv').classList.add('on'); try{ MK().audio.pauseBgm(); }catch(e){} });
$('svResume').addEventListener('click', () => { G.paused = false; $('svPauseOv').classList.remove('on'); try{ MK().audio.resumeBgm(); }catch(e){} last = performance.now(); });
$('svQuit').addEventListener('click', () => stop());
$('svMenu').addEventListener('click', () => stop());
$('svRetry').addEventListener('click', () => { MK().audio.playBgm(); begin(); });
addEventListener('keydown', e => { if(e.code === 'Escape' && G && G.mode === 'play' && !G.over) $('svPause').click(); });
window.Survival = { start, stop };
})();
