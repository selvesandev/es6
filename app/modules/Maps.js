let map = new Map();
let key_1 = "string key";
let key_2 = {a: 'key'};
let key_3 = function () {
};

map.set(key_1, 'return value for a string key');
map.set(key_2, 'return value for a object key');
map.set(key_3, 'return value for a function key');


export default map;
