
const body = document.querySelector('body');
const h4 = document.querySelector('h4');
const cont = document.querySelector('cont');
const modeToggle = document.getElementById('mode-toggle');
const modeStatus = document.querySelector('.mode-status');
function toggleMode() {
body.classList.toggle('dark-mode');

const modeMessage = body.classList.contains('dark-mode') ?
    'Dark Mode'
    : "Light Mode"

modeStatus.innerText = "Currently in " + modeMessage;

  }

modeToggle.addEventListener('click', toggleMode);
