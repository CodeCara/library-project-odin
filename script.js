const myLibrary = [];
const newBookButton = document.getElementById('newBookButton');
const form = document.querySelector('form');
//classnames not presented correctly!
const addToLibraryButton = document.querySelector('.addToLibraryButton');
let libraryContainer = document.querySelector('.library-container');




// function revealForm () {
//     form.style.display = 'flex';};

// newBookButton.addEventListener('click', revealForm);

function addToLibrary (){
 
let author = document.getElementById('author').value;
     
let title = document.getElementById('title').value;
let numberOfPages = document.getElementById('numberOfPages').value;
let ifRead =   document.getElementById('ifRead').value;
const newBook = new Book (author, title, numberOfPages, ifRead);
    myLibrary.push(newBook);
//    if (cardDiv1){ remove.cardDiv1();}
    // remove.cardDiv2();
    // remove.cardDiv3();
    // remove.cardDiv4();
    // remove.deleteButton();
    // remove.changeReadStatus();

    displayBooks();

  
 }



//Constructor function WORKS
function Book (author, title, numberOfPages, ifRead) {
this.author = author;
this.title = title;
this.numberOfPages = numberOfPages;
this.ifRead = ifRead;

 }



addToLibraryButton.addEventListener('click', preventSubmit);
function preventSubmit (event)
{event.preventDefault();}

addToLibraryButton.addEventListener('click', addToLibrary);


    
   
// { myLibrary.splice(1, i)}

function displayBooks (newBook) {

    libraryContainer.innerHTML=" ";

    for (let i=0; i<myLibrary.length; i++)
   
        // {let bookDisplay =  myLibrary[i];
          { 
            
            let cardDiv1 = document.createElement('div');
            let cardDiv2 = document.createElement('div');
            let cardDiv3 = document.createElement('div');
            let cardDiv4 = document.createElement('div');
            let deleteButton = document.createElement('button');
            let changeReadStatus = document.createElement('button');

            
            

            cardDiv1.innerText=myLibrary[i].author;
            cardDiv2.innerText=myLibrary[i].title;
            cardDiv3.innerText=myLibrary[i].numberOfPages;
            cardDiv4.innerText=myLibrary[i].ifRead;

            //Data attribute for delete button functionality
            let indexNumber = i;
            
            // cardDiv1.setAttribute('data-number', 'indexNumber');
            // cardDiv2.setAttribute('data-number', 'indexNumber');
            // cardDiv3.setAttribute('data-number', 'indexNumber');
            // cardDiv4.setAttribute('data-number', 'indexNumber');
            // deleteButton.setAttribute('data-number', 'indexNumber');
            // changeReadStatus.setAttribute('data-number', 'indexNumber');



           
            // cardDiv1.innerText=newBook.author;
            // cardDiv2.innerText=newBook.title;
            // cardDiv3.innerText=newBook.numberOfPages;
            // cardDiv4.innerText=newBook.ifRead;

            
            // cardDiv3.innerText=newBook.numberOfPages.toString();
            changeReadStatus.innerText="Read";
            deleteButton.innerText="delete button";
            document.querySelector('.library-container').appendChild(cardDiv1);
            document.querySelector('.library-container').appendChild(cardDiv2);
            document.querySelector('.library-container').appendChild(cardDiv3);
            document.querySelector('.library-container').appendChild(cardDiv4);
            document.querySelector('.library-container').appendChild(changeReadStatus);
            document.querySelector('.library-container').appendChild(deleteButton);
           

deleteButton.addEventListener('click', deleteLibraryItem);

function deleteLibraryItem () 
    
 {myLibrary.splice(i, 1);
    displayBooks();
 };


           

        
//      




    }

}
            // deleteButton.addEventListener('click', myLibrary.splice(1, [i]));