//TASK 1
let x = 1;
let y = 2;

let res1 = x+""+y+"";
console.log(res1);
console.log(typeof res1);

let res2 = !!x+""+y+"";
console.log(res2);
console.log(typeof res2);

let res3 = !!x;
console.log(res3);
console.log(typeof res3);

let res4 = parseInt(!!x);
console.log(res4);
console.log(typeof res4);

//TASK 2

let h = prompt('Please enter a number');
let i = h%7; // перевіряємо кратність 7
let z = h%2; // перевіряємо, чи є число парним
let fin1 = h>=0 && z===0; // перша умова (а)
let fin2 = i===0;         // друга умова (b)

console.log(fin1);
console.log(fin2);


//TASK 3

const mass = []; // стсорюємо масив
mass[0] = 24;           
mass[1] = "thing";
mass[2] = true;
mass[3] = null;

alert(mass.length); //визначаємо довжину

let mass5 = prompt('Enter something');
mass[4] = mass5;    // додаємо елемент на вказану позицію

alert(mass[4]);

mass.shift();       // видаляємо елемент з вказаної позиції
alert(mass);

// TASK 4

const cities = ["Rome", "Lviv", "Warsaw"];
console.log(cities[0]+"*"+cities[1]+"*"+cities[2]);

// TASK 5

let isAdult = prompt('What is your age?');
let result = (isAdult>18) ? "You are mature" : "You`re way too young";
alert(result);

//TASK 6

let aSide = prompt('Please enter a lenght of side A'); // отримуємо довжини
let bSide = prompt('Please enter a lenght of side B');
let cSide = prompt('Please enter a lenght of side C');
let a = parseInt(aSide);                               // переводимо дані у числові
let b = parseInt(bSide);
let c = parseInt(cSide);

let p = (a+b+c)/2;                                     // створюємо допоміжну змінну для обрахунку площі за формулою Герона
console.log(p);

let area = Math.sqrt(p*(p-a)*(p-b)*(p-c));             // визначаємо площу за формулою Герона

console.log(area.toFixed(3));                          // виводимо результат у консоль з обмеженням дробного числа

if(a**2+b**2==c**2){
    console.log('Triangle is right-angled');           // визначаємо чи трикутник є прямокутним
}else if((c**2+b**2==a**2)){
    console.log('Triangle is right-angled');
}else if((c**2+a**2==b**2)){
    console.log('Triangle is right-angled');
}else{
    console.log('Triangle is not right-angled');
};

if(a+b<c){                                             // відкидаємо неможливі довжини сторін
    alert('Incorrect Data');
}else if (a+c<b){
    alert('Incorrect Data');
}else if (c+b<a){
    alert('Incorrect Data');
};



// TASK 7

var time= new Date().toLocaleTimeString([], { hour: '2-digit'}); // отримуємо дату з системи та виділяємо параметр Година
console.log(time);        // just check                                       
console.log(typeof time); // just check
let time1 = parseInt(time); // переводимо дані в числове значення
console.log(time1); // just check

if(time1>=23||time1>=0||time1<=5){             // створюємо умови для виведення привітання відповідного до часу доби
    alert('Good Night');
}else if(time1>=5||time1<=11){
    alert('Good Morning');
}else if(time1>=11||time1<=17){
    alert('Good Day');
}else if(time1>=17||time1<23){
    alert('Good Evening');
};

