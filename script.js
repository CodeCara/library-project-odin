const myLibrary = ['Book1', 'Book2'];
let newBookButton = document.getElementById('newBookButton');
let form = document.querySelector('form');


function revealForm () {
    form.style.display = 'flex';};

newBookButton.addEventListener('click', revealForm);

function myBook () {



}

function addToLibrary ()
{



}

function displayBook () {
for (let i=0; i<myLibrary.length; i++)
console.table(myLibrary[i]);


}

