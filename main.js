//Change icons
const arrayOfButtons = document.querySelectorAll('.showInfo');
const arrayBloks = document.querySelectorAll('.hiddenBlock');

arrayOfButtons.forEach((el, i) => {
  //change class
  el.addEventListener('click', () => {
    arrayBloks[i].classList.toggle('hiddenBlock');

    const base = 'https://cv-uladzislau-nazarau.netlify.app/assets/'

    //Change icon
    const iconPlus = document.querySelectorAll('.plus');       
    if (iconPlus[i].src == base + 'add-white-36dp.svg') {
      return iconPlus[i].src = base + 'remove-white-36dp.svg';
    } else return iconPlus[i].src = base + 'add-white-36dp.svg';
})});

//Change colors and shadows of name
const arrayOfColors =  [
  'rgb(255, 0, 0)', 
  'rgb(255, 217, 0)', 
  'rgb(179, 255, 0)', 
  'rgb(228, 22, 149)', 
  'rgb(209, 165, 238)',
  'rgb(0, 255, 200)',
  'rgb(255, 255, 255)' 
];

const arrayOfShadows = [
  '1px 2px 3px rgb(255, 0, 0)', 
  '1px 2px 3px rgb(255, 217, 0)', 
  '1px 2px 3px rgb(179, 255, 0)', 
  '1px 2px 3px rgb(228, 22, 149)',
  '1px 2px 3px rgb(209, 165, 238)',
  '1px 2px 3px rgb(0, 255, 200)',
  '1px 2px 3px rgb(255, 255, 255)'
];

const changeStyle = document.getElementsByClassName('changeColor')[0];
let i = 0;

const lightDisko = () => {
  //change color
  changeStyle.style.color = arrayOfColors[i];
  //change shadow
  changeStyle.style.textShadow = arrayOfShadows[i];
  i++;
  //repeat disco
  if (i == arrayOfColors.length && i == arrayOfShadows.length) {
    i = 0;
  } 
}

setInterval(lightDisko, 4000);
