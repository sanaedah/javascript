

/* document.getElementById()*/
let myAnchor = document.getElementById('my-anchor');
myAnchor.textContent = "Mon contenu";

/*getElementsByClassName()*/
let contents = document.getElementsByClassName('content');
contents[0].textContent = "First content";

/*getElementsByTagName()*/
let tags = document.getElementsByTagName('div');
tags[1].textContent = "Second content";

/*querySelector()*/
let elt = document.querySelector("#myId p.article > a");
console.log (elt);
elt.textContent = "Found!";


/*from element*/
let elt = document.getElementById('main');

console.log(elt.children);

console.log(elt.parentElement);

console.log(elt.nextElementSibling);

console.log(elt.previousElementSibling);

/*Element modification innerHTML*/
let elt = document.getElementById('next');
elt.innerHTML = "<p>next</p>";

/*class attributes*/
elt.classList.add("newClass");
elt.classList.remove("newClass");
elt.classList.contains("newClass"); // true or false
elt.classList.replace("newClass", "myClass");

/*styles*/
elt.style.color = "red";
elt.style.backgroundColor = "#000";
elt.style.fontWeight = "bold";

/*Attributes*/
elt.setAttribute('id', 'myId' ); //set
console.log(elt.getAttribute ('id')); // get

/*create element*/
let newElt = document.createElement("span");
elt.appendChild(newElt);

/*remove element*/
elt.removeChild(newElt);

/*replace element*/
elt.replaceChild(document.createElement("strong"), newElt);

