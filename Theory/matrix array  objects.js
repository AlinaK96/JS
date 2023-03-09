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
// let arr = []
// let k = 2

// for (let i =0; i<=2; i++){
//     arr[i] = []
//     for (let j = 0; j<= 2; j++){
//         arr[i].push(k++)
//     }
// }
// console.log(arr)


//Перебор обьекта
// let obj = {
// 	a: {
// 		1: 'a1',
// 		2: 'a2',
// 		3: 'a3',
// 	},
// 	b: {
// 		1: 'b1',
// 		2: 'b2',
// 		3: 'b3',
// 	},
// 	c: {
// 		1: 'c1',
// 		2: 'c2',
// 		3: 'c3',
// 	},
// }

// for (let key in obj) {
// 	let subObj = obj[key];
	
// 	for (let subKey in subObj) {
// 		console.log(subObj[subKey]);
// 	}
// }

// let obj = {
// 	1: {
// 		1: 11,
// 		2: 12,
// 		3: 13,
// 	},
// 	2: {
// 		1: 21,
// 		2: 22,
// 		3: 23,
// 	},
// 	3: {
// 		1: 24,
// 		2: 25,
// 		3: 26,
// 	},
// }

// for ( let key in obj){
//     let subObj = obj[key]
//     for ( let value in subObj){
//         console.log(subObj[value])
//     }
// }

// Перебор обьекта из массивов

let students = {
	'group1': ['student11', 'student12', 'student13'],
	'group2': ['student21', 'student22', 'student23'],
	'group3': ['student31', 'student32'],
};

for (let group in students){
    for (let name of students[group]){
        console.log(name)
    }
}

// let data = {
// 	1: [
// 		'data11',
// 		'data12',
// 		'data13',
// 	],
// 	2: [
// 		'data21',
// 		'data22',
// 		'data23',
// 	],
// 	3: [
// 		'data31',
// 		'data32',
// 		'data33',
// 	],
// 	4: [
// 		'data41',
// 		'data42',
// 		'data43',
// 	],
// };

// for ( let category in data){
//     for ( let content of data[category]){
//         console.log(content)
//     }
// }

// let data = [
// 	{
// 		1: 'data11',
// 		2: 'data12',
// 		3: 'data13',
// 	},
// 	{
// 		1: 'data21',
// 		2: 'data22',
// 		3: 'data33',
// 	},
// 	{
// 		1: 'data31',
// 		2: 'data32',
// 		3: 'data33',
// 	},
// ];

// for (let content of data){
//     for (let info in data[content]){
//         console.log(info)
//     }
// }

// let employees = [
// 	{
// 		name: 'name1',
// 		salary: 300,
// 	},
// 	{
// 		name: 'name2',
// 		salary: 400,
// 	},
// 	{
// 		name: 'name3',
// 		salary: 500,
// 	},
// ];

// for (let employee of employees){
//    // console.log(employee.name + ' ' + employee.salary)
//     console.log(employee.salary)
// }

// let employees = [
// 	{
// 		name: 'name1',
// 		salary: 300,
// 		age: 28,
// 	},
// 	{
// 		name: 'name2',
// 		salary: 400,
// 		age: 29,
// 	},
// 	{
// 		name: 'name3',
// 		salary: 500,
// 		age: 30,
// 	},
// 	{
// 		name: 'name4',
// 		salary: 600,
// 		age: 31,
// 	},
// 	{
// 		name: 'name5',
// 		salary: 700,
// 		age: 32,
// 	},
// ];

// let sum=0

// for ( let employee of employees){
//     if (employee.age >= 30){
//         sum+= employee.salary
        
//     }
// }
// console.log(sum)




// let months = {
// 	'ru': [
// 		'январь',
// 		'февраль',
// 		'март',
// 		'апрель',
// 		'май',
// 		'июнь',
// 		'июль',
// 		'август',
// 		'сентябрь',
// 		'октябрь',
// 		'ноябрь',
// 		'декабрь',
// 	],
// 	'en': [
// 		'january',
// 		'february',
// 		'march',
// 		'april',
// 		'may',
// 		'june',
// 		'july',
// 		'august',
// 		'september',
// 		'october',
// 		'november',
// 		'december',
// 	],
// };

// let lang = 'ru'; // может быть или 'ru' или 'en'
// let month = 5;   // число от 0 до 11

// console.log(months[lang][month])
// console.log(months['en'][month])

// let affairs = {
// 	'2018': {
// 		11: {
// 			29: ['дело111', 'дело112', 'дело113'],
// 			30: ['дело121', 'дело122', 'дело123'],
// 		},
// 		12: {
// 			30: ['дело211', 'дело212', 'дело213'],
// 			31: ['дело221', 'дело222', 'дело223'],
// 		},
// 	},
// 	'2019': {
// 		12: {
// 			29: ['дело311', 'дело312', 'дело313'],
// 			30: ['дело321', 'дело322', 'дело323'],
// 			31: ['дело331', 'дело332', 'дело333'],
// 		}
// 	},
// }

// let year = '2018'
// let mon = 12
// let day = 30
// //console.log(affairs[year][mon][day])

// let obj = {
// 	key1: {
// 		key2: '12',
// 		key3: '13',
// 	},
// 	key2: {
// 		key4: '24',
// 		key5: '25',
// 	},
// }

// let key1 = 'key2';
// let key2 = 'key4';
// console.log(obj[key1][key2]);

// let employees = [
// 	{
// 		name: 'name1',
// 		salary: 300,
// 		age: 28,
// 	},
// 	{
// 		name: 'name2',
// 		salary: 400,
// 		age: 29,
// 	},
// 	{
// 		name: 'name3',
// 		salary: 500,
// 		age: 30,
// 	},
// ];

// employees.push({
//     name: 'Masha',
//     salary: 7200,
//     age: 25,
// })
// console.log(employees)

// let affairs = {
// 	'2019-12-28': ['data11', 'data12', 'data13'],
// 	'2019-12-29': ['data21', 'data22', 'data23'],
// 	'2019-12-30': ['data31', 'data32', 'data33'],
// }
// affairs["2019-12-28"].push('data19')
// console.log(affairs)


// let students = {
// 	'group1': {
// 		'subgroup11': ['student111', 'student112', 'student113'],
// 		'subgroup12': ['student121', 'student122', 'student123'],
// 	},
// 	'group2': {
// 		'subgroup21': ['student211', 'student212', 'student213'],
// 		'subgroup22': ['student221', 'student222', 'student223'],
// 	},
// 	'group3': {
// 		'subgroup31': ['student311', 'student312', 'student313'],
// 		'subgroup32': ['student321', 'student322', 'student323'],
// 	},
// };

// //Добавьте нового студента в подгруппу 'subgroup11'.

// students.group1.subgroup11.push('student114')
// console.log(students)

// //Добавьте в первую группу еще одну подгруппу.

// students.group1.subgroup13 = []

// //Сделайте четвертую группу, в ней сделайте подгруппу и добавьте в нее двух новых студентов.

// students.group4 = []
// students.group4.subgroup41 = []
// students.group4.subgroup41.push('student4321', 'student411', 'student4222')