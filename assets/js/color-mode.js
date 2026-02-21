(function(){
  var doc = document.documentElement;
  function setTheme(theme){
    doc.setAttribute('data-theme', theme);
    try { localStorage.setItem('theme', theme); } catch(e){}
    var btn = document.getElementById('color-mode-toggle');
    if(btn){
      btn.textContent = theme === 'dark' ? '🌙' : '☀️';
      btn.setAttribute('aria-pressed', theme === 'dark');
    }
  }
  function toggle(){
    var cur = doc.getAttribute('data-theme') || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark':'light');
    setTheme(cur === 'dark' ? 'light' : 'dark');
  }
  document.addEventListener('DOMContentLoaded', function(){
    var btn = document.getElementById('color-mode-toggle');
    if(btn) btn.addEventListener('click', toggle);
    var theme = doc.getAttribute('data-theme') || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark':'light');
    if(btn) { btn.textContent = theme === 'dark' ? '🌙' : '☀️'; btn.setAttribute('aria-pressed', theme === 'dark');}
  });
})();
