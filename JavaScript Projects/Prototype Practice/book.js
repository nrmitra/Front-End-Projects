function Book(title, author, pages, read) {

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function () {

        console.log(this.title + ' by '+this.author+', '+this.pages+' pages, '+this.read);
    }

};

let theHobbit = new Book('The Hobbit','J.R.R. Tolkein','295','not read yet');

theHobbit.info()

const myLibrary = [new Book('The Hobbit','J.R.R. Tolkein','295','not read yet'),
new Book('Sherlock Holmes','Arthur Conan Doyle','315','not read yet'),
new Book('Sparkling Cyanide','Agatha Christie','215','not read yet')
]

for(let i=0; i< myLibrary.length; i++){
 myLibrary[i].info();
}