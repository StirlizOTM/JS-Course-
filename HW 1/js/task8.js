    function hoursToSeconds(hours){
        return hours * 60 * 60;          //рахує к-сть секунд у годині
    };

    function daysToSeconds(days) {
    
        return days * 24 * 60 * 60;  //рахує к-сть секунд у добі
    };

    function monthsToSeconds(months) {
        return months * 30 * 24 * 60 * 60; // рахує к-сть секунд у місяці
    };

    
    // створюємо нову змінну з параметру return та виводимо модальне вікно для проведення калькуляції годин
    let resultHours = hoursToSeconds(prompt('I can tell you how many seconds are in any amount of hours'));
    //     виводить результат калькуляції на екран користувача
    alert(`There are ${resultHours} seconds`);
    console.log(resultHours);

    // створюємо нову змінну з параметру return та виводимо модальне вікно для проведення калькуляції діб
    let resultDays = daysToSeconds(prompt('I can tell you how many seconds are in any amount of days'));
    //     виводить результат калькуляції на екран користувача
    alert(`There are ${resultDays} seconds`); 
    console.log(resultDays); // just check

    // створюємо нову змінну з параметру return та виводимо модальне вікно для проведення калькуляції місяців
    let resultMonths = monthsToSeconds(prompt('I can tell you how many seconds are in any amount of months'));
    //     виводить результат калькуляції на екран користувача
    alert(`There are ${resultMonths} seconds`);
    console.log(resultMonths);// just check

    // створює змінну для модального вікна перевірки досвіду користувача
    let happy = confirm('Hope you enjoyed this little calculation tool');
    console.log(happy); // збір результату

    // кінцева взаємодія з користувачем
    if(happy == true) {
        alert('I had fun too! Hope to see you soon!');
    }    else{
        alert('I`ll try to improve it ASAP');

        };
    

    