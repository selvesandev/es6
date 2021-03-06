const path = require('path');


//we need to export a large json object.
module.exports = {
    //entry point for our application all our js code will go here
    entry: [
        'babel-polyfill',
        './app/index.js',
        './app/variables.js',
        './app/templateliterals.js',
        './app/destructingarrayobject.js',
        './app/modulesandmethods.js',
        './app/operatingdestructing.js',
        './app/arrowfunction.js',
        './app/modules.js',
        './app/classes.js',
        './app/datastorage.js',
        './app/closures.js',
        './app/generators.js',
        './app/promisses.js',
    ],
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
        inline: true//allows us to automatic live code updating
    }
};