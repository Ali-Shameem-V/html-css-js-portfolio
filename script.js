function toggleMenu(){
    const menu = document.querySelector('.menu-links');
    const icon = document.querySelector('.hamburger-icon');
    menu.classList.toggle('open');
    icon.classList.toggle('open');
}

document.addEventListener('DOMContentLoaded', function() {
    const select = document.getElementById('month');
    const label = document.querySelector('.form-label');
    

  // Loop through the icons and toggle their src attribute
  
    select.addEventListener('change', function() {
      if (select.value) {
        label.classList.add('active');
      } else {
        label.classList.remove('active');
      }
    });
  });
  document.getElementById('mode-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    debugger
    this.classList.toggle('dark-mode');
    const icons = [
      { element: document.getElementById('icon1'), lightSrc: './assets/checkmark.png', darkSrc: './assets/checkmark-dark.png' },
      { element: document.getElementById('icon4'), lightSrc: './assets/checkmark.png', darkSrc: './assets/checkmark-dark.png' },
      { element: document.getElementById('icon5'), lightSrc: './assets/checkmark.png', darkSrc: './assets/checkmark-dark.png' },
      { element: document.getElementById('icon6'), lightSrc: './assets/checkmark.png', darkSrc: './assets/checkmark-dark.png' },
      { element: document.getElementById('icon7'), lightSrc: './assets/checkmark.png', darkSrc: './assets/checkmark-dark.png' },
      { element: document.getElementById('icon8'), lightSrc: './assets/checkmark.png', darkSrc: './assets/checkmark-dark.png' },
      { element: document.getElementById('icon9'), lightSrc: './assets/checkmark.png', darkSrc: './assets/checkmark-dark.png' },
      { element: document.getElementById('icon10'), lightSrc: './assets/checkmark.png', darkSrc: './assets/checkmark-dark.png' },
      { element: document.getElementById('icon11'), lightSrc: './assets/checkmark.png', darkSrc: './assets/checkmark-dark.png' },
      { element: document.getElementById('icon12'), lightSrc: './assets/checkmark.png', darkSrc: './assets/checkmark-dark.png' },
      { element: document.getElementById('icon2'), lightSrc: './assets/github.png', darkSrc: './assets/github-dark.png' },
      { element: document.getElementById('icon3'), lightSrc: './assets/linkedin.png', darkSrc: './assets/linkedin-dark.png' },

  ];
    // Optionally, save the user's preference to local storage
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        icons.forEach(icon => {
              icon.element.src = icon.darkSrc;
      });
    } else {
        localStorage.setItem('theme', 'light');
        icons.forEach(icon => {
          icon.element.src = icon.lightSrc;
  });    }
});

document.getElementById('mode-toggle-hamburger').addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
  debugger
  this.classList.toggle('dark-mode');
  const icons = [
    { element: document.getElementById('icon1'), lightSrc: './assets/checkmark.png', darkSrc: './assets/checkmark-dark.png' },
    { element: document.getElementById('icon4'), lightSrc: './assets/checkmark.png', darkSrc: './assets/checkmark-dark.png' },
    { element: document.getElementById('icon5'), lightSrc: './assets/checkmark.png', darkSrc: './assets/checkmark-dark.png' },
    { element: document.getElementById('icon6'), lightSrc: './assets/checkmark.png', darkSrc: './assets/checkmark-dark.png' },
    { element: document.getElementById('icon7'), lightSrc: './assets/checkmark.png', darkSrc: './assets/checkmark-dark.png' },
    { element: document.getElementById('icon8'), lightSrc: './assets/checkmark.png', darkSrc: './assets/checkmark-dark.png' },
    { element: document.getElementById('icon9'), lightSrc: './assets/checkmark.png', darkSrc: './assets/checkmark-dark.png' },
    { element: document.getElementById('icon10'), lightSrc: './assets/checkmark.png', darkSrc: './assets/checkmark-dark.png' },
    { element: document.getElementById('icon11'), lightSrc: './assets/checkmark.png', darkSrc: './assets/checkmark-dark.png' },
    { element: document.getElementById('icon12'), lightSrc: './assets/checkmark.png', darkSrc: './assets/checkmark-dark.png' },
    { element: document.getElementById('icon2'), lightSrc: './assets/github.png', darkSrc: './assets/github-dark.png' },
    { element: document.getElementById('icon3'), lightSrc: './assets/linkedin.png', darkSrc: './assets/linkedin-dark.png' },

];
  // Optionally, save the user's preference to local storage
  if (document.body.classList.contains('dark-mode')) {
      localStorage.setItem('theme', 'dark');
      icons.forEach(icon => {
            icon.element.src = icon.darkSrc;
    });
  } else {
      localStorage.setItem('theme', 'light');
      icons.forEach(icon => {
        icon.element.src = icon.lightSrc;
});    }
});

// Apply the saved theme on load
document.addEventListener('DOMContentLoaded', (event) => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        document.getElementById('mode-toggle').classList.add('dark-mode');
    }
});
const brightModeImage = new Image();
brightModeImage.src = './assets/bright-mode.png';

document.getElementById('mode-toggle').addEventListener('click', function () {
  // Get the image element
  const modeToggleImage = document.getElementById('mode-toggle-image');

  // Check the current source of the image and toggle between dark and bright mode images
  if (modeToggleImage.src.includes('dark-mode.png')) {
    modeToggleImage.src = brightModeImage.src; // Change to bright mode image
  } else {
    modeToggleImage.src = './assets/dark-mode.png'; // Change back to dark mode image
  }
});
document.getElementById('mode-toggle-hamburger').addEventListener('click', function () {
  // Get the image element
  const modeToggleImage = document.getElementById('mode-toggle-image2');

  // Check the current source of the image and toggle between dark and bright mode images
  if (modeToggleImage.src.includes('dark-mode.png')) {
    modeToggleImage.src = brightModeImage.src; // Change to bright mode image
  } else {
    modeToggleImage.src = './assets/dark-mode.png'; // Change back to dark mode image
  }
});

// // JavaScript to toggle dark mode and multiple icons
// document.getElementById('toggleDarkMode').addEventListener('click', function() {
//   document.body.classList.toggle('dark-mode');
  
//   // Array of icon elements and their corresponding dark mode images
//   const icons = [
//       { element: document.getElementById('icon1'), lightSrc: './assets/checkmark.png', darkSrc: 'path/to/dark-icon1.png' },
//       { element: document.getElementById('icon2'), lightSrc: './assets/github.png', darkSrc: './assets/github.svg' },
//   ];

//   // Loop through the icons and toggle their src attribute
//   icons.forEach(icon => {
//       if (document.body.classList.contains('dark-mode')) {
//           icon.element.src = icon.darkSrc;
//       } else {
//           icon.element.src = icon.lightSrc;
//       }
//   });
// });
