// let ok = confirm('Вам есть 18 лет?')
// if (ok) {                                                 // if (ok) == if ok == true 
//     alert('Доступ разрешен')
// } else{
//     alert('Доступ закрыт')
// }

// let min = prompt('Сколько сейчас минут?')

// if (min >= 0 && min <=20){
//     alert('первая треть часа')
// }
// if (min >= 21 && min <=40){
//     alert('вторая треть часа')
// }
// if (min >= 41 && min <=59){
//     alert('третья треть часа')
// }

// let str = '345'
// if (str.length == 3){
//     alert(Number(str[0]) + Number(str[1]) + Number(str[2]))
// } else{
//     if(str.length > 3 || str.length < 3){
//         alert('wrong length')
//     }
// }

// let num = [9,4,45,12,88]
// if (num.length == 5){
//     alert(num[0]* num[1] * num[2] * num[3] * num[4])
// } else {
//     alert('the length is incorrect')
// }

// let str = 'anhgmksdieg'
// if (str[0] == 'a'){
//     alert('true')
// } else{
//     alert('false')
// }

// let str1 = 'anhgmksdiex'
// let last = str1.length - 1

// if (str1[last] == 'x'){
//     alert('true')
// } else{
//     alert('false')
// }

// let a = 10;
// let b = 3;

// if (a % b === 0) {
// 	alert('делится нацело');
// } else {
// 	alert('делится с остатком');
// }

// let c = prompt('enter number')
// if (c % 2 === 0){
//     alert('чётное число')
// } else{
//     alert('нечётное число')
// }

// let res = 0;

// for (let i = 1; i <= 100; i++) {
// 	res += i;
// }
// alert(res);

// let arr = [2, 5, 9, 3, 1, 4];
// let result = 0

// // for (let elem of arr){
// //     if (elem % 2 === 0){
// //         result +=elem
// //     }
// // }
// // alert(result)

// for (let elem of arr){
//     result += elem*elem
// }
// alert(result)

// let str = ''
// for ( let i = 0; i <= 5; i++){
//     str += '-'
// }
// alert(str)

// let str1 = ''
// for ( let el = 1; el<=9; el++){
//     str1 += el
// }

// alert(str1)


// let string = ''
// for (let x = 9; x >= 1; x--){
//     string += `- ${x}`
// }

// alert (string)

// for (let i = 11; i <=33; i+10){
//     for (let j = 0; j<=2; j++){
//         i = i+j
//         console.log(i +'')
//     }
// }

// let array = [5,8,7,9,14,-9,74,-14,-8]
// let arraynew = []
// for (let i = 0; i <=array.length; i++){
//     if (array[i] > 0){
//         arraynew.push(array[i])
//     }
// }
// alert(arraynew)

//let array = [5,8,7,9,14,74]

// for (let i =0; i < array.length; i++){
//     array[i] = array[i] **2
// }
// //alert(array)

// for (let x =0; x <array.length; x ++){
//     array[x] -=1
// }
// alert(array)

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

// let obj = {x: 1, y: 2, z: 3};  // изменение обьекта перебором 
// for (let key in obj){
//     obj[key] += 1
// }
// console.log(obj)

// let arr = ['a', 'b', 'e'];
// let flag = false

// for (let i of arr){
//     if(i === 'c'){
//         flag = true
//         break
//     }
// }

// if (flag){
//     alert('c есть в массиве')
// } else{
//     alert('no c')
// }

// let arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
// let count3 = 0
// let count2 = 0

// for (let i of arr){
//     if(i == 3)
//     {
//         count3++
//     }
//     if(i == 2){
//         count2++
//     }
//     else{
//         continue
//     }
// }
// console.log(`2: ${count2} and 3: ${count3}`)

// let arr = [10, 20, 30, 40, 21, 32, 51];
// let summ = 0
// for(let i=0; i<=arr.length-1;i++){
//     let num = String(arr[i]) 
//     let char= num[0] 
//     if(char=="1" || char=="2"){
//         summ += arr[i]
//     }
// }

// console.log(summ)

// let i = 1
// while (i <=100){
//     if (i % 2 == 0){
//        console.log(i)
//     }
//     i++
    
// }

// let arr = []
// for (let i = 1; i <= 10; i++){
//     arr.push(i)
// }
// console.log(arr)

// let flag = false

// for( let i of arr){
//     if (i == 5){
//         flag = true
//         break
//     }
// }

// if (flag){
//     console.log('5 is in array')
// } else{
//     console.log(' no 5 in array')
// }

// let arr = [10, 20, 30, 5, 40, 21, 32, 51];
// let sum = 0

// for (let elem of arr){
//     sum += elem 
// }
// console.log(sum / arr.length)

// let number = 5
// i = 1
// while (i <= number){
//     i *=i
//     i++
// }
// console.log(i)

// let arr = []
// for (let i = 10; i >=1; i--){
//     arr.push(i)

// }
//     console.log(arr)


//let arr = [10, -20, 30, -5, -40, 21, 32, -51];
// sum = 0

// for (let i of arr){
//     if (i > 0){
//         sum+=i
//     }
// }
// console.log(sum)

//Дан массив с числами. С помощью цикла выведите на экран все элементы, значение которых совпадает с их порядковым номером в массиве.

// let arr = [45, 1, 10, -20, 4, -5, -40, 21, 32, -51];
// for(let i of arr){
//     if (arr[i]=== i){
//         console.log(arr[i])
//     }
// }

//Дан массив с числами. С помощью цикла for и функции document.write выведите каждый элемент массива с новой строки. Исполь
//зуйте для этого тег br.
// let arr = [10, 1, 30, 50, 235, 3000];

// for (let i = 0; i <= arr.length-1; i++) {
//     document.write(arr[i] + '<br>');
// }

//Дан массив с числами. С помощью цикла for и функции document.write выведите каждый элемент массива в отдельном абзаце.
// let arr = [10, 1, 30, 50, 235, 3000];

// for (let i = 0; i <= arr.length -1; i++){
//     document.write(arr[i] + '<p>')
// }

//Составьте массив дней недели. С помощью цикла for выведите все дни недели, а выходные дни выведите жирным.

// let arr = ['Monday', 'Thuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
// let week = ''
// for (let i = 0; i <= arr.length-3; i++) {
//     week += arr[i] + ' ';
// }

// document.write(week + '<b>' + 'Saturday' + '</b>' +' '+ '<b>' + 'Sunday' + '</b>');

//Увеличьте зарплату каждого работника на 10%.

// let obj = {
// 	employee1: 100,
// 	employee2: 200,
// 	employee3: 300,
// 	employee4: 400,
// 	employee5: 500,
// 	employee6: 600,
// 	employee7: 700,
// };

// for (let i in obj){
//     if(obj[i] <= 400){
//        newSalary = obj[i] + obj[i] * 0.1
//         console.log(newSalary) 
//     }
    
// }


//С помощью этих массивов создайте новый объект, сделав его ключами элементы первого массива, а значениями - элементы второго.
// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [6, 7, 8, 9, 10];

// let obj = {}

// for(let i = 0; i <= arr1.length-1; i++){
//     let keys = arr1[i]
//     let value = arr2[i]
//     obj[keys] = value
// }

// console.log(obj)

//Найдите сумму ключей этого объекта и поделите ее на сумму значений.
// let obj = {1: 6, 2: 7, 3: 8, 4: 9, 5: 10};
// let sum = 0;
// let sum2 = 0;

// for (let key in obj) {
//     sum += Number(key);
//     sum2 += new Number(obj[key]);
// }
// console.log(sum/sum2);
//Запишите ключи этого объекта в один массив, а значения - в другой.
// let obj = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};
// let newObj = {}
// let key = Object.values(obj)
// let value = Object.keys(obj)

// for (let i =0; i<=5; i++){
//     let keys = key[i]
//     let values = value[i]
//     newObj[keys] = values
// }
// console.log(newObj)


//l', 'e', 'g' и 'a'.
// let arr = [
// 	['a', 'b', 'c'],
// 	['d', 'e', 'f'],
// 	['g', 'h', 'i'],
// 	['j', 'k', 'l'],
// ];

// console.log(arr[3][2])
// console.log(arr[1][1])
// console.log(arr[2][0])
// console.log(arr[0][0])

// let arr = [[1, 2], [3, 4], [5, 6]];

// let sum = arr[0][0] + arr[0][1] + arr[1][0] + arr[1][1] + arr[2][0] + arr[2][1]
// console.log(sum)

// let arr = [
// 	[
// 		[1, 2],
// 		[3, 4],
// 	],
// 	[
// 		[5, 6],
// 		[7, 8],
// 	],
// ];

// let sum = arr[0][0][0] + arr[0][0][1] + arr[0][1][0] + arr[0][1][1] + arr[1][0][0] + arr[1][0][1] + arr[1][1][0] + arr[1][1][1]
// console.log(sum)

// let arr = [[1, 2, 3, 4, 5], [6, 7, 8], [9, 10]];

// for (let subArr of arr) {
// 	for (let elem of subArr) {
// 		console.log(elem);
// 	}
// }

//С помощью вложенных циклов найдите сумму элементов этого массива.
// let arr = [[1, 2, 3], [4, 5], [6]];
//  let sum = 0
// for (let i of arr){
//     for (let j of i){
//         sum+=j

//     }
// }
// console.log(sum)

// С помощью вложенных циклов найдите сумму элементов этого массива.
// let arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
// let sum = 0

// for (let i of arr){
//     for(let j of i){
//         for( let k of j){
//             sum += k
//         }
//     }
// }
// console.log(sum)

// заполнение массива   [[1, 2, 3], [1, 2, 3], [1, 2, 3]]
// let arr = [];

// for (let i = 0; i < 3; i++) {
// 	arr[i] = []; // создаем пустые вложенные массивы
	
// 	for (let j = 0; j < 3; j++) {
// 		arr[i].push(j + 1); // заполняем подмассив числами
// 	}
// }

// console.log(arr);

// [[1, 2, 3, 4, 5], [1, 2, 3, 4, 5], [1, 2, 3, 4, 5]]

// let arr = []

// for (let i = 0; i <= 4; i++){
//     arr[i] = []
//     for(let j=0; j <= 4; j++){
//         arr[i].push(j+1)
//     }
// }
// console.log(arr)

// let arr = []

// for (let i = 0; i <=4; i++){
//     arr[i] = []
//     for (let j = 0; j<=4; j++){
//         arr[i].push('x')
//     }
// }

// console.log(arr)


// let arr = []

// for (let i = 0; i <=4; i++){
//     arr[i] = []
//     for(let j = 0; j <=4; j++){
//         arr[j] = []
//         for(let k = 0; k <= 4; k++){
//             arr[j].push(k+1)
//         }
//     }
// }

// console.log(arr)

//[[2, 4, 6], [8, 10, 12], [14, 16, 18], [20, 22, 24]]
let arr = []
let k = 2

for (let i =0; i<=2; i++){
    arr[i] = []
    for (let j = 0; j<= 2; j++){
        arr[i].push(k++)
    }
}
console.log(arr)