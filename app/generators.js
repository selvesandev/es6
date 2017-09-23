console.log('_________GENERATORS____________');

//Defining a Generator
function* letterMaker() {
    //generators introduces a control flow into the function runtime.
    yield 'a';
    yield 'b';
    yield 'c';
}

let letterGen = letterMaker();//we don't use new keywork when defining the instance of generators.

//we use the .next() function to take one step in generator and return the current state of that generator
console.log(letterGen.next().value);
