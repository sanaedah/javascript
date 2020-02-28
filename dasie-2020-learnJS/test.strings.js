let string1 = 'ma chaîne';
let string2 = "ma chaîne";

/*Escape chars in a string*/
let string = 'C\'est ma chaîne';

/*String length*/
let browserType = 'mozilla';
browserType.length;

/*Chars position*/
let browserType = 'mozilla';
browserType.length[0]; //first

browserType[browserType.length - 1]; //last

/*Extract substring*/
browserType.indexOf('zilla'); // 2

browserType.indexOf('vanilla'); // -1

if (browserType.indexOf('mozilla') !== -1) {
  console.log("found");
}

browserType.slice(0, 3); //moz
browserType.slice(3); //illa

/*Modifiers*/
browserType.toUpperCase // toLowerCase

/*Replace substring*/
browserType.replace('moz','van')