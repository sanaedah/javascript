/* Events reference : https://developer.mozilla.org/fr/docs/Web/Events*/

/*addEventListener*/
let element = document.getElementById('next');
element.addEventListener('click', function() {
    element.textContent = "Click!";
});

/*preventDefault*/
let element = document.getElementById('myLink');
element.addEventListener('click', function(event) {
    event.preventDefault();   
    element.textContent = "Click!";
});

/*stopPropagation()*/
let myParent = document.getElementById('myId');
myParent.addEventListener('click', function() {
    alert ('div myId clicked!');
});

let myChild = document.getElementById('myLink');
myChild.addEventListener('click', function(event) {
    // event.stopPropagation();
    event.preventDefault();
    alert ('link clicked!');
});