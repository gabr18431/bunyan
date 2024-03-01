
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

