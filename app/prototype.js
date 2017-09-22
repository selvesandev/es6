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