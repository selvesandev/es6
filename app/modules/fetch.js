export default {
    constructor() {
        this.url = 'http://jsonplaceholder.typicode.com/posts/1';
    },

    getData() {
        fetch(this.url, {method: 'GET'})
            .then(response => {
                console.log(response)
            });
    }
}