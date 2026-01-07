const p=new URLSearchParams(location.search);
fetch('festivals.json').then(r=>r.json()).then(d=>{
const f=d.festivals.find(x=>x.id===p.get('f'));
const n=p.get('n');
document.getElementById('curtain').onclick=()=>{
document.getElementById('curtain').remove();
document.getElementById('content').classList.remove('hidden');
document.getElementById('wishText').innerText=f.wish.headlineTemplate.replace('{name}',n);
runEffects(f.wish.effects);
};
setupShare(n,f);
});