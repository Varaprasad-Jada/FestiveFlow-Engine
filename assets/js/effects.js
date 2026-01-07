function holiColorSplash(){document.body.onclick=e=>{
const d=document.createElement('div');
d.className='holi-splash';
d.style.width=d.style.height='120px';
d.style.left=e.clientX+'px';d.style.top=e.clientY+'px';
d.style.background=['#EC4899','#22D3EE','#A855F7'][Math.floor(Math.random()*3)];
document.body.appendChild(d);
setTimeout(()=>d.remove(),1000);
};}
const EffectRegistry={holiColorSplash};
function runEffects(e){e.forEach(x=>EffectRegistry[x]&&EffectRegistry[x]());}