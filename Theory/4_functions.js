//Function Declaration - можно обращаться когда захотим  
//Функция - это обьект

//интерпретатор вначале пробегается по всему документу с кодом и ищет все функции, объявленные как Function Declaration,
//и только потом начинает выполнять код документа построчно.

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






let arr = [
	function() {console.log('1')},
	function() {console.log('2')},
	function() {console.log('3')},
];
//Давайте, например, выведем в консоль содержимое нулевого элемента массива:

let array = [
	function() {console.log('1')},
	function() {console.log('2')},
	function() {console.log('3')},
];

console.log(array[0]); // увидим исходный код первой функции

//Чтобы происходил вызов функции, к ней нужно дописать круглые скобки. Так как наша функция хранится в arr[0], то круглые скобки нужно будет написать после квадратных, вот так: arr[0](). Проверим:

let array1= [
	function() {console.log('1')},
	function() {console.log('2')},
	function() {console.log('3')},
];

array1[0](); // выведет '1'
//Можно также перебрать наш массив с функциями циклом и в этом цикле вызвать каждую из функций:

let array2 = [
	function() {console.log('1')},
	function() {console.log('2')},
	function() {console.log('3')},
];

for (let func of arr) {
	func(); // вызываем наши функции в цикле
}


let arr3 = [
	function() {return(1)},
	function() {return(2)},
	function() {return(3)},
]

console.log(arr3[0]() + arr3[1]() + arr3[2]())
for(let funck = 0; funck<3; funck++){
	console.log(arr[funck]())
}