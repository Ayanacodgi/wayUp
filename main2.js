//Task 1
 
for(let i = 10; i <= 50; i + 2) {
    console.log(i);
}

//Task 2
//так как js агрессировал на "name",было принято решеник изменить  "myName".

const autobiography = {
    myName : 'Denis',
    surname : 'Tovstogan',
    age : 15,
    pet : 'true'
}

//Task 3

const array = ['я в Симбирск,','в трактире.','с утра','B туже ночь','Я остоновился','для закупки','что и было поручено Савельичу','приехал,','где должен был',
'нужных вещей','отправился по лавкам','пробыть сутки','Савельич'];
let result = (array[3],array[7],array[0],array[8],array[11],array[6],array[9],array[6],array[4],array[1],array[12],array[2],array[10]);
console.log(result);

//Task 4

const fullName = ${firstName} ${lastName};
    console.log(firstName,lastName);

firstName('Denis');
lastName('Tovstogan');


//Task 5

let i = 21;

while (i <= 67) {
    console.log(i);
    i += 2
}
