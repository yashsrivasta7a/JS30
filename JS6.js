// Task 1
let arr = [1,2,3,4,5]
let arr1 = [1,2,3,4,5]
console.log(arr);

// Task 2
console.log(arr[0]);
console.log(arr.length);

// Task 3
console.log(arr.push(2));
console.log(`Array after pushing${arr}`);


// Task 4
console.log(arr.pop());
console.log(`Array after pushing ${ arr}`);


// Task 5
console.log(arr.shift());
console.log(arr);

// Task 6
console.log(arr.unshift(5));
console.log(arr);

// Task 7
const double = arr.map((n)=>n*2)
console.log(double);

// Task 8
const even = arr.filter((n)=>n%2==0)
console.log(even);

// Task 9
const red = arr1.reduce((old,neww) => old + neww, 0);
console.log(red);

// Task 10
for(let i = 0; i < arr1.length; i++){
    console.log(arr1[i]);
  }

// Task 11
arr1.forEach((i) => console.log(`Loop using forEach: ${i}`));


// Task 12
const arr2 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(arr2);

//Task 13
console.log(`${arr2[2][2]}`);