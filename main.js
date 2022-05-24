//Change icons
const arrayOfButtons = [...document.getElementsByClassName('showInfo')];
const arrayBloks = [...document.getElementsByClassName('hiddenBlock')];

arrayOfButtons.forEach((button, i) => {
  //change class
  button.onclick = () => {
    arrayBloks[i].classList.toggle('hiddenBlock');

    const base = 'https://cv-uladzislau-nazarau.netlify.app/assets/'

    //Change icon
    const icons = document.getElementsByClassName('material-icons');       
    if (icons[i].src == base + 'add-white-36dp.svg') {
      return icons[i].src = base + 'remove-white-36dp.svg';
    } else return icons[i].src = base + 'add-white-36dp.svg';
}});

//Change colors and shadows of name
const arrayOfColors = [
  '#F7AEF8',
  '#B388EB',
  '#8093F1',
  '#72DDF7',
  '#F4F4ED',
];

const arrayOfShadows = [
  '1px 2px 3px #F7AEF8',
  '1px 2px 3px #B388EB',
  '1px 2px 3px #8093F1',
  '1px 2px 3px #72DDF7',
  '1px 2px 3px #F4F4ED',
];

const changeStyle = document.getElementsByClassName('changeColor')[0];
let i = 0;

const changeColors = () => {
  //change color
  changeStyle.style.color = arrayOfColors[i];
  //change shadow
  changeStyle.style.textShadow = arrayOfShadows[i];
  i++;
  //repeat disco
  if (i == arrayOfColors.length || i == arrayOfShadows.length) {
    i = 0;
  }
};

const lightDisko = () => changeColors();

setInterval(lightDisko, 4000);
