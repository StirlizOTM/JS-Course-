// TASK 1


const party = {
    members:145,
    time:"noon",
    duration:18+'hours',
    location:'Old Facility',
    facecontrol: true

};
function propsCount(currentObject){
    let count = Object.keys(currentObject).length;
    console.log(count);
}

propsCount(party);

// TASK 2

const party = {
    members:145,
    time:"noon",
    duration:18+'hours',
    location:'Old Facility',
    facecontrol: true
};


function showProps(obj){
    let result = Object.entries(obj).map(( [k, v] ) => ({  v }));

console.log(result);
}
showProps(party);

// TASK 3

class Person{
    constructor(name, surname){
        this.name = name;
        this.surname = surname;
    }
    fullName(){console.log( 
        this.name+" "+this.surname);
    }
};

class Student extends Person{
    constructor(name, surname, year){
        super(name,surname);
        this.year = year;
    }
    showFullName(middleName){
        console.log(this.surname+" "+this.name+" "+middleName);
    }
    showCourse(){
        let result = 2022-this.year;
        console.log('The course is'+" "+ result);
    }
}

let stu = new Student("Oleksii", "Vekliak", 2018);
console.log(stu);
stu.showFullName("Volodymyrovych");
stu.showCourse();

//TASK 4

const workers = []

class Worker{
    
    constructor(fullName,dayRate,workingDays){
        this.fullName=fullName;
        this.dayRate = dayRate;
        this.workingDays = workingDays;
        workers.push(this);
    }
    showSalary(){
        console.log(this.dayRate*this.workingDays);
    }
    showSalaryWithExperience(){
        console.log(this.dayRate*this.workingDays*this.experience);
    }
    get getXp(){
        return this.#experience;
    }
    set setXp(experience){
       this.#experience = experience;
    }
    showSalaryWithExperience2(){console.log(this.dayRate*this.workingDays*this.#experience);
        
    } 

    sort(workersArr){
        
        let res = workersArr.sort(function(a,b){
            return a.showSalaryWithExperience2() - b.showSalaryWithExperience2()
        })
        for (let i =0; i<res.lengt; i+=1){
            console.log(res[i].fullName+": "+ res[i].showSalaryWithExperience2())
        }
    }
}
let worker1 = new Worker("Joe Rogan", 17, 24);
worker1.showSalary();
worker1.showSalaryWithExperience();
worker1.setExp = 1.5;
worker2.showSalaryWithExperience2();

let worker2 = new Worker("Garry Oldman", 22, 33);
worker1.showSalary();
worker1.showSalaryWithExperience();
worker1.setExp = 1.8;
worker2.showSalaryWithExperience2();

let worker3 = new Worker("Drue Berrimore", 1,2);
worker1.showSalary();
worker1.showSalaryWithExperience();
worker1.setExp = 1.0;
worker2.showSalaryWithExperience2();

worker3.sort(workers);

// TASK 5

class GeometricFigure{
    getArea(){
        return 0;
    }
    toString(){
        return Object.getPrototypeOf(this).constructor.name;
    }
}

class Triangle extends GeometricFigure{
    constructor(b,n){
        super();
        this.base = b;
        this.height = h;
    }

    getArea(){
        return this.base*this.height / 2;
    }
}

class Square extends GeometricFigure{
    constructor(a) {
        super();
        this.sode = a;
    }

    getArea(){
        return this.side **2;
    }
}

class Circle extends GeometricFigure{
    constructor(r){
        super();
        this.radius = r;
    }

    getArea(){
        return Math.PI * this.radius **2;
    }
}

function handleFigures(figures){
    return figures.reduce(function(sum,figure){
        if (figure instanceof GeometricFigure){
            console.log(`Geometric figure: ${figure.toString()} - area: ${figure.getArea()}`)
            return sum + figure.getArea()
        }
        throw Error('Bad argument figure.');
    },0);
}