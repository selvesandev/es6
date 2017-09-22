let a = ['dana', 'eric', 'frank'];

//using spread operator;
let b = ['alice', 'bob', ...a];//all the values of a will spread right into b
console.log(b);


//will collect all the arguments passed into array a
function collect(...a) {
    console.log(a);
}
collect(1, 2, 3);

