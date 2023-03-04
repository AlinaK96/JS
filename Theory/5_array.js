
const cars = ['Ford', 'BMW', 'Mercedes', 'Lada']

const fib = [1,1,2,3,5,8,13]
//const pow2Fib = fib.map(num => num**2) / 
                                  const pow2 = num => num ** 2
                                  const pow2Fib = fib.map(pow2) //вернёт массив
                                  const filteredNumbers = pow2Fib.filter(num =>  num > 20)

cars.push('Reno') // + в конец
cars.includes('Мазда') // есть ли он в массиве
cars.unshift('Volga') // + в начало

const delItem = cars.shift() // удаляем и складываем в отдельную переменную
сars.shift() // удалить последний элимент
cars.pop(cars)
cars.reverse()
const index = cars.indexOf('Ford')
cars[index] = 'Audi' // заменит элимент с этим индексом

const upperCaseCars = cars.map(car => {
    return car.toUpperCase()
})

const people = [
    {name:'Misha', budget: 5000},
    {name: 'Kate', budget: 7000},
    {name: 'Svetlana', budget: 4581}
]

const indexP = people.indexOf(function(person){
    return person.budget === 3500
}) // найдем индекс человека с таким блджетом 

const person = people.find(person => person.budget === 3500)
console.log(person) //если вместе indexOf написать find, то сразу найдём человека по задонному условию

const AllBudjet = people
    .filter(person => person.budget > 5000)
    .reduce(acc, person  => {   // сначала отсортировать чтобы не писать условие
            acc += person.budget
            return acc 
    }, 0)  // принимает сначала функцию, а вторым параметром место откуда начинается отсчёт

// Развернуть предложение

const text = 'Привет, мы учимся'
const reversedText = text.split('').reverse().join('')
console.log(reversedText)