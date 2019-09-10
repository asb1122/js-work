'use strict';

/*
// hoisting example
console.log(leftBorderWidth); // переменная объявлена но не наделена значением
// console.log(second); - невидна т.к. код еще не дошел туда
// console.log(pi);

var leftBorderWidth = 1;
let second = 2;
{
    let third = 3;
    console.log(third);
}
const pi = 3.14;

console.log(leftBorderWidth); // 1
console.log(second); // 2
// console.log(third); не видно, т.к. переменная ограничена блоком кода
console.log(pi);
*/

/**---------------типы данных--------------- */
var number = 5; 
var string = "HELLO";
var sym = Symbol;
var boolean = true;
null; //- ссылка на несуществующую вещь
undefined; // - значение не назначено
var obj = {}; // струтура коллекция данных 

/*числовые значния:
console.log(4/0); //infinity
console.log('string'*9); //NaN
*/

//console.log(something); // = null - ссылка на несуществующую вещь 

let persone = {
    name: "John",
    age: 25,
    isMarried: false
}

console.log(persone.name);
console.log(persone["name"]);

let arr = ['plum.png', 'orange.jpg', 'apple.png'];
console.log(arr[1]);


// alert("Hello!");
// confirm("Are you here?");
// let answer = confirm('Are you here?');
// console.log(answer);
// let answer = prompt('Вам есть 18?', 'Да');
// console.log(answer);
// console.log(typeof(answer));


// console.log('arr' + ' - object'); //строка
// console.log(4 + ' - object'); //строка
// console.log('arr' + ' - object');


// Получение числовго значениея через +
// let answer = +prompt('Вам есть 18?', 'Да');
// console.log(typeof(answer));

// let incr = 10,
//     decr = 10;

// incr++; //11
// decr++; //9
// ++incr; //11
// --decr; //9

// console.log(incr); //11
// console.log(decr); //9
// console.log(++incr); //11
// console.log(--decr); //9
// console.log(incr++); //10 выводится число до изменения
// console.log(decr--); //10 выводится число до изменения

// == ===
console.log('1' == 1); //true
console.log('1' === 1); //false

//приоретет операторов
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
