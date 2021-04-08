// 1) створити функцію яка приймає масив та виводить його
function arr(array) {
    for (let ar of array) {
        console.log(ar);
    }
}
arr([2, 3, 4, 5, 6, 7, 7]);
console.log('==========================');

// 2) створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попередню функцію.
function arr2() {
    let array = [];

    for (let i = 0; i < 10; i++) {
        array.push(Math.floor(Math.random() * (10 - 4) + 4));
        console.log(array[i]);
    }
}
arr2();
console.log('==========================');


// 3) створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
function min(a, b, c) {
    let result = arguments[0];
    for (let arg of arguments) {
        if (result > arg) {
            result = arg;
        }
    }
    console.log(result);
}
min(7, 4, 5);
console.log('==========================');


// 4) створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
function max(a, b, c) {
    let result = arguments[0];
    for (let arg of arguments) {
        if (result < arg) {
            result = arg;
        }
    }
    console.log(result);
}
max(7, 20, 5);
console.log('==========================');

// 5) створити функцію яка повертає найбільше число з масиву
function maxOfArray(array) {
    let result = array[0];
    for (let max of array) {
        if (result < max) {
            result = max;
        }
    }
    console.log(result);
}
maxOfArray([20, 40, -30, 8]);
console.log('==========================');

// 6) створити функцію яка повертає найменьше число з масиву
function minOfArray(array) {
    let result = array[0];
    for (let min of array) {
        if (result > min) {
            result = min;
        }
    }
    console.log(result);
}
minOfArray([20, 40, -30, 8]);
console.log('==========================');

// 7) створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.
function sumOfArray(array) {
    let result = 0;
    for (let sum of array) {

        result += sum;

    }
    console.log(result);
}
sumOfArray([20, 40, -30, 8]);
console.log('==========================');

// 8) створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
function averageOfArray(array) {
    let result = 0;
    for (let average of array) {
        result += average / array.length;
    }
    console.log(result);
}

averageOfArray([20, 40, -30, 8]);
console.log('==========================');

// 9) Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
function objArray(obj) {
    let result = [];
    for (let o of obj) {
        result.push(Object.keys(o).join(', '));
    }
    console.log(result);
}

objArray([{
    name: 'Alex',
    age: 20,
    numb: 3802,
    surname: 'Forlov'
}, {
    name: 'Alex',
    age: 20,
    numb: 3802,
    surname: 'Forlov'
}, {
    name: 'Alex',
    weight: 20,
    numb: 3802,
    id: 'Forlov'
}, {
    name: 'Alex',
    height: 220,
    numb: 3802,
    surname: 'Forlov'
}]);

console.log('==========================');
// 10) Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
// [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]

function objArray2(obj) {
    let result = [];
    for (let o of obj) {
        result.push(Object.values(o).join(', '));
    }
    console.log(result);
}

objArray2([{
    name: 'Alex',
    age: 20,
    numb: 3802,
    surname: 'Forlov'
}, {
    name: 'Alex',
    age: 20,
    numb: 3802,
    surname: 'Forlov'
}, {
    name: 'Alex',
    weight: 20,
    numb: 3802,
    id: 'Forlov'
}, {
    name: 'Alex',
    height: 220,
    numb: 3802,
    surname: 'Forlov'
}]);

console.log('==========================');

// 11) створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//   EXAMPLE:
//   [1,2,3,4]
//   [2,3,4,5]
//   результат
//   [3,5,7,9]

function sameElements(array1, array2) {
    let array = [];
    for (let i = 0; i < array1.length; i++) {
        array.push(array1[i] + array2[i]);
    }

    console.log(array);
}
sameElements([1, 2, 3, 4], [2, 3, 4, 5]);
console.log('==========================');

// створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
function maxAndMin() {
    let min = arguments[0];
    let max = arguments[0];
    for (let arg of arguments) {
        if (max < arg) {
            max = arg;
        }
        if (min < arg) {
            min = arg;
        }
    }
    console.log(max);
    return (min);

}
maxAndMin(7, 20, 5, 5, 6, 8888, 9, -3);
console.log('==========================');

// - Взяти задачі з завдання 10 та 9 та обєднати їх в одну динамічну функцію.
//   Що б я міг сам вибрати повернути мені масив ключів чи масив значень.

function objArrayDouble(obj, type) {
    let result = [];

    for (let o of obj) {
        result.push(type === 'key' ? Object.keys(o).join(', ') : Object.values(o).join(', '));
    }
    return result;
}

console.log(objArrayDouble([{
    name: 'Alex',
    age: 20,
    numb: 3802,
    surname: 'Forlov'
}, {
    name: 'Alex',
    age: 20,
    numb: 3802,
    surname: 'Forlov'
}, {
    name: 'Alex',
    weight: 20,
    numb: 3802,
    id: 'Forlov'
}, {
    name: 'Alex',
    height: 220,
    numb: 3802,
    surname: 'Forlov'
}], 'key'));

console.log('==========================');

// - Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
function arrayIte(array, ite) {
    for (let i = 0; i < array.length; i++) {
        if (i === ite) {
            if (i === array.length - 1) {
                let s = array[i];
                array[i] = array[i + 1];
                array[i + 1] = s;
            }

        }
    }
    return array;
}
console.log(arrayIte([1, 2, 3, 4, 5, 6, 7, 8], 4));
console.log('==========================');

// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// Приклад
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]
function zerosElements(arrayZ) {
    let newArrayZ = [];
    for (let i = 0; i < arrayZ.length; i++) {
        if(arrayZ[i]===0){
            newArrayZ.push(arrayZ[i]);
            arrayZ.splice(i,1);
        }
    }

    
    return [...arrayZ,...newArrayZ];
}
console.log(zerosElements([1, 2, 3, 0, 4, 0, 5, 0, 6]));

// - Дано список імен.
// let n1 = '    Harry       Potter      '
// let n2 = '    Ron       Whisley      '
// let n3 = '    Hermione       Granger      '
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
function validStr (str){
    str=str.trim().split(' ');
    console.log(str);
    str[0]+=' ';
    console.log(str);
    return str.join('');

}
console.log(validStr('    Harry       Potter      '));
console.log('==========================');

// // ******************* НАЗАД В МИНУЛЕ *********************** //
// Створити функцію яка :
// - Додає в боді блок з текстом "Hello owu"
function divHello(){
    let div = document.createElement('div');
    div.innerText = 'Hello owu';
    document.body.appendChild(div);
}
divHello();

// - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи
function elementHello(tag,text){
    let element = document.createElement(tag);
    element.innerText = text;
    document.body.appendChild(element);
}
elementHello('div','it is new element');


// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
function arrayCars(cars,tag){
    let divs = document.getElementsByTagName(tag);
    for(let d of divs){
        d.textContent+=' '+cars;
    }
}
arrayCars(['Volvo','BMW', 'Nissan', 'Honda', 'Ford'],'div');

// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоці
function arrayCars2(cars,tag){
    let tags = document.getElementsByTagName(tag);
    for(let c of cars){
        let newBlock = document.createElement('div');
        newBlock.textContent=c;
        for(let t of tags){
            t.appendChild(newBlock);
        }
    }
}
arrayCars2(['Volvo','BMW', 'Nissan', 'Honda', 'Ford'],'p');

// // ******************* НАЗАД В МИНУЛЕ *********************** //

