// 1) Створити масив з 20 чисел та:
//  a) відсортувати його від меншого до більшого.
let array = [4, 5, 8, 1, 99, 100, 324, -4, -5, -66, 0, 44, 56, 9, -40, 30, 60, 123, 55, 666];
array.sort((a, b) => a - b);
console.log(array);

//  b) відсортувати його від більшого до меншого.
array.sort((a, b) => b - a);
console.log(array);

//  c) Відфілтрувати числа які є кратними 3.
let filterByThree = array.filter((value) => value % 3 === 0);
console.log(filterByThree);

//  d) Відфілтрувати числа які є більшими за 10.
let filterByTen = array.filter((value) => value > 10);
console.log(filterByTen);

//  e) Проітерувати його forEach та вивести кожеш елмент за допомогою document.write
array.forEach(element => document.write(element));

//  f) За допомогою map збільшити кожен елемент в масиві в три рази.
let map = array.map((value) => value *= 3);
console.log(map);

//  g) Порахувати загальну суму всіх елментів у масиві (reduce)
let red = array.reduce((acc, value) => acc += value, 0);
console.log(red);


console.log('=====================================================');

// 2) Створити масив з 20 стрічок та:
//  a) Відсортувати його в алфавітному порядку
let array2 = ['a', 'b', 'c', 'd', 'g', 'A', 'B', 'C', 'D', 'G', 'k', 'l', 'd', 'Oleg', 'Vanya', 'football', 'ball', 'call', 'doll', 'goal'];
array2.sort((a, b) => b < a ? 1 : -1);
console.log(array2);
//  b) Відсортувати в зворотньому порядку
array2.sort((a, b) => a < b ? 1 : -1);
console.log(array2);

//  c) Отримати в новому масиві тільки ті слова, довжина яких більша за 4 букви (filter)
let filterByLength = array2.filter((value) => value.length > 4);
console.log(filterByLength);

//  d) Змінити кожне слово в масиві додавши на початок 'Sam says *ваше слово*'
let newStr = array2.map((value) => value = `Sam says ${value}`);
console.log(newStr);

console.log('=====================================================');

// 3) Все робити тільки за допомогою методів масивів!
// Дано масив :
const users = [{
        name: 'vasya',
        age: 31,
        isMarried: false
    },
    {
        name: 'petya',
        age: 30,
        isMarried: true
    },
    {
        name: 'kolya',
        age: 29,
        isMarried: true
    },
    {
        name: 'olya',
        age: 28,
        isMarried: false
    },
    {
        name: 'max',
        age: 30,
        isMarried: true
    },
    {
        name: 'anya',
        age: 31,
        isMarried: false
    },
    {
        name: 'oleg',
        age: 28,
        isMarried: false
    },
    {
        name: 'andrey',
        age: 29,
        isMarried: true
    },
    {
        name: 'masha',
        age: 30,
        isMarried: true
    },
    {
        name: 'olya',
        age: 31,
        isMarried: false
    },
    {
        name: 'max',
        age: 31,
        isMarried: true
    }
];
// a) відсортувати його за  віком (зростання , а потім окремо спадання)
console.log(users.sort((a, b) => b.age - a.age).filter(x => x));
console.log(users.sort((a, b) => a.age - b.age).filter(x => x));

// b) відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
console.log(users.sort((a, b) => a.name.length - b.name.length).filter(x => x));
console.log(users.sort((a, b) => b.name.length - a.name.length).filter(x => x));

// c) пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення),
//    та зберегти це в новий масив (первинний масив залишиться без змін)

let usersWithId = users.map( x => {
    let copy = {...x};
    return copy;
});
console.log(users);
usersWithId.forEach((element) => element.id = Math.floor(Math.random() * (100 - 10) + 10));
console.log(usersWithId);

// d) відсортувати його за індентифікатором
 console.log(usersWithId.sort((a, b) => a.id - b.id).filter(x => x));


// e) Всі хто одружений мають попасти у новий масив та отрмати квартиру (reduce)
let arrayHome = usersWithId.reduce((acc, value) => {

    if(value.isMarried){
        value.flat = true;
         acc.push(value);

    }
    return acc;
},[]);
console.log(arrayHome);