//Function Declaration - можно обращаться когда захотим  
//Функция - это обьект

function greet(name){
    console.log('Привет - ', name)
}
greet('Лена')

//Function expression - функция лежит в переменной  / сначала создаём функцию, а потом ее вызываем

const greet2 = function greet2(name){
    console.log('Hello ', name)
}

greet2('Masha')

//Стрелочные функции
// function greet(name){
//     console.log('Привет - ', name)
// }
// greet('Лена')

const arrow = (name) => {
    console.log('Привет - ', name)
}
arrow('Max')

const arrow2 = name2 => console.log('Hi', name2)
arrow2('Vi')

const pow2 = num =>  num**2
console.log(pow2(5))

// 4 Параметры по умолчанию
const sum = (a = 40, b = a * 2) => a + b

// console.log(sum(41, 4))
// console.log(sum())

function sumAll(...all) {
    let result = 0
    for (let num of all) {
      result += num
    }
    return result
  }
  
const res = sumAll(1, 2, 3, 4, 5)
console.log(res)

// Замыкания из одной функции возвращаем другую и сохраняем контекст
//создание приватных переменных

function createMember(name){
    return function(lastName){
        console.log(name + lastName)
    }
}

const logWithLastName = createMember('Alina')