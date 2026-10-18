(function () {
  'use strict';

  /* ---- Theme toggle -------------------------------------------------- */
  var root = document.documentElement;
  function currentTheme() {
    var t = root.getAttribute('data-theme');
    if (t === 'light' || t === 'dark') return t;
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  var toggle = document.querySelector('.theme-toggle');
  if (toggle) {
    toggle.addEventListener('click', function () {
      var next = currentTheme() === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) {}
    });
  }

  /* ---- BibTeX toggles ------------------------------------------------ */
  document.addEventListener('click', function (ev) {
    var btn = ev.target.closest('.btn--bib');
    if (!btn) return;
    var pre = document.getElementById(btn.getAttribute('aria-controls'));
    if (!pre) return;
    var open = pre.hasAttribute('hidden');
    if (open) pre.removeAttribute('hidden'); else pre.setAttribute('hidden', '');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  /* ---- Publication filter (publications page) ------------------------ */
  var search = document.getElementById('pub-search');
  var selOnly = document.getElementById('pub-selected');
  var count = document.getElementById('pub-count');
  if (search || selOnly) {
    var pubs = Array.prototype.slice.call(document.querySelectorAll('.pub'));
    var groups = Array.prototype.slice.call(document.querySelectorAll('.year-group'));
    var empty = document.getElementById('pub-empty');
    var apply = function () {
      var q = (search ? search.value : '').trim().toLowerCase();
      var onlySel = selOnly ? selOnly.checked : false;
      var shown = 0;
      pubs.forEach(function (p) {
        var ok = true;
        if (onlySel && p.getAttribute('data-selected') !== 'true') ok = false;
        if (ok && q) ok = p.textContent.toLowerCase().indexOf(q) !== -1;
        p.classList.toggle('is-hidden', !ok);
        if (ok) shown++;
      });
      groups.forEach(function (g) {
        g.classList.toggle('is-empty', g.querySelectorAll('.pub:not(.is-hidden)').length === 0);
      });
      if (count) count.textContent = shown + ' of ' + pubs.length;
      if (empty) empty.hidden = shown !== 0;
    };
    if (search) search.addEventListener('input', apply);
    if (selOnly) selOnly.addEventListener('change', apply);
    apply();
  }

  /* ---- Scroll to a paper linked by #key (below the sticky header) ---- */
  function jumpToHash() {
    if (!location.hash || location.hash.length < 2) return;
    var target = document.getElementById(decodeURIComponent(location.hash.slice(1)));
    if (!target || !target.classList.contains('pub')) return;
    window.requestAnimationFrame(function () {
      target.scrollIntoView({ block: 'start', behavior: 'instant' });
    });
  }
  jumpToHash();
  window.addEventListener('hashchange', jumpToHash);
  window.addEventListener('load', jumpToHash);
})();
