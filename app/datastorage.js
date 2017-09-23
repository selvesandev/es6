import set from './modules/Set';
import map from './modules/Maps';

/////////////SETS//////////////////
console.log(set);
console.log(set.size);//the size property is used to find out the number of elements in set
//check to c is the set has some value.
if (set.has(5)) {
    console.log('yes');
}
//access the value of the set.
for (let element of set.values()) {
    console.log(element);//like foreach of associative array in php.
}


////////////////MAPS///////////
console.log(map);


/////////////////EXAMPLE///////////////
/////////FIND DUPLICATE LETTERS COUNT///////////

console.log('__________EXAMPLE______________');

let string = "asldfwfalksdfjalksdlflasdfaluriewpwoasdlnvlaksdfljalsd";

let letters = new Map();
for (let i = 0; i < string.length; i++) {
    let letter = string[i];

    if (!letters.has(letter)) {
        letters.set(letter, 1);
    } else {
        letters.set(letter, letters.get(letter) + 1);
    }
}
console.log(letters);