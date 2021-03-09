"use strict";

/* Написать функцию, которая берет два массива и возвращает:
- Пересечение двух массивов.
- Разность двух массивов
Результат - 2 функции.
Пересечение двух массивов A и B — это массив только с теми элементами A и B, которые одновременно принадлежат обоим массивам, без дублей. их пересечение.
Разность двух массивов A и B — это массив с элементами A, не совпадающими с элементами B, без дублей. */

/* let arr1 = [1, 3, 4, 8, 9];
let arr2 = [1, 4, 5, 6, 9];

function crossing(array1, array2) {
    let cross = [];
    for (let i = 0; i < array1.length; i++) {
        if (array2.indexOf(array1[i]) > -1) cross.push(array1[i])
    }
    return cross;
}
console.log(crossing(arr1, arr2));

function difference(array1, array2) {
    let diff = [];
    for (let i = 0; i < array1.length; i++) {
        if (array2.indexOf(array1[i]) === -1) diff.push(array1[i])
    }
    return diff;
}
console.log(difference(arr1, arr2)); */

/* Дана строка “Раз-РАЗ-раЗ-рАз-раз”. Заменить “раз”  с помощью replace на числа. 
Результат должен быть такого вида: 1-2-3-4-5
console.log(strchange(“Раз-РАЗ-раЗ-рАз-раз”)  //1-2-3-4-5 */

/* let string = 'Раз-РАЗ-раЗ-рАз-раз';

function replace(str) {
    let arr = str.toLowerCase().split('-');
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'раз') res.push(i + 1);
    }
    return res.join('-');
}

console.log(replace(string)); */

/* 3. Написать функцию сравнения двух объектов. */

function equal(obj1, obj2) {
    
    if (Object.keys(obj1).length === Object.keys(obj2).length) {
        for (let key in obj1) {
            console.log(key);
            if (key != obj2[key]) return 'for'
        }
        return res;
    } else return false;
}
/* Исходные данные для теста: */
const user1 = {
    name: "Jhon",
    age: "10",
};
const user2 = {
    name: "Jhon",
    age: "10",
};
const user3 = {
    name: "Jhon",
    age: "11",
};
const user4 = {
    name: "Jhon",
};

/* Проверка работы функции: */
console.log(equal(user2, user1));// true
console.log(equal(user1, user1));
console.log(equal(user3, user1));
console.log(equal(user4, user2));


