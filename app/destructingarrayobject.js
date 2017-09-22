let z = [4, 5, 6];
let [four, five] = z;//looks at the order of the data four=4,five=5
console.log(four, five);

let animals = ['simba', 'zazu', 'ed'];
let [lion, bird] = animals;
console.log(lion, bird);


let king = {
    name: 'mufasa',
    kids: 1
};
let {name, kids} = king;//rather than looking at the index or order this will match the key name

console.log(name, kids);