//Task 1

const city = 'Kharkov' ;
const country = 'Ukraine';
const population = '14000000';
const footballField = 'True';


//Task2

const height = '40';
const width = '70';

let result = height * width;

console.log(result);


//Task 3

const time ='2';
const speedOfFirst = '95';
const speedOfSecond = '114';

const generalOfSpeed = speedOfFirst + speedOfSecond;
const distanceofcities = generalOfSpeed * time;

console.log(distanceofcities);

//Task 4

const randomNumber = Math.floor(Math.Random()*100);

    if (randomNumber < 20){
        console.log('randomNumber меньше 20');
}   else if (randomNumber > 50){
        console.log('randomNumber больше 50');
}   else {
        console.log('randomNumber больше 20 и меньше 50');
}


//Task 5

switch(true){
    case randomNumber < 20:
        console.log('randomNumber меньше 20');
    break;
    case  randomNumber > 50:
        console.log('randomNumber больше 50');
    break;
    default :
        console.log('randomNumber больше 20 и меньше 50');
}








