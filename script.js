
/* =========================
File: script.js
========================= */
(function(){
  const root = document.documentElement;
  const saved = localStorage.getItem('lb-theme');
  if(saved === 'dark') root.classList.add('dark');

  // theme toggle
  const toggle = document.querySelector('.theme-toggle');
  if(toggle){
    toggle.addEventListener('click', () => {
      root.classList.toggle('dark');
      localStorage.setItem('lb-theme', root.classList.contains('dark') ? 'dark' : 'light');
    });
  }

  // mobile nav
  const nav = document.querySelector('.site-nav');
  const btn = document.querySelector('.nav-toggle');
  if(btn && nav){
    btn.addEventListener('click', () => {
      const expanded = nav.getAttribute('aria-expanded') === 'true';
      nav.setAttribute('aria-expanded', (!expanded).toString());
      btn.setAttribute('aria-expanded', (!expanded).toString());
    });
  }

  // dynamic year
  const nowYear = String(new Date().getFullYear());
  document.querySelectorAll('#year, #year2, #year3, #year4, #year5').forEach(el => el.textContent = nowYear);
})();
