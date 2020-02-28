let shopping = ['pain', 'lait', 'fromage', 'houmous', 'nouilles'];
shopping;

shopping[0]; // pain

shopping[0] = 'sel';
shopping[0]; // sel

let sequence = [1, 1, 2, 3, 5, 8, 13];
let random = ['arbre', 795, [0, 1, 2]];

random[2][2]; // 2
sequence.length; // 7

/*String to array*/
let myData = 'Manchester,London,Liverpool,Birmingham,Leeds,Carlisle';
let myArray = myData.split(',');
myArray; // Array(6) [ "Manchester", "London", "Liverpool", "Birmingham", "Leeds", "Carlisle" ]

/*Array to string*/
let myNewString = myArray.join(',');
myNewString; //"Manchester,London,Liverpool,Birmingham,Leeds,Carlisle"

/*Add and remove from array*/
myArray.push('Cardiff');
myArray.pop();
myArray;

let removedItem = myArray.pop();
myArray;
removedItem;

myArray.unshift('Edinburgh');
myArray;








