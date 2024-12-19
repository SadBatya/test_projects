// реализовал собственную функцию map для массива

Array.prototype.myMap = function(callback) {
  let newArray = []
  for(let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i], i, this));
  }
  return newArray
}


// пример использования фукнции
let numbers = [1, 2, 3, 4, 5]

let triple = numbers.myMap(num => num * 3)

console.log(triple)