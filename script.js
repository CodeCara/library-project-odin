const myLibrary = ['Book1', 'Book2'];
const newBookButton = document.getElementById('newBookButton');
const form = document.querySelector('form');
const submitButton = document.querySelector('.submitButton');



function revealForm () {
    form.style.display = 'flex';};

newBookButton.addEventListener('click', revealForm);


//Constructor function WORKS
// function Book (author, title, noOfPages, isRead) {
// this.author = author;
// this.title = title;
// this.noOfPages = noOfPages;
// this.isRead = isRead;

// }

// const Book1 = new Book ('sdf', 'asdf', 6, true);
// console.log(Book1);

// function addToLibrary ()
// {

// }

submitButton.addEventListener('click', preventSubmit);
function preventSubmit (event)
{event.preventDefault();}








function displayBook () {
for (let i=0; i<myLibrary.length; i++)
console.table(myLibrary[i]);


}


