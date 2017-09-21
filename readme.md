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

```javascript
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