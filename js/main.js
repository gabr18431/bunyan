
// system-component ***************

let systems = document.querySelectorAll('.system-component');

async function handelClickSystemItem(item) {
  let currentSystem = item.closest('.system-component');
  await systems.forEach(system => {
    if (system !== currentSystem) {
      system.classList.remove('show');
    }
  })
  currentSystem.classList.toggle('show');
}

// mobile-menu ****************************

let mobilMenu = document.querySelector('.mobile-menu');
let header = document.querySelector('header');
let closeIcon = document.querySelector('.close-icon');
let overlay = document.querySelector('.overlay');

mobilMenu.addEventListener('click', () => {
  header.classList.add('show-menu');
})

closeIcon.addEventListener('click', () => {
  header.classList.remove('show-menu');
})

overlay.addEventListener('click', () => {
  header.classList.remove('show-menu');
})