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

const darkIcon = document.querySelector('#darkIcon');
const lightIcon = document.querySelector('#lightIcon');

// Initial theme setup
if (sessionStorage.getItem('theme') === null || sessionStorage.getItem('theme') === undefined) {
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    sessionStorage.setItem('theme', 'dark');
  } else {
    sessionStorage.setItem('theme', 'light');
  }
}

// Show the correct theme if it was set
if (sessionStorage.getItem('theme') == 'dark') {
  document.getElementById('theme-light').setAttribute('rel', 'stylesheet alternate');
  darkIcon.style.display = 'block';
  lightIcon.style.display = 'none';
} else {
  document.getElementById('theme-dark').setAttribute('rel', 'stylesheet alternate');
  darkIcon.style.display = 'none';
  lightIcon.style.display = 'block';
}


function toggle_theme_click() {
  var node1 = document.getElementById('theme-light');
  var node2 = document.getElementById('theme-dark');
  
  if (node1.getAttribute('rel') == 'stylesheet') {
    console.log('Switch to dark theme');
    node2.setAttribute('rel', 'stylesheet');
    setTimeout(function() {
      node1.setAttribute('rel', 'stylesheet alternate');
      darkIcon.style.display = 'block';
      lightIcon.style.display = 'none';
    }, 10);
    sessionStorage.setItem('theme', 'dark');
  } else {
    console.log('Switch to light theme');
    node1.setAttribute('rel', 'stylesheet');
    setTimeout(function() {
      node2.setAttribute('rel', 'stylesheet alternate');
      darkIcon.style.display = 'none';
      lightIcon.style.display = 'block';
    }, 10);
    sessionStorage.setItem('theme', 'light');
  }
  return false;
}


