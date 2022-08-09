//TASK 1
function multiplication(){
    let numb = [2,3,4,5];
    let result = 1;
    for (let i =0; i<numb.length; i+=1){
        result *=numb[i];
    }
    console.log(result);
}
multiplication();

function multiplication1(){
    let numb = [2,3,4,5];
    let result = 1;
    let i = 0;
    while(i<numb.lenght){
        result*=numb[i];
        i+=1;
    }
    console.log(result);
}
multiplication1();

//TASK 2
for(let o = 0; o<16; o+=1){
    if(o%2==0){
        alert(`${o} is even`);
    }else{
        alert(`${o} is odd`);
    }
}

//TASK 3
let result = [];

function randNumber(k){
    for(let i=0; i <= k; i+=1){
    let s = Math.floor(Math.random() * 500);
    result.push(s);
}}
randNumber(7);

console.log(result);

//TASK 4
function raiseToDegree(a,b){
    return a**b;
}
let sqFunct =raiseToDegree(prompt(`Number`), prompt(`To`));

alert(sqFunct);

//TASK 5

let arr1 = [];
function findMin(){

    for(let i =0; i< arguments.length; i+=1){
        arr1 = arguments[i];
    }
    console.log(Math.min(arr1));
}

findMin(5,4,6,78,-1);

//TASK 6

const arr2 = [1,2,6,7,7] 

const hasDuplicates = (arr) => arr.length !== new Set(arr).size;
if(hasDuplicates(arr2)==true){
    console.log(false);
}else{
    console.log(true);
}

//TASK 7

let arr3 = [];
function giveLast(a,b){
    let arr3 = a;
    console.log(arr3.slice(b));
}

giveLast([5,1,2,6,7,],-2)

// TASK 8

let sentence = "even if i stole this i still did my job";
let words = sentence.split(" ");

for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
}

console.log(words.join(" "));