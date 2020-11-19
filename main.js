const toggleBtn = document.querySelector('.menu_button');
const menu = document.querySelector('.menu_wrapper');
const icons = document.querySelector('.sns');

toggleBtn.addEventListener('click', ()=> {
  menu.classList.toggle('active');
  icons.classList.toggle('active');
});