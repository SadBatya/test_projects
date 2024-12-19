function getAllKeys(obj) {
  let keys = [];

  
  for (let key in obj) {
    keys.push(key);
  }

  return keys;
}

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name}`);
};


// пример использование функции
let person = new Person("John", 30);
let allKeys = getAllKeys(person);
console.log(allKeys);
