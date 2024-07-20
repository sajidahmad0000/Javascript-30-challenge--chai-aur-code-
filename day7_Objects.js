const books ={
    title:"gooseBumps 2: the haunted halloween",
    author:"DR. R.L Stein",
    year:"1992",
    greeting:function(){
        console.log(`${this.author} is the author of ${this.title}.`)
    },
    new_Edition:function(new_year){
        this.year=new_year
        console.log(`${this.title} is published in ${this.year}.`)
    },
    showcase:function(){
        console.log(`${this.title} is published in ${this.year}.`)

    }
}

console.log(books.title);
console.log(books["author"]);
books.greeting()
books.new_Edition(2001)
console.log(books.year)

const library={
    name:"SRG Library",
    books:[{
        title1:"the house of secret",
        title2:"the blenders",
        title3:"the fall guy"
    }],

}
// books property is an array of objects, so you need to access the first object
//  in the array before accessing its properties
console.log(library.name)
console.log(library.books[0].title2)

books.showcase();

for (const key in books) {
    if (books.hasOwnProperty(key)) {
        console.log(key + ": " + books[key]);
        
    }
}

console.log(Object.keys(books))
console.log(Object.values(books))