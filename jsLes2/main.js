// - Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.
let array1 = ['a', 'b', 'c'];
for (let i = 0; i < 3; i++) {
    array1.push(i + 1);
}
console.log(array1);

// - Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].
let array2 = [1, 2, 3];
array2.reverse();

// - Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.
let array3 = [1, 2, 3];
array3.push(4);
array3.push(5);
array3.push(6);
// - Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.
let array4 = [1, 2, 3];
array4.unshift(6);
array4.unshift(5);
array4.unshift(4);

// - Дан масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою shift()
let array5 = ['js', 'css', 'jq'];
console.log(array5.shift());
// - Дан масив ['js', 'css', 'jq']. Виведіть на екран останній елемент за допомогою pop()
let array6 = ['js', 'css', 'jq'];
console.log(array5.pop());


// - Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [4, 5].
let array7 = [1, 2, 3, 4, 5];
array7 = array7.slice(3, 5);


// - Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [1,2].
let array8 = [1, 2, 3, 4, 5];
array8 = array8.slice(0, 2);


// - Дан масив [1, 2, 3, 4, 5]. Зробіть з нього масив [1, 2, 3, 'a', 'b', 'c', 4, 5].
let array9 = [1, 2, 3, 4, 5];
array9.splice(3, 0, 'a', 'b', 'c');

// - Дан масив [1, 2, 3, 4, 5]. Зробіть з нього масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
let array10 = [1, 2, 3, 4, 5];
array10.splice(1, 0, 'a', 'b');
array10.splice(6, 0, 'c');
array10.splice(8, 0, 'e');

// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
let array11 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 1; i < array11.length; i += 2) {
    console.log(array11[i]);
}

console.log('---------------------------------------');

// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу та push () скопіювати значення одного масиву в інший
let array12 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let array13 = [];
for (let i = 0; i < array12.length; i++) {
    array13.push(array12[i]);
}

// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
let array14 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let array15 = [];
for (let i = 0; i < array14.length; i++) {
    array15[i] = array14[i];
}


// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
// 1. перебрати його циклом while
let array16 = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
let i = 0;
while (i < array16.length) {
    console.log(array16[i]);
    i++
}
console.log('---------------------------------------');

// 2. перебрати його циклом for
for (let i = 0; i < array16.length; i++) {
    console.log(array16[i]);
}
console.log('---------------------------------------');

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
let k = 0;
while (k < array16.length) {
    console.log('index ' + k + ': ' + array16[k]);
    k += 2;
}
console.log('---------------------------------------');

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
for (let i = 0; i < array16.length; i += 2) {
    console.log('index ' + i + ': ' + array16[i]);
}
console.log('---------------------------------------');

// 5. перебрати циклом while та вивести  числа тільки парні  значення
let j = 1;
while (j < array16.length) {
    console.log('index ' + j + ': ' + array16[j]);
    j += 2;
}
console.log('---------------------------------------');

// 6. перебрати циклом for та вивести  числа тільки парні  значення
for (let i = 1; i < array16.length; i += 2) {
    console.log('index ' + i + ': ' + array16[i]);
}
console.log('---------------------------------------');

// 7. замінити кожне число кратне 3 на слово "okten"
for (let i = 1; i < array16.length; i++) {
    if (i % 3 == 0) {
        array16[i] = 'okten';
    }
}


// 8. вивести масив в зворотньому порядку.
array16.reverse();
console.log(array16);
console.log('---------------------------------------');

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
i = array16.length - 1;
while (i >= 0) {
    console.log(array16[i]);
    i--
}
console.log('---------------------------------------');

for (let i = array16.length - 1; i >= 0; i--) {
    console.log(array16[i]);
}
console.log('---------------------------------------');

k = array16.length - 1;
while (k >= 0) {
    console.log('index ' + k + ': ' + array16[k]);
    k -= 2;
}
console.log('---------------------------------------');

for (let i = array16.length - 1; i >= 0; i -= 2) {
    console.log('index ' + i + ': ' + array16[i]);
}
console.log('---------------------------------------');

j = array16.length - 1;
while (j >= 1) {
    console.log('index ' + j + ': ' + array16[j]);
    j -= 2;
}
console.log('---------------------------------------');

for (let i = array16.length - 1; i >= 1; i -= 2) {
    console.log('index ' + i + ': ' + array16[i]);
}
console.log('---------------------------------------');

for (let i = array16.length - 1; i >= 1; i--) {
    if (i % 3 == 0) {
        array16[i] = 'okten';
    }
}

// 10
//  створити пустий масив та :
// - заповнити його 50 парними числами за допомоги циклу.
let array17 = [];
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        array17.push(i);
    }
}


// - заповнити його 50 непарними числами за допомоги циклу.
for (let i = 1; i <= 100; i++) {
    if (i % 2 !== 0) {
        array17.push(i);
    }
}

// 1. Створити пустий масив та :
//         Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
let array18 = [];

for (let i = 0; i < 20; i++) {
    array18.push(Math.floor(Math.random() * (100 - 0)) + 0);
}


//         Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)

for (let i = 0; i < 20; i++) {
    array18.push(Math.floor(Math.random() * (732 - 8)) + 8);
}

//  2. Вивести за допомогою console.log кожен третій елемен
for (let i = 1; i < array18.length; i++) {
    if (i % 3 == 0) {
        console.log('index ' + i + ': ' + array18[i]);
    }
}
console.log('---------------------------------------');


//  3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
for (let i = 1; i < array18.length; i++) {
    if (i % 3 === 0) {
        if (array18[i] % 2 === 0) {
            console.log('index ' + i + ': ' + array18[i]);
        }
    }
}
console.log('---------------------------------------');

//  4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
let array19 = [];
for (let i = 1; i < array18.length; i++) {
    if (i % 3 === 0) {
        if (array18[i] % 2 === 0) {
            console.log('index ' + i + ': ' + array18[i]);
            array19.push(array18[i]);
        }
    }
}


console.log('---------------------------------------');

//  5. Вивести кожен елемент масиву, сусід справа якого є парним
//   EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
let array20 = [1, 2, 3, 5, 7, 9, 56, 8, 67];
for (let i = 0; i < array20.length; i++) {
    if (i != array20.length - 1) {
        if (array20[i + 1] % 2 === 0) {
            console.log(array20[i] + ' right element: ' + array20[i + 1]);
        }
    }

}
console.log('---------------------------------------');


//  6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
let array21 = [100,250,50,168,120,345,188];
let average = 0;
for(let i = 0;i<array21.length;i++){
    average+=array21[i]/array21.length;
}

//  7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
let array22 = [];
let array23 = [];
for(let i  = 0;i<10;i++){
    array22.push(Math.floor(Math.random() * (50 - 5)) + 5);
    array22[i]*=5;
    array23.push(array22[i]);
}

//  8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
let array24 = ['start', 10, 'sec', false, 5, 'hi', 40, 50, 60, false];
let array25 = [];
for(let i = 0; i<array24.length;i++){
    if(typeof array24[i]=='number'){
        array25.push(array24[i]);
    }
}

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
let array26 = [ 'a', 'b', 'c'];
let abc = '';
for(let i = 0; i<array26.length;i++){
    abc +=array26[i];
}
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
let array27 = [ 'a', 'b', 'c'];
let abc2 = '';
 i = 0;
    while(i<array27.length){
        abc2 +=array26[i];
        i++;
    }
