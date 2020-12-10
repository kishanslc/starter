let JavaScript = 'amazing';
if(JavaScript === 'amazing') alert('javascript is fun');
40+80-20+3;
console.log(40+80-20+3);




const hasdriverlicence = true;
const hasgoodvision = false;
console.log (hasdriverlicence && hasgoodvision)
console.log (hasdriverlicence || hasgoodvision)
console.log (!hasdriverlicence)


const scoreDolphins = (96+108+89)/3;
const scorekoalas = (88+91+110)/3;
console.log(scoreDolphins,scorekoalas);

if (scoreDolphins > scorekoalas)
{
    console.log('dolphins win the trophy');

}
else if (scorekoalas > scoreDolphins);
{
    console.log('koalas win the trophy');
}
  /*else if(scoreDolphins === scorekoalas)
{
    console.log('both win the trophy');
}*/

// switch statements

const day = 'tuesdays'

switch (day) {
    case'monday':
    console.log('plan course structure');
    break;
    case'tuesday':
    console.log('recort the meetings');
    break;
    default:
        console.log('day is invalid')

}
//conditional terenarry operator

const age = 23;
//age >= 18? console.log('i like to drink wine'): console.log('i like to drink water');
const drink = age>=18? 'wine':'water';
console.log(drink);

function logger()
{
    console.log('My name is jonas');
}
logger();
logger();
logger();

function fruitProcessor(apples, oranges)
{
    const juice = 'juice with ${apples} apples and ${oranges} oranges.';
    return juice;
}
const appleJuice = fruitProcessor();
 console.log(appleJuice);

 //arrow functions
 const calcAge3 = birthYear => 2037-birthYear;
 const age3 = calcAge3(1991);
 console.log(age3);

 //arrow function with more than one line piece of code
 const yearsUntilRetirement = birthYear => {
     const age = 2037 - birthYear;
     const retirement = 65-age;
     return retirement;

 }
 console.log(yearsUntilRetirement(1991));

 //arrays

 const friends = ['raja','prudhvi','eswar'];
 console.log(friends);
 
 //2nd way of declaring arrays
 const years = new Array(1991,1992,1993,1994);
 console.log(friends.length);
 console.log(friends[friends.length-1]);
 friends[2] = 'Akshit';
 console.log(friends);
//add elements
 friends.push('jay');
 console.log(friends);
 friends.unshift('john');
 console.log(friends);
 //remove elements
 friends.pop();
 console.log(friends);
 friends.shift();
 console.log(friends);
 console.log(friends.indexOf ('prudhvi'));

 //objects
 const jones = [
     'jones',
    'schmedmann',
     2037-1991,
     'teacher',
     ['raja','prudhvi','eswar']
 ];
 //for loop
 for( let i=0; i<jones.length;i++)
 {
     console.log(jones[i],typeof jones[i]);
 }