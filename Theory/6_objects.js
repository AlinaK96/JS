// словарь - создаём пару ключ-значение и разделяем запятой

const person ={
    name: 'Mike',
    age: 26,
    isProgrammer: true,
    'большой ключ': 'complex calue',
    ['key_' + (1+3)]: 'Complex value',  // key_4
    languages: ['rus', 'eng', 'ger'],
    greet() {
        console.log('Hello')
    } 
}

console.log(person.name)
console.log(person['age'])
console.log(person['большой ключ'])
person.greet()

person.age++
person.languages.push('fin')
person['key_4'] = undefined  // rename
delete person['key_4']

const name = person.name
const age = person.age
// чтобы не повторять используем реструкторизацию

const {name2, age2, languages} = person  // == const {name2, age: personAge = 10, languages} = person   задаём немного другое название для 
                                                                                            // переменной и даём значение по умолчанию
console.log(name2, age2, languages)

for ( let key in person) {   // key будет равен ключам
    if(person.hasOwnProperty(key)){
    console.log('key', key)
    console.log('value', person[key])
    }
   
}  // лучше не использовать т.к. заходит в прототип  нужна проверка

// better way

Object.keys(person).forEach(key => {
    console.log('key', key)
    console.log('value', person[key])
})


// let arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
// let arr2 = [1, 2, 3, 4, 5, 6, 7];

// let obj = {}    - заполнение обьекта из двух массивов
// for(let i = 0; i<=7; i++){
//     let keys = arr1[i]
//     let values = arr2[i]
//     obj[keys] = values
// }
// console.log(obj)

// let obj = {a: 1, b: 2, c: 3, d: 4, e: 5}; // смена местами ключей и значений
// let newObj = {}
//     let keys = Object.values(obj)
//     let values = Object.keys(obj)

// for (let i =0; i<=5; i++){
//     let key = keys[i]
//     let value = values[i]
//     newObj[key] = value
// }
// console.log(newObj)


