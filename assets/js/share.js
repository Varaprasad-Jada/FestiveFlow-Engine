function setupShare(n,f){
document.getElementById('shareBtn').onclick=()=>{
const m=f.share.messageTemplate.replace('{name}',n).replace('{link}',location.href);
open('https://wa.me/?text='+encodeURIComponent(m),'_blank');
};
}