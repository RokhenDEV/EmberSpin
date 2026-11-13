(function () {
    'use strict';

    const LOGO = 'rokhendev-logo.png';
    const GITHUB = 'https://github.com/RokhenDEV';
    const PORTFOLIO = 'https://rokhendev.github.io/portfolio-rokhen/';
    const GH_PATH = 'M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z';

    const font = document.createElement('link');
    font.rel = 'stylesheet';
    font.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Sora:wght@500;600;700;800&display=swap';
    document.head.appendChild(font);

    const CSS = `
:root{
  --bg:#06030a; --bg2:#0b0610; --panel:#170c1c; --panel2:#10081a; --line:rgba(255,255,255,.09);
  --flame1:#ff4d57; --flame2:#ff9248; --gold:#ffd56b; --diamond:#6fd3ff; --clover:#4ade80;
  --text:#f4ecf5; --dim:#a493ad;
  --font-display:'Sora','Segoe UI',system-ui,sans-serif;
  --font-body:'Inter','Segoe UI',system-ui,sans-serif;
  --glass:linear-gradient(160deg,rgba(255,255,255,.075),rgba(255,255,255,.02));
}
body{
  background:
    radial-gradient(60% 50% at 15% 0%,rgba(255,77,87,.20),transparent 70%),
    radial-gradient(50% 45% at 92% 100%,rgba(255,146,72,.16),transparent 70%),
    radial-gradient(40% 40% at 50% 55%,rgba(110,60,200,.09),transparent 70%),
    #06030a;
}
.app{
  background:linear-gradient(180deg,rgba(26,12,32,.94),rgba(12,6,18,.97));
  border:1px solid var(--line); animation:none;
  box-shadow:0 40px 90px -30px #000,0 0 90px -34px rgba(255,77,87,.45);
}
.app::after{background:radial-gradient(ellipse at center,transparent 68%,rgba(0,0,0,.4) 100%);}
html,body{overscroll-behavior:none;}
.app{
  width:100vw!important;height:100vh!important;height:100dvh!important;border:0;border-radius:0!important;
  padding:env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left);
  -webkit-user-select:none;user-select:none;
}
.app input{-webkit-user-select:text;user-select:text;}
.app button,.app .card,.app .fire-btn,.app summary{touch-action:manipulation;-webkit-tap-highlight-color:transparent;}
@media(min-width:720px){
  .app .screen>*{width:100%;max-width:760px;margin-left:auto;margin-right:auto;}
  .app #screen-difficulty>.diff-grid{max-width:1240px;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));}
  .app .overlay .shop-panel,.app .overlay .menu-panel{max-width:560px;margin:0 auto;}
}
@media(min-width:900px){
  .app .reels-row{gap:24px;}
  .app .reel{width:clamp(110px,15vh,150px);height:clamp(136px,19vh,190px);font-size:clamp(60px,9vh,92px);}
}
.fs-btn{display:none;position:absolute;right:16px;bottom:16px;z-index:35;width:42px;height:42px;place-items:center;
  border-radius:12px;border:1px solid var(--line);background:rgba(255,255,255,.06);color:var(--text);cursor:pointer;}
.fs-btn:hover{border-color:var(--gold);color:var(--gold);}
@media(min-width:900px) and (pointer:fine){.fs-btn{display:grid;}}
.rotate-hint{display:none;position:fixed;inset:0;z-index:9999;flex-direction:column;align-items:center;justify-content:center;
  gap:14px;padding:24px;text-align:center;background:#06030a;color:var(--text);font-family:var(--font-display);}
.rotate-hint .ph{font-size:56px;animation:rotPhone 2.4s ease-in-out infinite;}
.rotate-hint p{font-size:16px;font-weight:600;}
.rotate-hint small{font-size:13px;color:var(--dim);font-family:var(--font-body);}
@keyframes rotPhone{0%,20%{transform:rotate(-90deg);}60%,100%{transform:rotate(0);}}
@media(orientation:landscape) and (pointer:coarse) and (max-height:520px){.rotate-hint{display:flex;}}
.app .screen{scrollbar-width:thin;scrollbar-color:rgba(255,255,255,.18) transparent;}

.app:not(.pixel-on) .menu-wrap h2,.app:not(.pixel-on) .intro h2,.app:not(.pixel-on) .tutorial-wrap h2,.app:not(.pixel-on) .end-card h2{font-weight:700;letter-spacing:.5px;}
.app .opening-title{text-shadow:0 0 26px rgba(255,77,87,.85),0 0 70px rgba(255,146,72,.45);}
.app:not(.pixel-on) .opening-title{font-size:36px;font-weight:800;letter-spacing:7px;color:#fff;}
.app:not(.pixel-on) .opening-sub{font-size:12px;line-height:1.5;max-width:300px;margin:0 auto 20px;}

.app .primary-btn,.app .play-btn,.app .shop-continue,.app .buy-btn{
  border-radius:999px;font-family:var(--font-display);font-weight:600;letter-spacing:.3px;
  background:linear-gradient(135deg,#ff6a4d,#ffb347);color:#1b0a06;
  box-shadow:0 8px 24px -8px rgba(255,106,77,.7),inset 0 1px 0 rgba(255,255,255,.35);
  transition:transform .15s,box-shadow .15s,filter .15s;
}
.app:not(.pixel-on) .primary-btn{font-size:13px;padding:12px 20px;}
.app .primary-btn:hover,.app .play-btn:hover,.app .shop-continue:hover{transform:translateY(-2px);filter:brightness(1.08);}
.app .primary-btn:active,.app .play-btn:active,.app .shop-continue:active{transform:scale(.97);}
.app .primary-btn.ghost{background:rgba(255,255,255,.04);border:1px solid rgba(255,146,72,.45);color:var(--flame2);box-shadow:none;}
.app .primary-btn.ghost:hover{background:rgba(255,146,72,.10);}
.app .buy-btn:disabled,.app .play-btn:disabled{background:rgba(255,255,255,.06);color:var(--dim);box-shadow:none;transform:none;filter:none;}
.app .menu-buttons{max-width:260px;gap:10px;}

.app .badge{border-radius:999px;background:rgba(255,255,255,.04);font-family:var(--font-display);font-weight:600;}
.app .icon-btn{border-radius:12px;background:rgba(255,255,255,.04);}
.app .chip-u{border-radius:8px;background:rgba(255,255,255,.05);}

.app .balance-panel,.app .bet-panel,.app .diff-card,.app .upg-card,.app .volume-control{
  background:var(--glass);border:1px solid var(--line);border-radius:20px;backdrop-filter:blur(8px);
}
.app .balance-panel{padding:12px;box-shadow:inset 0 1px 0 rgba(255,255,255,.07),0 14px 34px -22px rgba(255,200,60,.5);}
.app .balance-label{letter-spacing:3px;}
.app .balance-value{text-shadow:0 0 22px rgba(255,200,60,.45);}
.app:not(.pixel-on) .balance-value{font-size:34px;font-weight:800;}
.app .bet-panel{padding:12px 14px;}
.app .step-btn{width:38px;height:38px;border-radius:12px;background:rgba(255,255,255,.06);}
.app .step-btn:hover:not(:disabled){border-color:var(--gold);color:var(--gold);}
.app .quick-btn{border-radius:999px;padding:5px 13px;background:rgba(255,255,255,.04);}
.app .bet-value{font-weight:700;}

.app .history-dot{width:34px;height:34px;background:rgba(255,255,255,.04);border:1px solid var(--line);}
.app .history-dot.win{background:rgba(74,222,128,.18);border-color:var(--clover);box-shadow:0 0 14px -4px var(--clover);}
.app .history-dot.lose{background:rgba(255,77,87,.16);border-color:var(--flame1);box-shadow:0 0 14px -4px var(--flame1);}

.app .reels-row{gap:16px;border-radius:26px;background:radial-gradient(ellipse at center,rgba(255,77,87,.14),transparent 70%);}
.app .reel{
  width:104px;height:128px;font-size:56px;border-radius:22px;
  background:linear-gradient(180deg,rgba(255,255,255,.09),rgba(0,0,0,.55)),#0b0510;
  border:1px solid rgba(255,255,255,.15);
  box-shadow:0 16px 32px -14px #000,inset 0 0 30px rgba(255,77,87,.14),inset 0 2px 0 rgba(255,255,255,.14);
}
@media(max-width:600px){.app .reel{width:76px;height:98px;font-size:40px;border-radius:18px;}}
@media(max-width:400px){.app .reel{width:66px;height:86px;font-size:34px;}}
.app .result-msg{font-size:13px;font-weight:500;line-height:1.4;}

.app .spin-btn{
  max-width:none;padding:15px 20px;border-radius:20px;font-weight:700;
  font-family:var(--font-display);color:#2a0905;
  background:linear-gradient(135deg,#ff3d5a,#ff8a3d 55%,#ffd23f);
  box-shadow:0 14px 34px -10px rgba(255,90,60,.85),inset 0 1px 0 rgba(255,255,255,.45);
  transition:transform .15s,box-shadow .15s;
}
.app .spin-btn:hover:not(:disabled){transform:translateY(-2px);box-shadow:0 18px 40px -10px rgba(255,90,60,.95),inset 0 1px 0 rgba(255,255,255,.5);}
.app .spin-btn:active:not(:disabled){transform:scale(.98);}
.app .spin-btn:disabled{box-shadow:none;filter:grayscale(.5);}
.app:not(.pixel-on) .spin-btn{font-size:16px;letter-spacing:2px;}

.app .diff-grid{gap:12px;}
.app .diff-card{padding:14px;transition:transform .18s,box-shadow .18s,border-color .18s;}
.app .diff-card:hover:not(.locked){box-shadow:0 18px 44px -20px rgba(255,146,72,.7);}
.app .upg-card{padding:10px 12px;}
.app .paytable summary{padding:6px 0;}

.app .overlay{background:rgba(5,2,8,.72);backdrop-filter:blur(10px);}
.app .overlay .shop-panel,.app .overlay .menu-panel{
  background:linear-gradient(180deg,#1d0f24,#12081a);border:1px solid var(--line);border-bottom:none;
  border-radius:28px 28px 0 0;box-shadow:0 -24px 60px -24px rgba(255,77,87,.45);
}
.app .challenge-panel,.app .card-panel,.app .forced-bet-panel,.app .phoenix-auto-panel,.app .fire-panel{
  border-radius:28px;backdrop-filter:blur(14px);
}
.app .challenge-options button{border-radius:14px;background:rgba(255,255,255,.04);}
.app .card{border-radius:16px;}
.app .save-load-section input{border-radius:12px;background:rgba(255,255,255,.04);}

.dev-intro{position:absolute;inset:0;z-index:300;display:flex;align-items:center;justify-content:center;background:#06030a;}
.dev-intro-inner{display:flex;flex-direction:column;align-items:center;gap:22px;text-align:center;opacity:0;animation:devFlash 4s ease-in-out forwards;}
.dev-intro-inner img{width:150px;max-width:50vw;height:auto;image-rendering:auto;filter:drop-shadow(0 0 30px rgba(255,255,255,.22));}
.dev-intro-inner small{display:block;font-family:var(--font-body);font-size:14px;color:var(--dim);margin-bottom:6px;}
.dev-intro-inner b{display:block;font-family:var(--font-display);font-size:18px;color:var(--text);letter-spacing:3px;}
.app.pixel-on .dev-intro-inner small{font-size:20px;}
.app.pixel-on .dev-intro-inner b{font-size:14px;letter-spacing:2px;}
@keyframes devFlash{
  0%{opacity:0;transform:scale(.92);filter:brightness(.3);}
  28%{opacity:1;transform:scale(1);filter:brightness(1.15);}
  72%{opacity:1;transform:scale(1.02);filter:brightness(1);}
  100%{opacity:0;transform:scale(1.04);filter:brightness(.3);}
}
@keyframes devFade{0%{opacity:0;}28%,72%{opacity:1;}100%{opacity:0;}}

.app #screen-warning .warning-wrap{gap:16px;padding:8px 0;}
.app #screen-warning .warning-title{font-size:22px;margin:0 0 4px;}
.app .ld-main{font-size:15px;line-height:1.6;color:var(--text);max-width:320px;}
.app .ld-main strong{color:var(--gold);}
.app .ld-sub{font-size:13px;line-height:1.5;color:var(--dim);max-width:300px;}
.app .ld-info{font-size:11px;line-height:1.5;color:var(--dim);max-width:300px;opacity:.75;}
.app .ld-bar-wrap{width:min(280px,80%);margin-top:10px;}
.app .ld-bar{height:6px;border-radius:99px;background:rgba(255,255,255,.08);overflow:hidden;}
.app .ld-fill{height:100%;width:0;background:linear-gradient(90deg,var(--flame1),var(--flame2),var(--gold));box-shadow:0 0 14px rgba(255,146,72,.7);transition:width .1s linear;}
.app .ld-label{display:flex;justify-content:space-between;margin-top:8px;font-size:12px;color:var(--dim);}
.app .ld-fun{margin-top:16px;font-family:var(--font-display);font-size:22px;font-weight:700;color:var(--gold);text-shadow:0 0 22px rgba(255,200,60,.5);}
.app.pixel-on .ld-main{font-size:21px;}
.app.pixel-on .ld-sub{font-size:19px;}
.app.pixel-on .ld-info,.app.pixel-on .ld-label{font-size:17px;}
.app.pixel-on .ld-fun{font-size:15px;font-weight:400;}
.app.pixel-on #screen-warning .warning-title{font-size:18px;}
.warn-in{animation:warnIn .8s ease both;}
@keyframes warnIn{from{opacity:0;}to{opacity:1;}}
.dev-links{display:flex;gap:14px;justify-content:center;align-items:center;margin-top:20px;}
.dev-links a{width:48px;height:48px;border-radius:50%;display:grid;place-items:center;text-decoration:none;
  background:var(--glass);border:1px solid var(--line);transition:transform .18s,border-color .18s,box-shadow .18s;}
.dev-links a:hover,.dev-links a:focus-visible{transform:translateY(-3px);border-color:var(--flame2);
  box-shadow:0 12px 28px -10px rgba(255,146,72,.75);outline:none;}
.dev-links svg{width:24px;height:24px;fill:var(--text);}
.dev-links img{width:30px;height:34px;object-fit:contain;image-rendering:auto;}

@media(prefers-reduced-motion:reduce){.dev-intro-inner{animation-name:devFade;}.app .primary-btn,.app .spin-btn,.dev-links a{transition:none;}}
`;
    const style = document.createElement('style');
    style.textContent = CSS;
    document.head.appendChild(style);

    function buildLoading() {
        const wrap = document.querySelector('#screen-warning .warning-wrap');
        if (!wrap) return;
        wrap.innerHTML =
            '<div class="warning-title">⚠️ ATENÇÃO!</div>' +
            '<p class="ld-main"><strong>Jogo gratuito</strong>, apenas com dinheiro virtual.<br>Nenhum valor real é cobrado.</p>' +
            '<p class="ld-sub">Não é uma casa de apostas e não serve de treino para apostar.</p>' +
            '<p class="ld-info">Emojis Unicode (uso livre) · +12 anos (fantasia e sustos leves) · Código aberto</p>' +
            '<div class="ld-bar-wrap"><div class="ld-bar"><div class="ld-fill" id="ldFill"></div></div>' +
            '<div class="ld-label"><span>🐦‍🔥 Carregando…</span><span id="ldPct">0%</span></div></div>' +
            '<p class="ld-fun">Divirta-se!</p>';
    }
    function startLoading() {
        const screen = document.getElementById('screen-warning');
        const fill = document.getElementById('ldFill');
        const pct = document.getElementById('ldPct');
        screen.classList.add('warn-in');
        const total = 10000, t0 = performance.now();
        const iv = setInterval(function () {
            const p = Math.min(1, (performance.now() - t0) / total);
            fill.style.width = (p * 100) + '%';
            pct.textContent = Math.floor(p * 100) + '%';
            if (p >= 1) { clearInterval(iv); showScreen('opening'); runBootSequence(); }
        }, 100);
    }
    function startIntro() {
        const last = setTimeout(function () {}, 0);
        for (let i = 0; i <= last; i++) { clearInterval(i); clearTimeout(i); }

        buildLoading();
        const intro = document.createElement('div');
        intro.className = 'dev-intro';
        intro.innerHTML = '<div class="dev-intro-inner"><img src="' + LOGO + '" alt="Logo do RokhenDEV">' +
            '<div><small>Desenvolvido por</small><b>RokhenDEV</b></div></div>';
        appEl.appendChild(intro);
        setTimeout(function () { intro.remove(); startLoading(); }, 4000);
    }
    function devLinks() {
        const d = document.createElement('div');
        d.className = 'dev-links';
        d.innerHTML =
            '<a href="' + GITHUB + '" target="_blank" rel="noopener noreferrer" title="GitHub do RokhenDEV" aria-label="GitHub do RokhenDEV">' +
                '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="' + GH_PATH + '"/></svg></a>' +
            '<a href="' + PORTFOLIO + '" target="_blank" rel="noopener noreferrer" title="Portfólio do RokhenDEV" aria-label="Portfólio do RokhenDEV">' +
                '<img src="' + LOGO + '" alt="RokhenDEV"></a>';
        return d;
    }

    startIntro();

    const openContent = document.getElementById('openingContent');
    if (openContent) openContent.appendChild(devLinks());
    const menuWrap = document.querySelector('#screen-menu .menu-wrap');
    if (menuWrap) menuWrap.appendChild(devLinks());
    const creditsBackBtn = document.getElementById('creditsBack');
    if (creditsBackBtn) creditsBackBtn.before(devLinks());

    const credits = document.querySelector('#screen-credits .credits-text');
    if (credits) credits.innerHTML = 'Desenvolvido por <b>RokhenDEV</b>';

    const vp = document.querySelector('meta[name="viewport"]');
    if (vp) vp.content = 'width=device-width, initial-scale=1.0, viewport-fit=cover';

    const hint = document.createElement('div');
    hint.className = 'rotate-hint';
    hint.innerHTML = '<div class="ph">📱</div><p>Gire o celular para a vertical</p><small>O Ember Spin foi feito para jogar em pé.</small>';
    document.body.appendChild(hint);

    const isPhone = matchMedia('(pointer:coarse)').matches && Math.min(screen.width, screen.height) < 700;
    function isFs() { return !!(document.fullscreenElement || document.webkitFullscreenElement); }
    function enterFs() {
        const el = document.documentElement, req = el.requestFullscreen || el.webkitRequestFullscreen;
        if (!req || isFs()) return Promise.resolve();
        try { return Promise.resolve(req.call(el)).catch(function () {}); } catch (e) { return Promise.resolve(); }
    }
    function exitFs() {
        const ex = document.exitFullscreen || document.webkitExitFullscreen;
        if (ex) { try { ex.call(document); } catch (e) {} }
    }
    function lockPortrait() {
        if (screen.orientation && screen.orientation.lock) screen.orientation.lock('portrait').catch(function () {});
    }
    enterBtn.addEventListener('click', function () {
        enterFs().then(function () { if (isPhone) lockPortrait(); });
    });
    const fsBtn = document.createElement('button');
    fsBtn.className = 'fs-btn';
    fsBtn.type = 'button';
    fsBtn.title = 'Tela cheia';
    fsBtn.setAttribute('aria-label', 'Alternar tela cheia');
    fsBtn.innerHTML = '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M8 3H3v5M16 3h5v5M8 21H3v-5M16 21h5v-5"/></svg>';
    fsBtn.addEventListener('click', function () { if (isFs()) exitFs(); else enterFs(); });
    appEl.appendChild(fsBtn);

    upgradeList.addEventListener('click', function (e) {
        if (!e.target.closest('.buy-btn')) return;
        if (!state.difficulty || document.getElementById('scareOverlay')) return;
        if (state.saldo < DIFFS[state.difficulty].betMin) {
            closeShop();
            resultMsg.textContent = '🛒 Você gastou demais na loja e ficou sem saldo para apostar!';
            resultMsg.className = 'result-msg lose';
            triggerBustScare();
        }
    });
})();
