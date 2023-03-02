// 1 Number
// const num = 42 // integer
// const float = 42.42 // float
// const pow = 10e3
//
// console.log('MAX_SAFE_INTEGER', Number.MAX_SAFE_INTEGER)
// console.log('Math.pow 53', Math.pow(2, 53) - 1)
// console.log('MIN_SAFE_INTEGER', Number.MIN_SAFE_INTEGER)
// console.log('MAX_VALUE', Number.MAX_VALUE)
// console.log('MIN_VALUE', Number.MIN_VALUE)
// console.log('Maximum infinity', Number.POSITIVE_INFINITY)
// console.log('Mininal infinity', Number.NEGATIVE_INFINITY)

// console.log(Number.NaN) // 2 / undefined
// const strange = 2 / undefined
// console.log(isNaN(strange))

// console.log(Number.isFinite(42)) //проверка на конечность

const number = '42' //перевод в int
console.log(Number.parseInt(number) + 2)
console.log(parseInt(number) + 2)
console.log(+number + 2)

console.log(+(0.4 + 0.2).toFixed(1))

// 3 Math
// console.log(Math.E)
// console.log(Math.PI)
//
// console.log(Math.sqrt(25))
// console.log(Math.pow(5, 3))
// console.log(Math.abs(-42)) - модуль
// console.log(Math.max(42, 12, 23, 11, 422))
// console.log(Math.min(42, 12, 23, 11, 422))
// console.log(Math.floor(4.9)) - округление в меньшую сторону
// console.log(Math.ceil(4.9)) - округление в большую сторону
// console.log(Math.round(4.4))  - округление к ближайшему целому
// console.log(Math.trunc(4.9)) - удаляет всю дробную часть 
// console.log(Math.random())

function getRandon(min, max){
    return Math.floor(Math.random() * (max-min+1) + min)
}

console.log(getRandon(10,50))