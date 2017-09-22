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