// 1. Оголосіть змінні str, num, flag и txt зі значеннями «Привіт», 123, true, «true».
//    За допомогою typeof переконайтесь, що значення змінних належать типам: string, number и  boolean.
let str = 'Привіт';
let num = 123;
let flag = true;
let txt = true;
console.log(typeof str);
console.log(typeof num);
console.log(typeof flag);
console.log(typeof txt);

// 2. Оголосіть змінні a1, a2, a3, a4, a5. За домогою 3х математичних оператцій отримайте числа:
//     34, 12, 66, 90, 87
//     Старайтесь використовувати різні оператори. 
//     Example: 88 = (16 / 2) * 11
let a1 = 6*6-2;
let a2 = Math.pow(2,2)*6/2;
let a3 = (4+7)*6;
let a4 = Math.pow(15,2)-(5*27);
let a5 = 6*29/2;

// Створіть змінні a6, a7, a8, a9, a10. Запишіть в них результати виразів:
//     5 % 3,
//     3 % 5,
//     5 + '3',
//     '5' - 3,
//     75 + 'кг'
let a6 = 5%3;
let a7 = 3%5;
let a8 = 5+'3';
let a9 = '5'-3;
let a10 = 75+'кг';

// Напищіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
//    Значееня площі зберігати в змінній s.
let height = 23;
let width = 10;
let s = height*width;

// Напиши код, который находит объем цилиндра высотой 10м (переменная heightC) и диаметром основания 4м (dC),
//     результат поместите в переменную v.
let heightC = 10;
let dC = 4;
let v = Math.PI*Math.pow((dC/2),2)*heightC;

// 6. У прямоугольного треугольника две стороны n (со значением 3) и m (со значением 4).
//    Найдите гипотенузу k по теореме Пифагора (нужно использовать функцию Math.pow(число, степень) или оператор возведения в степень ** ).
let n, n2 = 3;
let m = 4;
let k = Math.pow(n,2)+Math.pow(n2,2);

// 7. Напишите скрипт, который выводит "Hello world", создавши переменную str и выводить спомощью document.write, alert и console.log
let str2 = 'Hello world';
document.write(str2);
console.log(str2);
alert(str2);

//8. Вывести в окно браузера при помощи метода alert() следующие данные: Ваше ФИО, возраст, хобби (каждой на новой строки спомощью \n).
alert('Pavliv Oleksandr Mukolayovich'+'\n'+'age: 20 years old'+'\n'+'My hobbie is running and swimming');

// 9. Создать 4 переменные с использованием ключевого слова let с именами str1, str2, str3, concatenation.
//   Переменной str1 присвоить фразу ‘Кто ‘, str2 – ‘ты ‘, str3 – ‘такой?’
//   Локальной переменной concatenation присвоить результат конкатенации 3-х строк: str1, str2, str3.
//   Вывести в документ содержимое переменной concatenation спомощью document.write
let str3 = 'Кто ';
let str4 = 'ты ';
let str5 = 'такой?';
let concatenation = str3+str4+str5;
document.write(concatenation);

// 10. Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
    let str6 = "20";
     let a = 5;
     document.write(str6 + a + "<br/>");
     document.write(str6 - a + "<br/>");
     document.write(str6 * "2" + "<br/>");
     document.write(str6 / 2 + "<br/>");
// 11. Какие значения выведет в окно консоли следующий фрагмент кода если его поместить в console.log?
    console.log(parseInt("3.14"))
    console.log(parseInt("-7.875"))
    console.log(parseInt("435"))
    console.log(parseInt("Вася"))

// 12.  С помощью окна ввода, вызываемого методом prompt, пользователь может ввести данные, которые будут использоваться далее, повторите код ниже
    let str7 = prompt("Enter something", "ho-ho")
    console.log(str7);

// 13. С помощью окна ввода, вызываемого методом prompt, сделать сложение двух чисел, а вывод результата при помощи метода alert
let numPrompt1 = prompt('Number 1');
let numPrompt2 = prompt('Number 2');
let result = numPrompt1+" "+ numPrompt2;
alert(result);

// 14. С помощью окна ввода, вызываемого методом prompt, пользователь последовательно выводит имя, фамилию и возраст, а вам не обходимо вывести строку такого вида
//       Доброго вечера Иван Иванов, мои поздравления что вам 32 , а вывод результата при помощи метода alert
let namePrompt = prompt("Yuor name");
let surnamePrompt = prompt("Yuor surname");
let agePrompt = prompt("Yuor age");
let data = 'Доброго вечера '+namePrompt+' '+surnamePrompt+', мои поздравления что вам '+agePrompt;
alert(data);

// =====================
// ======ДОП============
// =====================

// 1. Три різних числа вводяться через prompt().
// За допомоги if else вивести іх в порядку зростання. (відсортувати по зростанню)
let numb1 = prompt('numb1');
let numb2 = prompt('numb2');
let numb3 = prompt('numb3');

if(numb1>numb2&&numb1>numb3){
    console.log(numb1);
    if(numb2>numb3){
        console.log(numb2);
        console.log(numb3);
    } else{
        console.log(numb3);
        console.log(numb2);
    }

} else if(numb1<numb2&&numb1<numb3){
    if(numb2>numb3){
        console.log(numb2);
        console.log(numb3);
        console.log(numb1);
    } else{
        console.log(numb3);
        console.log(numb2);
        console.log(numb1);
    }
} 

// 2.
// Все параматры получаем с клавиатуры!!!!
// Имитируем поведение пешехода на перекстке.
// Если светофор зеленый - вывести "иди".
// Если светофор желтый - вывести "подожди".
// Если светофор красный - вывести "стой".
// Если светофор в аварийном режиме вывести "делай что хочешь"!
let light = prompt('light');

if(light === 'green'){
    console.log('go');
}else if(light === 'yellow'){
    console.log('wait');

} else console.log('stay');

// 3
// Все параметры получаем с клавиатуры!!!!(prompt , confirm)
// Создать переменную isRoadClear которая характеризирует наличие на дороге машин.
// Улучшаем предыдущее задание.
// Если светофор зеленый и машин нет - вывести "иди".
// Если светофор зеленый и машины есть  - вывести подожди пока нарушители проедут".
// Если светофор желтый и машины есть - вывести "жди".
// Если светофор желтый и машин нет - вывести "все рано жди".
// Если светофор красный и машин нет- вывести "стой все рано".
// Если светофор красный - и машины есть вывести "стой и жди".
// Если светофор в аварийном режиме вывести "делай что хочешь"!
let light2 = prompt('light');
let isRoadClear = confirm('is Road Clear?');

if(light2 === 'green'&&isRoadClear===true){
    console.log('go');
}
else if(light2 === 'green'&&isRoadClear===false){
    console.log('wait until the violators pass');
}
else if(light2 === 'yellow'&&isRoadClear===false){
    console.log('wait');
}
else if(light2 === 'yellow'&&isRoadClear===true){
    console.log('wait all early');
}
else if(light2 === 'red'&&isRoadClear===true){
    console.log('stay early');
}
else if(light2 === 'red'&&isRoadClear===false){
    console.log('stay and wait');
} else console.log('do what you want');
