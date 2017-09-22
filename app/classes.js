import Animal from './modules/Animals';

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