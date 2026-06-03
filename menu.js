/* A Villa in Puglia — menu mobile (apertura/chiusura overlay) */
(function () {
  var toggle = document.getElementById('navToggle');
  var menu = document.getElementById('mobileMenu');
  if (!toggle || !menu) return;

  var closeBtn = document.getElementById('menuClose');
  var links = menu.querySelectorAll('a');
  var root = document.documentElement;

  function openMenu() {
    menu.classList.add('open');
    toggle.classList.add('is-open');
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('aria-label', 'Chiudi il menu');
    menu.setAttribute('aria-hidden', 'false');
    root.classList.add('menu-open');
  }

  function closeMenu() {
    menu.classList.remove('open');
    toggle.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Apri il menu');
    menu.setAttribute('aria-hidden', 'true');
    root.classList.remove('menu-open');
  }

  function toggleMenu() {
    if (menu.classList.contains('open')) closeMenu();
    else openMenu();
  }

  toggle.addEventListener('click', toggleMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);

  // Chiudi quando si segue un link del menu
  Array.prototype.forEach.call(links, function (a) {
    a.addEventListener('click', closeMenu);
  });

  // Chiudi con il tasto Esc
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && menu.classList.contains('open')) closeMenu();
  });

  // Se si passa al layout desktop, assicura lo sblocco dello scroll
  window.addEventListener('resize', function () {
    if (window.innerWidth >= 768 && menu.classList.contains('open')) closeMenu();
  });
})();
