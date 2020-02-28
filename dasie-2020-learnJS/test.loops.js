/*For*/

/*
for (initialisation; condition de sortie; expression finale) {
  // code à exécuter
}
for (let i = 1 ; i < 21 ; i++) { 
  console.log(i)
}*/
let chats = ['Bill', 'Jeff', 'Pete', 'Biggles', 'Jasmin'];
let info = 'Mes chats s\'appellent ';


for (let i = 0; i < chats.length; i++) {
  info += chats[i] + ', ';
  console.log(chats[i]);
}

console.log(info);

/*For and if*/
let chats = ['Bill', 'Jeff', 'Pete', 'Biggles', 'Jasmin'];
let info = 'Mes chats s\'appellent ';
for (let i = 0; i < chats.length; i++) {
  if (i === chats.length - 1) {
    info += 'and ' + chats[i] + '.';
  } else {
    info += chats[i] + ', ';
  }
}

/*While*/
let chats = ['Bill', 'Jeff', 'Pete', 'Biggles', 'Jasmin'];
let info = 'Mes chats s\'appellent ';

let i = 0;
while (i < chats.length) {
  if (i === chats.length - 1) {
    info += 'and ' + chats[i] + '.';
  } else {
    info += chats[i] + ', ';
  }

  i++;
}
console.log(info);

/*do...while*/
let chats = ['Bill', 'Jeff', 'Pete', 'Biggles', 'Jasmin'];
let info = 'Mes chats s\'appellent ';
let i = 0;

do {
  if (i === chats.length - 1) {
    info += 'and ' + chats[i] + '.';
  } else {
    info += chats[i] + ', ';
  }

  i++;
} while (i < chats.length);