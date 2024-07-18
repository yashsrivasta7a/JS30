// TASK 1

function EoO(n) {
    n % 2 == 0 ? console.log(`${n} is even.`) : console.log(`${n} is odd.`);
}
EoO(2);



// Task 2
function square(n){
    console.log(`Square of n : ${n*n}`);
}

square(2)


// Task 3

const maximum = (a,b) => {
    (a == b) ? console.log("Both are equal") : (a > b) ? console.log(`${a} is greater`): console.log(` ${b} is greater`);
}
maximum ( 1,0)


// Task 4

const concatenate = (a,b) => {
    return a.concat(" ",b)
}
console.log(concatenate( "Hello","Ji"));

// Task 5

const sum = (a,b) => {
    return a+b
}
console.log(sum( 1,2));

// Task 6
const checkChar = (str, char) => str.includes(char);

console.log(checkChar("Hello", "e")); 

const char = "C";
const str = "Chai aur Code";
console.log(checkChar(str, char) ? `'${str}' contains ${char}.` : `'${str}' does NOT contain ${char}.`);

// TASk 7
function productOfTwo (a, b = 10) {
    return a * b;
  }
  const product = productOfTwo(2);
  console.log(`Product is ${product}`);


  // task 8

  function greeting(name, age = 18) {
    console.log(`Welcome ${name}! Your age is ${age}.`);
  }
  greeting("Hippo", 69);

  //task 9
  function fun(n){
    console.log(` The function will run ${n} times`);
  }
  function repeat(fun,n){
    for(let i = 1; i <= n; i ++){
        fun(i);}
  }

 repeat(fun,2)


 // task 10
 function double (n){
    return n * 2;
  }
  function increment (n){
    return n + 5;
  }
  function Number(n, operation1, operation2){
    const num = operation1(n);
    return operation2(num); 
  } 
  console.log(`(34 * 2) + 5 = ${Number(34, double, increment)}`);
  