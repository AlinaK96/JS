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
person.languages.push('finish')
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



