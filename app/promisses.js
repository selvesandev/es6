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

    fetch('http://jsonplaceholder.typicode.com/posts/1', {method: 'GET'})
        .then(response => {
            return response.json();
        }).then(json => console.log(json));