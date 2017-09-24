# ES6

### Webpack
Webpack is a bundler for modules. Many different programming
and framework take use of webpack. It can convert any es6 file we write into
a js file that our browser can handle.

##### Features
* it bundles modules into js file - (many js file into one js file)
* comes with a dev server. 


##### Setup webpack

```terminal
    npm init -y
    //creates a project for us with package.json file
```

```terminal
    npm install --save-dev webpack
    //will create a node modules folder for our node project.
```

Directory Stucture 
```php
    \app\app.js
    \build\index.html
    package.json
    \node_modules
    webpack.config.js
```

webpack.config.js
```javascript

const path = require('path');

//we need to export a large json object.
module.exports = {
    //entry point for our application all our js code will go here
    entry: ['./app/index.js'],
    //out file when webpack converts our index.js file then the output will get to bundle.js file
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    }
};

```


Now Finally update the scripts in package.json file
```php
  {
      "scripts": {
        "build": "webpack"
      }
  }
```

Now you can open your terminal and 
```terminal
npm run build
```


### Babel
Babel is a javascript compiler.
Adding babbel to webpack.

```terminal
    npm install babel-core babel-loader webpack-dev-server babel-preset-es2015 babel-polyfill --save
```
* babel-core is the core module which holds lots of the logic for transforming
es6 to js code.

* webpack-dev-server allows us to have automatic dev update.

* babel-preset-es2015 allows us to specify as a preset for webpack
that we are converting es6 code.

* babel-pollyfill enables to aspect es6 and babel code to run natively 
on browser as just javascript even though all browsers fully support es6

Edit webpack.config.js File
```javascript
const path = require('path');

//we need to export a large json object.
module.exports = {
    //entry point for our application all our js code will go here
    entry: ['./app/index.js'],
    //out file when webpack converts our index.js file then the output will get to bundle.js file
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                test: /\.js$/,//regular expression that catches every js file in our project but not node_modules.
                exclude: /node_modules/
            }
        ]
    },
    devServer: {
        port: 3000,
        contentBase: './build',
        inline:true//allows us to automatic live code updating
    }
};

```

Edit package.json file

```php
"scripts": {
    "build": "webpack",
    "start": "webpack-dev-server"
  },
  "babel": {
    "presets": [
      "es2015"
    ]
  },
  
```


## Variables (Let and Const)

```javascript
let a=10; //just like javascript previous var
const limit=10;//limit is readonly cannot be reassigned or re declared.

const name=['ram','shyam','hari'];
name.push('james');//this is valid because methods modify the data without reassigning(with = operator) is totally valid  

```

The concept that the let is separate from var is block scoping. Block in javascript simply groups statement, variables, object and other data into it's own scope with curly brackets. Same goes to the const as well.

```javascript
let limit=20;
{
    let limit =10;
    console.log('Inside '+limit);//10 local scope
}
console.log('Outside '+limit);//20 global scope
```
Here if you replace all the let or const with var then it would have printed 10 twice.


## Template Literals

Also called template strings referred to string that have embedded expression within them.
we create them using `back tick`.

```javascript

let a=`good `;
let greet=`${a} morning`;
console.log(greet);

```

You can even do this.
```javascript
document.getElementById('templateString').innerHTML = `<p>This is cool</p>`;
//direct html will get delivered.
```

## Operating and Destructing Assignment.

* **Spread Operator** - denoted by three period in places where statements have to handle multiple arguments. the spread operator allows to reduce this.
```javascript

let a = [20, 30, 40];

//using spread operator;
let b = [10, ...a, 50];//all the values of a will spread right into b
console.log(b);
```

* **Rest Parameter** - function(...){} same syntax like spread operators. enables us to represent multiple arguments of a function into a single array.
```javascript

//will collect all the arguments passed into array a
function collect(...a) {
    console.log(a);
}
collect(1, 2, 3);
```

* **Destructing Assignment** - simplifies extracting data on arrays and object into distinct variables.


```javascript
//working with array
let z = [4, 5, 6];
let [four, five] = z;//looks at the order of the data four=4,five=5
console.log(four, five);

let animals = ['simba', 'zazu', 'ed'];
let [lion, bird] = animals;
console.log(lion, bird);
```

```javascript
//working with object.
let king = {
    name: 'mufasa',
    kids: 1
};

let name,kids;
({name, kids} = king);//rather than looking at the index or order this will match the key name


console.log(name, kids);
```


## Methods and Modules

It simplified the function declaration with arrow function it also added a new helper method for arrays and objects and also new
syntax for working with modules.

#### Arrow Function
```javascript

let arrowFunction = () => {
    console.log('Arrow Function');
};
setTimeout(arrowFunction, 3000);

```

#### Helper Methods.

* ***Map***
```javascript

let values = [20, 30, 40];
//double each value in the array
let doubled = values.map((n) => n * 2);
console.log(doubled);
```

* ***Filter***
filter methods creates a new array based up off another arrays original 
values and passing a certain test to those values.

```javascript
let points = [7, 16, 21, 40, 2, 67, 5];
let highScore = points.filter((n) => n > 15);
console.log(highScore);
```

* ***String Manipulation and Number Checking***
```javascript

//String
let b = `woo${"oo".repeat(20)}`;
console.log(b);

/* ------------------ */
console.log("butterfly".startsWith("butter"));//true

/* ------------------ */
console.log("butterfly".includes("fly"));//true

```




#### Modules
split codes into unique files based on relevant data. Most often modules exists independently within separate file.
This helps as our application grows. We dont want index.js so long that no one 
can understant it. We use `export` key word to do so.

###### Folder Structure
```
\index.js
\modules\actors.js;
```
actors.js

```javascript

let actors = ["Jonny Dep", "Leonardo", "Tom Cruise", "Tom Hanks"];
let totalActors = actors.length;
export {actors, totalActors};

```
Index.js
```javascript
import {actors} from './modules/actors';
import {totalActors} from "./modules/actors";

console.log(actors, totalActors);
```
##### Default Keyword
defines a fallback expression for our module when handles exporting multiple variables.

* Math.js
```javascript

const add = (a, b) => {
    return a + b;
};

const multiply = (a, b) => {
    return a * b;
};

export {add, multiply};
export default multiply;

```

* index.js
```javascript
import {add} from "./modules/math"; //will import the add function only;
import multiply from "./modules/math"; //no need for the curly brackets since default is used;
import add from "./modules/math"; //will import multiply since it is default. you will have to {add} to import the add;

```


## Classes & Prototypes
Classes in javascript allows to build modules of objects based up off relevant data and behaviour.
Creates a system of inheritance between related classes with `extends` keyword.
Defined with class keyword and uses constructor.

```javascript

class Animal {
    //to initialize the object data we use the constructor.
    constructor(name, height) {
        //class properties declaration in javascript
        this.name = name;
        this.height = height;
    }

    hello() {
        return `Hi! I'm ${this.name}`;
    }
}

let king = new Animal("Mufasa", 4.5);
console.log(king);
console.log(king.hello());
```

### Inheritance
refers to the idea that we can create classes up of a base class 
and receive all of those properties from the parent class.

```javascript

class Lion extends Animal {
    constructor(name, height, color) {
        super(name, height);
        this.color = color;
    }
}

let son = new Lion("Simba", 2, 'golden');//values will be passed to the parent constructor.
console.log(son);
```

#### Overriding Method
```javascript


class Lion extends Animal {
    constructor(name, height, color) {
        super(name, height);
        this.color = color;
    }

    //overriding the hello method of the Animal class.
    hello() {
        console.log(`Hi ${this.name} is cook kid`);
    }
}

let son = new Lion("Simba", 2, 'golden');//values will be passed to the parent constructor.
console.log(son);
son.hello();

```

#### Classes as Modules

Animal.js
```javascript
class Animal{
    
}
export default Animal;
```

Lion.js
```javascript
import Animal from './Animal.js';
class Lion extends Animal{
    
}

```


#### Static Methods
We can access the static method of the class without declaring the instace
of the class.

```javascript
class Calculator{
   static multiply(a,b){
       return a*b;
   } 
}

Calculator.multiply(2,3);
```

### Prototypes
Major programming languages like C, java , Ruby provide support for OOP.
But the javascript is prototypal inheritance model which is bit different than classes.
Under the hood classes are just extraction of js prototypes so we are not actually creating a classes of data like other
OOP model but the es6 javascript syntax enables us to create prototypes very quickly 
in a more understandable way.  


Prototype is the characteristics that every object in js has.

```javascript
//PROTOTYPE
function Wizard(name, house, pet) {
    this.name = name;
    this.house = house;
    this.pet = pet;

    this.greet = () => `I'm ${this.name}`;
}

Wizard.prototype.pet_name;
Wizard.prototype.info = function () {
    //you cannot use the arrow function here.
    return `I have a ${this.pet} named ${this.pet_name}`;
}

let harry = new Wizard("Harry", "Gryffindor", "Own");
harry.pet_name = "Hedwig";
console.log(harry.info());
```
Classes simply extract this logic and wrap it up to look prototype look nice and coders like 
oop background. But the classess are just a wrapped up prototypes and prototypes are simply function.


## Data Storage

* **Set**  
All set inherit from the set prototype. so we declare set from the new keyword.
In the set we can from primitive values to object with `add()` methods.


```javascript
let a = new Set();
a.add(5);
a.add(24);
a.add("Ooohooo");
a.add({a: 30, y: 20});
a.add([2, 3, 'hey']);
console.log(a);

console.log(a.size);//the size property is used to find out the number of elements in a

//check to c is the set has some value.
if (a.has(5)) {
    console.log('yes');
}

//access the value of the set.

for (let element of a.values()) {
    console.log(element);//like foreach of associative array in php.
}
``` 

* **Maps**  
Map have pairs of keys and values. each key is unique and cannot be duplicate.
Map shares much similarity to objects but maps beats object with superior keys, and the size property.  
  
we can have string keys , function keys , object keys anything we like within our map in order to map a key and a value pair.
```javascript
let map = new Map();
let key_1 = "string key";
let key_2 = {a: 'key'};
let key_3 = function () {};

map.set(key_1, 'return value for a string key');
map.set(key_2, 'return value for a object key');
map.set(key_3, 'return value for a function key');

```

Iterate through our map in order to access key and value.

```javascript
let number=[[1,'one'],[2,'two']];
let valMap=new Map(number);//{1 => "one",2 => "two"}

for(let [key,value] of valMap.entries()){
    console.log(`${key} points to ${value}`);    
}

```

Example to find out the duplicate letters.
```javascript

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
```


## Closures in ES6

Closures refers to the function that remember their creation environment and can reference 
independent variables within that environment.  
In js and es6 closures enable us to create function factories. Function factories take one or
more arguments and return new function based up of those arguments.   
  
Example 1
```javascript
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
```
  
Example 2
```javascript
//short cuts
const product=(x)=>{
       return (y)=>y*x;
}
//OR
const product = x => y => y*x;

```



## Generators
Breaks the typical "run to completion" model for function (whenever we run a function we aspect it
to complete first to run the program). Generators can pause and resume with `yield` and `next()`


```terminal
babel-polyfill babel-preset-es2015 babel-preset-stage-0
``` 

```javascript
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

```

```javascript

function evens() {
    let count = 0;

    while (true) {
        count += 2;
        let reset = yield count;
        if(reset){
            count=0;
        }
    }
}

let sequence = evens();
console.log(sequence.next().value);
console.log(sequence.next().value);
console.log(sequence.next().value);
console.log(sequence.next().value);
console.log(sequence.next(true).value);
console.log(sequence.next().value);

```

#### Generators vs Iterators

```javascript
const arrIterator=(array)=>{
   let index=0;
   
   return {
       next:()=>{
           if(index<array.length){
               let next = array[index];
               index+=1;
               return next;
           }
       }
   }
}

let it = arraIterator([1,2,3]);
console.log(it.next());//1
console.log(it.next());//2
console.log(it.next());//3
console.log(it.next());//undefined

```

## Asynchronous Programming and Promises.
Synchronous programs run in sequence without blocking from top to bottom without blockin.
On the other hand asynchronous program run on a looped engine meaning when a blocking operation
happens such as a network request to a server that takes a while to go through the execution diverse the operation to
a different handler which keeps the program running without every blocking.
    
User interface and browsers are asynchronous by nature after all the UI have to handle the events
such as button click, mouse move and data manipulation asynchronously.
  
In ES6 we can follow a model of asynchronous programming and handle function that take time to complete
with promises. Promises allows us to handle asynchronous processes by representing values that will add some point
return in the future. Promises exists in three state : `Pending`, `Fulfilled`, `Rejected`

```javascript

let p = new Promise((resolve, reject) => {
    //resolve and reject are function to update the state of promisses.


    //resolve("resolved promise data");


    // reject("rejected promise data");

    setTimeout(() => resolve("resolve promise data"), 3000);
});

//Consuming the promise data.
p.then(response => {
    console.log(response);
    //resolved promise data
}).catch(err => {
    console.log(err);
    //rejected promise data
});

console.log('after promise consumption');
```

#### HTTP & Fetch.
In es6 we have a new API called fetch we allows us to consume internet resources through
js programme.

* **GET** - retreives data and has no secondary effect
* **POST** - sends data to a server to add resource.
* **HEAD, DELETE, PATCH ...**

**fetch() API**
```javascript

fetch('http://jsonplaceholder.typicode.com/posts/1', {method: 'GET'})
    .then(response => {
        return response.json();
    }).then(json => console.log(json));

```