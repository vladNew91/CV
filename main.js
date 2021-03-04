const arrayOfButtons = document.querySelectorAll('.showInfo');
const arrayBloks = document.querySelectorAll('.hiddenBlock');

for (let i = 0; i < arrayBloks.length; i++) {
  //change class
  arrayOfButtons[i].addEventListener('click', () => {
    arrayBloks[i].classList.toggle('hiddenBlock');

    //Change icon
    const iconPlus = document.querySelectorAll('.plus');
    if (iconPlus[i].src == "https://silly-khorana-9b4b3f.netlify.app/assets/remove-white-36dp.svg") {
      return iconPlus[i].src = "https://silly-khorana-9b4b3f.netlify.app/assets/add-white-36dp.svg";
    } else {
      return iconPlus[i].src = "https://silly-khorana-9b4b3f.netlify.app/assets/remove-white-36dp.svg";
    }
  })
}


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

let i = 0;

const changeStyle = document.querySelector('.changeColor');
const lightDisko = () => {
  //change color
  changeStyle.style.color = arrayOfColors[i];
  //change shadow
  changeStyle.style.textShadow = arrayOfShadows[i];

  i++;
  if (i == arrayOfColors.length && i == arrayOfShadows.length) {
    i = 0;
  } 
}

setInterval(lightDisko, 4000);