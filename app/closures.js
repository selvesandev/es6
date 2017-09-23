const addSuffix = (x) => {
    //here lets have a inner function called concat one arguments of it's own and return the result of adding together the
    //suffix argument and it's own argument.
    const concat = (y) => {
        return x + y;
    };
    return concat;
};


let add_ness = addSuffix("ness");
console.log(add_ness);//return a function concat(){};
let h = add_ness("happi");
console.log(h);//return happiness


