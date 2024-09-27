const myLibrary = ['Book1', 'Book2'];
const newBookButton = document.getElementById('newBookButton');
const form = document.querySelector('form');
const addToLibraryButton = document.querySelector('.addToLibraryButton');




function revealForm () {
    form.style.display = 'flex';};

newBookButton.addEventListener('click', revealForm);

function captureInputs (){
    let author = document.getElementById('author').value;

    let title = document.getElementById('title').value;
    let numberOfPages = document.getElementById('numberOfPages').value;
    let ifRead =   document.getElementById('ifRead').value;
    const Book1 = new Book (author, title, numberOfPages, ifRead); 
    console.log(Book1);






}



//Constructor function WORKS
function Book (author, title, noOfPages, isRead) {
this.author = author;
this.title = title;
this.noOfPages = noOfPages;
this.isRead = isRead;

 }

// const Book1 = new Book ('sdf', 'asdf', 6, true);
// console.log(Book1);

// function addToLibrary ()
// {

// }

addToLibraryButton.addEventListener('click', preventSubmit);
function preventSubmit (event)
{event.preventDefault();}

addToLibraryButton.addEventListener('click', captureInputs);


//                                                          







function displayBook () {
for (let i=0; i<myLibrary.length; i++)
console.table(myLibrary[i]);


}


