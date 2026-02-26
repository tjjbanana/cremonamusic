(function(){
  var STORAGE_KEY = 'cremona-content-v2';
  var textNodes = Array.from(document.querySelectorAll('[data-en], [data-zh]')).filter(function(el){
    return el.children.length === 0;
  });
  var imageNodes = Array.from(document.querySelectorAll('img'));
  var heroBg = document.getElementById('heroBg');

  textNodes.forEach(function(el, i){ if(!el.dataset.cmsKey) el.dataset.cmsKey = 'txt-' + (i + 1); });
  imageNodes.forEach(function(el, i){ if(!el.dataset.cmsKey) el.dataset.cmsKey = 'img-' + (el.id || (i + 1)); });

  var state = {};
  try {
    state = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
  } catch (e) {
    state = {};
  }

  textNodes.forEach(function(el){
    var v = state.text && state.text[el.dataset.cmsKey];
    if (typeof v === 'string') el.textContent = v;
  });

  imageNodes.forEach(function(el){
    var v = state.images && state.images[el.dataset.cmsKey];
    if (typeof v === 'string' && v.trim()) el.src = v.trim();
  });

  if (heroBg && typeof state.heroBg === 'string' && state.heroBg.trim()) {
    heroBg.style.backgroundImage = 'url(' + state.heroBg.trim() + ')';
  }
})();
