const myLibrary = ['Book1', 'Book2'];
const newBookButton = document.getElementById('newBookButton');
const form = document.querySelector('form');
const submitButton = document.querySelector('.submitButton');



function revealForm () {
    form.style.display = 'flex';};

newBookButton.addEventListener('click', revealForm);

// function myBook () {

// }

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


