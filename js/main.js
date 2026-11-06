const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.fade').forEach(el=>io.observe(el));
const strip=document.querySelector('.strip');
document.querySelectorAll('.arrows button').forEach(b=>b.onclick=()=>strip.scrollBy({left:+b.dataset.dir*420,behavior:'smooth'}));
