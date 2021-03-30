// --створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

let array = [3, 2, 4, 5, 6, 'java', 'js', 'home', 'study', 'red', true, false, 34, 66666, 'end'];
for (let item of array) {
    console.log(item);
}
console.log('------------------------------------');
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
let array2 = [];
array2[0] = 2;
array2[1] = true;
array2[2] = 'hello';
array2[3] = 233;
for (let item of array2) {
    console.log(item);
}
//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
for (let i = 0; i < 10; i++) {
    document.write('<div>Hello world </div>');
}

document.write('<hr>');
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
for (let i = 10; i < 20; i++) {
    document.write('<div>' + 'You have ' + i + 'dollars' + '</div>');
}

document.write('<hr>');

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
let i = 0;
while (i < 20) {
    document.write('<h1>Go learning</h1>');
    i++;
}

document.write('<hr>');

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
document.write('<h1>Please count the elephants<\h1>');
i = 2;
while (i <= 40) {
    document.write('<h1>' + i + 'elephants' + '</h1>');
    i += 2;
}

document.write('<hr>');

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
let array3 = [3, 2, 4, 5, 6, 45, 78, 89, 0, 67, -3, -2323, 3.4, 66666, 34.232];
for (let i = 0; i < array3.length; i++) {
    console.log(array3[i]);
}

console.log('===============================================');
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.


let array4 = ['hello', 'guys', 'my', 'name', 'is', 'Sanya', 'and', 'i', 'am', 'glad', 'to', 'see', 'you'];
for (let i = 0; i < array4.length; i++) {
    console.log(array4[i]);
}
console.log('===============================================');
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

let array5 = ['start', 'small', 'test', 01, 02, 03, true, 01, false, 'stop'];
for (let i = 0; i < array5.length; i++) {
    console.log(array5[i]);
}
console.log('===============================================');
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
let array6 = ['start', 'small', 'test', 0, true, false, true, 1, false, 'stop'];
for (let i = 0; i < array6.length; i++) {
    if (typeof array6[i] === "boolean") {
        console.log(array6[i]);
    }

}

console.log('===============================================');
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
let array7 = ['start', 'small', 'test', 0, 1, 0, true, 1, false, 'stop'];
for (let i = 0; i < array7.length; i++) {
    if (typeof array7[i] === "number") {
        console.log(array7[i]);
    }

}

console.log('===============================================');
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

let array8 = ['start', 'small', 'test', 0, 1, 0, true, 1, false, 'stop'];
for (let i = 0; i < array8.length; i++) {
    if (typeof array8[i] === "string") {
        console.log(array8[i]);
    }

}

console.log('===============================================');
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
let array9 = [];
array9[0] = 2;
array9[1] = true;
array9[2] = 'hello';
array9[3] = 233;
array9[4] = false;
array9[5] = 24 * 2 - 4;
array9[6] = 'hello ' + 'wolrd';
array9[7] = Math.PI;
array9[8] = -233 / 4;
array9[9] = Math.pow(2, 3);
for (let item of array9) {
    console.log(item);
}

console.log('===============================================');
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i = 101; i <= 110; i++) {
    console.log(i);
    document.write(i);
}

console.log('===============================================');
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i = 1; i <= 100; i++) {
    console.log(i);
    document.write(i);
}

console.log('===============================================');
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
for (let i = 1; i <= 200; i += 2) {
    console.log(i);
    document.write(i);
}

console.log('===============================================');
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i);
        document.write(i);
    }

}


console.log('===============================================');

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 1) {
        console.log(i);
        document.write(i);
    }

}

console.log('===============================================');
// - Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)
for (let m = 0; m < 2; m++) {
    for (let s = 0; s < 60; s++) {
        console.log(m + ':minutes ' + s + ':sseconds');
    }
}
console.log('2:minutes');


console.log('===============================================');
// - Відтворити роботу годинника, відрахувавши  2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)
for (let h = 0; h <= 3; h++) {
    for (let m = 0; m < 60; m++) {
        for (let s = 0; s < 60; s++) {
            if (h <= 2 && m <= 20 && s<=0) {
                console.log(h + ':hours ' + m + ':minutes ' + s + ':sseconds');
            } else break;
        }
    }
}