// // 1 Переменные
//  const firstName = 'Vladilen'
//  const age1 = 26 // number
//  const isProgrammer = true // boolean


// // 2 Мутирование
//  console.log('Имя человека: ' + firstName + ', а возраст человека: ' + age)
//  alert('Имя человека: ' + firstName + ', а возраст человека: ' + age)

//  const lastName = prompt('Введите фамилию')
//  alert(firstName + ' ' + lastName)

// // 3 Операторы
//  let currentYear = 2020
// const birthYear = 1993
//  let age = currentYear + birthYear

//  const a = 10
//  const b = 5

//  let c = 32
//  c = c + a
//  c = c - a
//  c = c * a


//  console.log(a + b)
//  console.log(a - b)
//  console.log(a * b)
//  console.log(a / b)
// // console.log(++currentYear)


// // 6 Условные опрераторы
// let courseStatus = 'fail' // ready, fail, pending

//  if (courseStatus === 'ready') {
//    console.log('Курс уже готов и его можно проходить')
// } else if (courseStatus === 'pending') {
//    console.log('Курс пока находится в процессе разработки')
// } else {
//    console.log('Курс не получился')
// }

// const isReady = true
// if (isReady) {
//    console.log('Все готово!')
// } else {
//    console.log('Все не готово!')
// }

// // Тернарное выражение

//  isReady ? console.log('Все готово!') : console.log('Все не готово!')

//  // 8 Функции

// function calculateAge(year) {
//    return 2020 - year
// }

//  console.log(calculateAge(1993))

// function logInfoAbout(name, year) 
// {
//   let age = calculateAge(year)
//    if (age > 0) {
//      console.log('Человек по имени ' + name + ' сейчас имеет возраст ' + age)
// } else {
//      console.log('Вообще-то это уже будущее!')  
//    }
// }

// 9 Массивы

// const cars = ['BMW', 'Mercedes', 'Ford']
// console.log(cars)

// const cars1 = new Array ('BMW', 'Mercedes', 'Ford')
// console.log(cars[1])
// console.log(cars.length)

// cars[0] = 'Porsche'
// cars[3] = 'Subaru'

//10 Циклы

// const cars = ['BMW', 'Mercedes', 'Ford']

// for (let i=0; i < cars.length; i++){
//    console.log(i)
//    const car=cars[i]
//    console.log(car)
// }

// for (let car of cars){
//    console.log(car)
// }

// 11. Обьекты

// const person = {
//    firstName:'Alina',
//    year: 1996,
//    languages: ['Ru', 'English', 'German'],
//    hasHusband: true,
//    greet: function(){
//       console.log('Greet')
//    }
// }

// console.log(person)
// const key = 'languages'
// console.log(person[key])
// person.isProgrammer = true

