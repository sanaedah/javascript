/*Reference https://developer.mozilla.org/fr/docs/Apprendre/Commencer_avec_le_web/Les_bases_JavaScript*/


/*let myElements = document.querySelectorAll('li');

myElements.forEach(function(element) {
  if (element.textContent === 'builders') {
    element.textContent = 'Hello world!';
  }
});
*/

let myImage = document.querySelector('h1');
myImage.addEventListener('click', function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/firefox-icon.png') {
      myImage.setAttribute('src', 'images/firefox-icon2.png');
    } else {
      myImage.setAttribute('src', 'images/firefox-icon.png');
    }
});
let myHeading = document.querySelector('h1');
function setUserName() {
  let myName = prompt('Veuillez saisir votre nom.');
  localStorage.setItem('nom', myName);
  myHeading.textContent = 'Hello ' + myName;
}

/*if (!localStorage.getItem('nom')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('nom');
  myHeading.textContent = 'Hello ' + storedName;
}*/

let myButton = document.querySelector('button');

myButton.addEventListener('click', function() {
  setUserName();
});