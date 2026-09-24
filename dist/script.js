const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('#navigation');
function closeMenu(){nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','Abrir menu');}
menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Fechar menu':'Abrir menu');});
nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',closeMenu));
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&nav.classList.contains('open')){closeMenu();menu.focus();}});
const reducedMotion=window.matchMedia('(prefers-reduced-motion: reduce)');
if('IntersectionObserver' in window&&!reducedMotion.matches){
  const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}});},{threshold:.08});
  document.querySelectorAll('.reveal').forEach(element=>{element.classList.add('ready');observer.observe(element);});
}
const motionButton=document.querySelector('.motion-toggle');
function setMotionPaused(paused){document.body.classList.toggle('motion-paused',paused);motionButton.setAttribute('aria-pressed',String(paused));motionButton.querySelector('.motion-label').textContent=paused?'Retomar animações':'Pausar animações';motionButton.firstElementChild.textContent=paused?'▷':'Ⅱ';}
setMotionPaused(reducedMotion.matches);
motionButton.addEventListener('click',()=>setMotionPaused(!document.body.classList.contains('motion-paused')));
reducedMotion.addEventListener('change',event=>setMotionPaused(event.matches));
