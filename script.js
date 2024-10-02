const myLibrary = [];
const newBookButton = document.getElementById('newBookButton');
const form = document.querySelector('form');
//classnames not presented correctly!
const addToLibraryButton = document.querySelector('.addToLibraryButton');
let libraryContainer = document.querySelector('.library-container');




function revealForm () {
    form.style.display = 'flex'};

newBookButton.addEventListener('click', revealForm);

function addToLibrary (){
 
let author = document.getElementById('author').value;
     
let title = document.getElementById('title').value;
let numberOfPages = document.getElementById('numberOfPages').value;

const newBook = new Book (author, title, numberOfPages);
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
          
            let deleteButton = document.createElement('button');
            let changeReadStatus = document.createElement('button');

            
            

            cardDiv1.innerText=myLibrary[i].author;
            cardDiv2.innerText=myLibrary[i].title;
            cardDiv3.innerText=myLibrary[i].numberOfPages;
            

            //Data attribute for delete button functionality
            let indexNumber = i;
            
          
            changeReadStatus.innerText="Read";
            deleteButton.innerText="delete button";
            document.querySelector('.library-container').appendChild(cardDiv1);
            document.querySelector('.library-container').appendChild(cardDiv2);
            document.querySelector('.library-container').appendChild(cardDiv3);
            // document.querySelector('.library-container').appendChild(cardDiv4);
            document.querySelector('.library-container').appendChild(changeReadStatus);
            document.querySelector('.library-container').appendChild(deleteButton);
           

deleteButton.addEventListener('click', deleteLibraryItem);

function deleteLibraryItem () 
    
 {myLibrary.splice(i, 1);
    displayBooks();
 };

 changeReadStatus.addEventListener('click', function () 
  
  {
    console.log(changeReadStatus.innerText)
    if (changeReadStatus.innerText==='Read')
        {changeReadStatus.innerText='Unread'
          console.log(changeReadStatus.innerText)
        
          
        }

   else {changeReadStatus.innerText='Read'}

   }
  )

  
console.log(changeReadStatus.innerText); 

 


  }      

     

 
//      




    }

  
            // deleteButton.addEventListener('click', myLibrary.splice(1, [i]));