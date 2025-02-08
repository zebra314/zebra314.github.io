const menuBtn = document.querySelector('#menu_btn');
const menuBtnIcon = document.querySelector('#menu_btn i');
const dropdownMenu = document.querySelector('.dropdown_menu');
const menuItems = dropdownMenu.querySelectorAll('a');

menuBtn.onclick = function () {
  if (dropdownMenu.classList.contains('open')) {
    // First, fade out the text
    menuItems.forEach(item => {
      item.style.opacity = '0';
      item.style.transform = 'translateY(-10px)';
    });

    // Wait for fade out animation to complete before closing menu
    setTimeout(() => {
      dropdownMenu.classList.remove('open');
      document.body.style.overflow = 'auto';
      menuBtnIcon.classList = 'fa-solid fa-bars';
    }, 300);
  } else {
    // Open menu
    dropdownMenu.classList.add('open');
    menuBtnIcon.classList = 'fa-solid fa-times';
    document.body.style.overflow = 'hidden';
    
    // Fade in items after menu opens
    menuItems.forEach(item => {
      item.style.opacity = '1';
      item.style.transform = 'translateY(0)';
    });
  }
}

if (sessionStorage.getItem('theme') === null) {
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    sessionStorage.setItem('theme', 'dark');
  }
  else{
    sessionStorage.setItem('theme', 'light');
  }
}

let theme = sessionStorage.getItem('theme');
if(theme === "dark") {
  document.getElementById('theme-light').setAttribute('rel', 'stylesheet alternate'); 
  sessionStorage.setItem('theme', 'dark');
  themeIcon.classList = 'fa-solid fa-moon';
} else {
  document.getElementById('theme-dark').setAttribute('rel', 'stylesheet alternate'); 
  sessionStorage.setItem('theme', 'light');
  themeIcon.classList = 'fa-solid fa-sun';
}

function toggle_theme_click() {
  var node1 = document.getElementById('theme-light');
  var node2 = document.getElementById('theme-dark');
  var themeIcon = document.querySelector('#theme_btn i');
  if(node1.getAttribute('rel')=='stylesheet'){
    node2.setAttribute('rel', 'stylesheet');
    setTimeout(function(){
      node1.setAttribute('rel', 'stylesheet alternate');
      themeIcon.classList = 'fa-solid fa-moon';
    }, 10);
    sessionStorage.setItem('theme', 'dark');
  }else{
    node1.setAttribute('rel', 'stylesheet');
    setTimeout(function(){
      node2.setAttribute('rel', 'stylesheet alternate');
      themeIcon.classList = 'fa-solid fa-sun';
    }, 10);
    sessionStorage.setItem('theme', 'light');
  }
  return false;
}


