const myLibrary = []

function Book(title, author, pages, read) {

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function () {

        return this.title + ' by '+this.author+', '+this.pages+' pages, '+this.read;
    }

};

function addBook() {

    title = document.getElementById('book-title').value;
    author = document.getElementById('author-name').value;
    pages = document.getElementById('pages').value;
    read = '';

    myLibrary.push(new Book(title, author, pages,read));
    console.log('Book has been added');

    
};

function viewBooks() {
    // document.getElementById('library-output').innerHTML = 'Computer wins!';
    const outputDiv = document.getElementById("results-container");
    const list = document.createElement("ul");

    let libraryContent = "";
    for(let i = 0; i < myLibrary.length ;i++){
        const listItem = document.createElement("li");
        libraryContent += myLibrary[i].info() + "<br />"

        // listItem.textContent = myLibrary[i].info();
        // list.appendChild(listItem);
        // document.getElementById('library-output').innerHTML = i;

    }
    // outputDiv.innerHTML = myLibrary[0].info();
    outputDiv.innerHTML = libraryContent;
   
    // outputDiv.appendChild(list);
};




let add_button = document.getElementById('add-book').addEventListener('click',addBook);
let view_button = document.getElementById('view-library').addEventListener('click',viewBooks);



