const btn = document.getElementById('topBtn');
window.onscroll = () => {
  btn.style.display = window.scrollY > 300 ? 'block' : 'none';
};
btn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });

function toggleMenu() {
  const menu = document.getElementById('menu');
  menu.style.display = (menu.style.display === 'flex') ? 'none' : 'flex';
}
