function toggleNav(){
  const nav = document.getElementById('nav');
  nav.classList.toggle('open');
}
document.addEventListener('DOMContentLoaded', ()=>{
  const y = document.getElementById('year'); if(y) y.textContent = new Date().getFullYear();
});
