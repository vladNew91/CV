const arrayOfButtons = document.querySelectorAll('.showInfo');
const arrayBloks = document.querySelectorAll('.hiddenBlock');
const iconPlus = document.querySelectorAll('.material-icons');

for (let i = 0; i < arrayBloks.length; i++) {
  arrayOfButtons[i].addEventListener('click', () => {
    arrayBloks[i].classList.toggle('hiddenBlock');
  })
}
