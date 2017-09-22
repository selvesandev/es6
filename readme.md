#ES6

###Webpack
Webpack is a bundler for modules. Many different programming
and framework take use of webpack. It can convert any es6 file we write into
a js file that our browser can handle.

#####Features
* it bundles modules into js file - (many js file into one js file)
* comes with a dev server. 


#####Setup webpack

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


###Babel
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


##Variables (Let and Const)

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