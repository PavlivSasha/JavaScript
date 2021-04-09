// Реалізовуємо свій компютерний магазин.
// ===
// Необхідно реалізувати базовий клас комютера. Який має лише параметри:
// Оперативна память.
// Потужність процесора. (цифра від 0 до 1000)
// Назва.
// В кожного компютера має бути метод включання.

class Computer {
    constructor(ram, cpu, model) {
        this.ram = ram;
        this.cpu = cpu;
        this.model = model;
    }

    on() {
        console.log(`Computer ${this.model} is on`);
    }
}

let cm = new Computer(8, 30, 'Lenovo');
cm.on();

// ===
// Від базового компютрера треба реалізувати ноутбук.
// Він має нову властивість дюймаж монітора.
// У нього зявляється нова змінна роботи батареї. Ця змінна визначається як потужність / (дюйми * оперативку)
// ===

class Laptop extends Computer {
    constructor(ram, cpu, model, sizeOfMonitor) {
        super(ram, cpu, model);
        this.sizeOfMonitor = sizeOfMonitor;
        this.battery = sizeOfMonitor * ram;
    }
}
let lp = new Laptop(4, 20, 'DELL', 17);
console.log(lp);


// Від ноутбука потрібно зробити ультрабук.
// Він має нову змінну ваги.
// При включенні ультрабуку має видаватися помилка, якшо вага більша за 2кг та батарея тримаж менше ніж 4 години.
// ===

class UltraLaptop extends Laptop {
    constructor(ram, cpu, model, sizeOfMonitor, weight) {
        super(ram, cpu, model, sizeOfMonitor);
        this.weight = weight;
        this.battery = sizeOfMonitor * ram;
    }
    on() {
        if (this.weight > 2 && this.battery < 240) {
            console.log('Error!!!');
        } else console.log(`Computer ${this.model} is on`);
    }
}
let ul = new UltraLaptop(4, 20, 'HP', 17, 3);
console.log(ul);
ul.on();



// Від базвого класу потрібно створити базовий ПК.
// В нього має бути новий метод запуску ігор.
// Кількість FPS визначається як потужність / опервтивку.
// Example: `You are playing *GAME_NAME* with *FPS_COUNT* FSP`


// Компютер можна апгрейдити.
// Потужність процесора можна збільшувати максимум на 10%. Зменшувати її не можна.
// Оперативку можна збільшити лише в 2 рази. Зменшувати її не можна.
// Для зміни характеритик мають бути свої методи. Мняти змінну "в лоб" заборонено.
// ===

class BaseComputer extends Computer {
    constructor(ram, cpu, model) {
        super(ram, cpu, model);
        this.fps = cpu / ram;
    }

    playGame() {
        console.log(`You are playing Call of Duty with ${this.fps} fps`);
    }

    upgradeCpu() {

    }

    upgradeRam() {

    }

}
let bc = new BaseComputer(8, 240, 'Asus');
console.log(bc);

// Від базового ПК необхідно зробити ігровий ПК.
// Кількість ФПС має бути рівно в 2 рази більший ніж в звичайного ПК.
// При запуску однієї гри потужніть процесора має падати на 0.1%.
// Якшо потужність процесора менша ніж 500. І оперативка менша за 8 потрібно видати помилку, (алерт, або консоль)
// що на цьому відрі ігри не запускаються.

class GamingPC extends BaseComputer {
    constructor(ram, cpu, model) {
        super(ram, cpu, model);
        this.fps = this.fps * 2;
    }
    playGame() {
        if (this.cpu < 500 && this.ram < 8) {
            console.log('Your computer is bucket, earn money and go buy new device');
            return;
        }
        return this.cpu = this.cpu - this.cpu * 0.1;
    }
}
let gp = new GamingPC(4, 240, 'MSI');
console.log(gp);
gp.playGame();
console.log(gp);