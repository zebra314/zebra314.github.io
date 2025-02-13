const menuBtn = document.getElementById('menu_btn');
const dropdownMenu = document.querySelector('.dropdown_menu');
const barIcon = document.getElementById('barIcon');
const xIcon = document.getElementById('xIcon');

menuBtn.onclick = function() {
  const isOpen = dropdownMenu.classList.contains('open');

  if (isOpen) {
    document.body.style.overflow = 'auto';
    barIcon.style.display = 'block';
    xIcon.style.display = 'none';
    dropdownMenu.classList.remove('open');
    dropdownMenu.classList.add('close');

  } else {
    document.body.style.overflow = 'hidden';
    barIcon.style.display = 'none';
    xIcon.style.display = 'block';
    dropdownMenu.classList.remove('close');
    dropdownMenu.classList.add('open');
  }
};