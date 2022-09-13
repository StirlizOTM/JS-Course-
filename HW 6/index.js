// // TASK 1

let test = document.querySelector('#test');
let test2 = document.getElementById('.test')
test.innerHTML = 'Last';


// TASK 2

let img = document.querySelector('.image').src="http://images2.minutemediacdn.com/image/upload/c_crop,h_1193,w_2121,x_0,y_64/f_auto,q_auto,w_1100/v1565279671/shape/mentalfloss/578211-gettyimages-542930526.jpg";

alert(img);
// TASK 3

let p = document.querySelectorAll('#text>p');


console.log(`Selector text 0: ${p[0].innerText}
Selector text 1: ${p[1].innerText}
Selector text 2: ${p[2].innerText}`);


// TASK 4

let list = document.querySelectorAll('#list>li');

alert(`${list[0].innerText} , ${list[4].innerText} , ${list[1].innerText} , ${list[3].innerText} , ${list[2].innerText}`);

// TASK 5

let header = document.querySelector('h1');
header.style.backgroundColor = 'green';

let pList= document.querySelectorAll("#myDiv>p");
pList[0].style.fontWeight = "600";
pList[1].style.color = "red"; 
pList[2].style.textDecoration = "underline";
pList[3].style.fontStyle = "italic";

let list = document.querySelector('#myList');
list.style.listStyle = "none";
list.style.display="flex";


let inv = document.querySelector('span');
inv.style.color = 'white';

//TASK 6

let type1 = prompt('Enter message #1');
let type2 = prompt('Enter message #2');

let inp1 = querySelector('inut1');
let inp2 = querySelector('input2');

inp1.value = type1;
inp2.value = type2;

let chan1 = inp1.value;
let chan2 = inp2.value;

chan1 = inp2.value;
chan2 = inp1.value;

//TASK 7

document.body.innerHTML = 
`<main class="mainClass check item">
<div id="myDiv">
    <p>First paragraph</p>
</div>
</main>`;
