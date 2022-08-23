// TASK 1

let sum = prompt('msmth');
console.log(typeof sum);

let calcRectangleArea = function(width,height){
    if(isNaN(width)||isNaN(height)){
        throw new Error('not a number');
    }else{
        return(width*height);
    }
}
console.log(calcRectangleArea("s",5));

// TASK 2



function checkAge(){
    let ageType = prompt('Enter your age');
    let age = parseInt(ageType);
    try{if(age>=14){
        alert('Access Granted!');
    }else if(age<14){
        throw new Error('Your age is too low');
    }else if(isNaN(age)){
        throw new Error('Invalid Data!');
    }      
    }catch(e){
        alert(e);
    }
}
checkAge();

// TASK 3

function MonthException(message) {
    this.message = message;
  }
  function showMonthName(mo) {
    mo-=1; // (1 = Jan, 12 = Dec)
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
      'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    if (months[mo] !== undefined) {
      return months[mo];
    } else {
      throw new MonthException('Incorrect Month Number');
    }
  }
  
  let monthName;
  
  try {
   
    const myMonth = prompt('Enter a number of month');
    monthName = showMonthName(myMonth);
    alert(showMonthName(myMonth));
  } catch (e) {
    monthName = 'unknown';
    alert(e.message, e.name); 
  }

  // TASK 4

function showUser(id){
    if(id<0){
        throw new Error('ID can`t be negative' + id);
    }return {id};
    
}

function showUsers(ids){
    let users = [];
    ids.forEach(function(id){
        try{
            let user = showUser(id);
            users.push(user);
        }catch(e){
            console.log(e.message);
        }
    });
    console.log(users);
    }
showUsers([44,5,12,-4]);