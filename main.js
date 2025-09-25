// ============================================
window.addEventListener("DOMContentLoaded", () => {
  const activateByHash = () => {
    const hash = window.location.hash;
    if (!hash) return;
    const id = hash.slice(1);
    const link = document.querySelector(`a[href="${hash}"]`);
    const section = document.getElementById(id);
    document.querySelectorAll('.active').forEach(el => el.classList.remove('active'));
    link?.classList.add('active');
    section?.classList.add('active');
  };
  activateByHash();
  window.addEventListener("hashchange", activateByHash);
});
// ============================================
const header = document.querySelector('header');
const menuBtn = document.querySelector('.menu');
const arrowBtn = document.querySelector('.arrow');
arrowBtn.addEventListener('click', () => {
  if (header.classList.contains('HeaderOpend')) {
    header.classList.remove('HeaderOpend');
    arrowBtn.innerHTML = '⮜';
  }else {
    header.classList.add('HeaderOpend');
    arrowBtn.innerHTML = '⮞';
  }
});
menuBtn.addEventListener('click', () => {
  if (header.classList.contains('HeaderOpend')) {
    header.classList.remove('HeaderOpend');
    menuBtn.style.display='block'
  }else {
    header.classList.add('HeaderOpend')
  }
});
// Scroll To Top
const scrollToTopBtn = document.getElementById('scrollToTopBtn');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) { 
    scrollToTopBtn.style.display = 'block';
  } else {
    scrollToTopBtn.style.display = 'none';
  }
});
scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
  });
});
// ============================================

