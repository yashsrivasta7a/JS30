// TASK 1
const a = 2;
if(a>0){
    console.log(`${a} is positive`);
}
else if(a<0){
    console.log(`${a} is negative`);
}
else
    console.log(`${a} is zero`);

// TASK 2
const age = 14;
if (age >= 18) {
  console.log("Person can vote");
} 
else {
  console.log("Person cannot vote")
}


// TASK 3
const b = 63;
const c = 6;

if(a > b){
  if(a > c){
    console.log(`${a} is the greatest.`)
  } else {
    console.log(`${c} is the greatest.`)
  }
} else if(b > c) {
  console.log(`${b} is the greatest.`)
} else {
  console.log(`${c} is the greatest.`)
}


// TASK 4
const day = 1;

switch(day) {
  case 1:
    console.log("Today is Sunday.");
    break;
  case 2:
    console.log("Today is Monday.");
    break;
  case 3:
    console.log("Today is Tuesday.");
    break;
  case 4:
    console.log("Today is Wednesday.");
    break;
  case 5:
    console.log("Today is Thursday.");
    break;
  case 6:
    console.log("Today is Friday.");
    break;
  case 7:
    console.log("Today is Saturday.");
    break;
  default: 
    console.log("Invalid input.");
    break;
}


// TASK 5
const grade = 69;
switch(true) {
  case(grade >= 95):
    console.log("Grade A");
    break;
  case(grade >= 85):
    console.log("Grade B");
    break;
  case(grade >= 75):
    console.log("Grade C");
    break;
  case(grade >= 65):
    console.log("Grade D");
    break;
  case(grade < 65):
    console.log("Grade F");
    break;
  default: 
    console.log("Invalid Grade.");
    break;
}

// TASK 6
const EOO = 5;
EOO%2 == 0 ? console.log(`${EOO} is even.`) : console.log(`${EOO} is odd.`)

// TASK 7
const year = 2003;
if(year%4 == 0 && year%100 !=0){
    console.log(`${year} is a Leap Year.`)
} else {
  console.log(`${year} is not a Leap Year.`)
}
