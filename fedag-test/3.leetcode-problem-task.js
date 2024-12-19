// возвращаем true если массив или объект пустой, а иначе false

let objIsEmpty = {};
let objHasSomething = {
  name: "Vladimir",
  surname: "Skripnik",
};

let arrayIsEmpty = [];
let arrayHasSomething = [1, 2, 3, 4];

function checkObject(value) {
  // проверим что нам приходит массив или объект
  if (Array.isArray(value)) {
    // проверка если массив
    return value.length === 0;
  } else if (typeof value === "object") {
    // проверка если эт объект
    return Object.keys(value).length === 0;
  } else {
    return false;
  }
}


console.log(checkObject(objIsEmpty)) // true
console.log(checkObject(objHasSomething)) // false
console.log(checkObject(arrayIsEmpty)) // true
console.log(checkObject(arrayHasSomething)) // false