// task 1
const book = {
    "title" : "subtle art of not giving F",
    "author": "no-one",
    "year":2005,
}

//task 2
console.log(book);
console.log(book.year);


//task 3
book.print = ()=>{
console.log(book.author);
console.log(book.title); }
book.print();

//task 4
book.yearr = (year)=>{
book.year=year;
}
book.yearr("2000");
console.log(book.year);

//task 5
const library = {
    "name":"YSkiKitaabe",
    "books": [
        {"name":"Physics","year":2000},
        {"name":"Math","year":2046}
    ]
}

console.log(library);

// Task 6
console.log(library.name);
console.log(library.books.forEach(i=>console.log("books",i)));

// Task 7
book.return = function(){
    console.log(this.author);
}
book.return();


//Task 8
// for (const key in book) {
//    console.log(book[key]);
//     }
for (let key in bookObject) console.log(`${key} --> ${bookObject[key]}`);