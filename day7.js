const book={
    title:"three man in a boat",
    author:"williom",
    year:"2014"
}
console.log(book)

console.log(book.title)
console.log(book.author)


book.gettitleandauthor=function(){
    return `${this.title} by ${this.author}`
}
console.log(book.gettitleandauthor());


book.updateyear=function(newyear){
    this.year=newyear;
}
book.updateyear(2020)
console.log(book)


let library = {
    name: "City Library",
    books: [
      {
        title: "1984",
        author: "George Orwell",
        year: 1949
      },
      {
        title: "Brave New World",
        author: "Aldous Huxley",
        year: 1932
      },
      book 
    ]
  };
console.log(library)  


console.log(library.name);
library.books.forEach(b=>{
    console.log(b.title);
})


book.gettitleandyear=function(){
    return `${this.title} (${this.year})`;
}
console.log(book.gettitleandyear())


for(let key in book){
    console.log(`${key}:${book[key]}`)
}   


console.log(Object.keys(book))
console.log(Object.values(book))
