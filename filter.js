
let number= [1 ,2 ,3 ,4 ,5 ,6];

let Evennumber= number.filter( num=> num % 2 === 0 );
console.log( Evennumber);


//4. Get Positive Numbers

const numbers= [-5, 10, -2, 0, 15];

const positivenumber =numbers.filter(num=>num>0);
console.log(positivenumber);

//7. Filter Students Who Passed

const marks = [35, 60, 42, 25, 80];

const passedMarks = marks.filter(mark => mark >= 35);
console.log(passedMarks);

//8. Square Only Even Numbers

const num = [1, 2, 3, 4, 5];

const squareevennum = num.filter( num=>num%2 === 0)
.map(num=>num*num);
console.log(squareevennum);


