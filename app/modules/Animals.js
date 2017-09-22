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

export default Animal;