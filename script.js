// -------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  const content = document.getElementById('content');
  const params = new URLSearchParams(window.location.search);
  const page = params.get('page');
  const active = document.getElementById(page)
  if(active){
    active.classList.add('active');
  }
  fetch('pages.json')
    .then(res => res.json())
    .then(data => {
      try {
        content.innerHTML = data[page].content;
        document.title = data[page].title;
      }catch(err) {
        document.getElementById('contact').style.cssText = `
          position: fixed;
          bottom: 0;
        `;
        alert(" الصفحه غير موجوده , الرجاء التواصل مع المطور ");
      }
    });
});
// -------------------------------------------
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
// ============================================