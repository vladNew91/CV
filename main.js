const arrayOfButtons = document.querySelectorAll('.showInfo');
const arrayBloks = document.querySelectorAll('.hiddenBlock');
const iconPlus = document.querySelector('.plus');
const changeIcon = (props) => iconPlus.textContent = props;

for (let i = 0; i < arrayBloks.length; i++) {
  arrayOfButtons[i].addEventListener('click', () => {
    arrayBloks[i].classList.toggle('hiddenBlock');
    changeIcon('add');
  })
}
