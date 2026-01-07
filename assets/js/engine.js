fetch('festivals.json').then(r=>r.json()).then(d=>{
const f=d.festivals[0];
document.getElementById('headline').innerText=f.landing.headline;
document.getElementById('ctaBtn').innerText=f.landing.ctaText;
document.getElementById('ctaBtn').onclick=()=>{
const n=document.getElementById('nameInput').value;
if(n)location.href=`wish.html?f=${f.id}&n=${encodeURIComponent(n)}`;
};
if('serviceWorker'in navigator)navigator.serviceWorker.register('/sw.js');
});