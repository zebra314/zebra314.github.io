const themeBtn = document.querySelector('#themeBtn');
const darkIcon = document.querySelector('#darkIcon');
const lightIcon = document.querySelector('#lightIcon');
const rootElement = document.documentElement; // The <html> element

let theme = localStorage.getItem('theme') || 
            (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
rootElement.setAttribute('data-theme', theme);
setStatusBarColor(theme);

if (theme === 'dark') {
  darkIcon.style.display = 'block';
  lightIcon.style.display = 'none';
} else {
  darkIcon.style.display = 'none';
  lightIcon.style.display = 'block';
}

themeBtn.onclick = function() {
  let theme = localStorage.getItem('theme') || 
            (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

  if (theme === 'light') {
    theme = 'dark';
    darkIcon.style.display = 'block';
    lightIcon.style.display = 'none';
  } else {
    theme = 'light';
    darkIcon.style.display = 'none';
    lightIcon.style.display = 'block';
  }
  rootElement.setAttribute('data-theme', theme);
  setStatusBarColor(theme);
  localStorage.setItem('theme', theme);
}

function setStatusBarColor(theme) {
  if (theme === 'light') {
    document.querySelector('meta[name="theme-color"]').setAttribute('content', '#faf8f8');
    document.querySelector('meta[name="msapplication-navbutton-color"]').setAttribute('content', '#faf8f8');
    document.querySelector('meta[name="apple-mobile-web-app-status-bar-style"]').setAttribute('content', '#faf8f8');
  } else {
    document.querySelector('meta[name="theme-color"]').setAttribute('content', '#161618');
    document.querySelector('meta[name="msapplication-navbutton-color"]').setAttribute('content', '#161618');
    document.querySelector('meta[name="apple-mobile-web-app-status-bar-style"]').setAttribute('content', '#161618');
  }
}
  