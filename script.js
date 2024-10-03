const myLibrary = [];
const newBookButton = document.querySelector('.new-book-button');
const form = document.querySelector('form');
//classnames not presented correctly!
const addToLibraryButton = document.querySelector('.add-to-library-button');
const libraryContainer = document.querySelector('.library-container');
const clearAllFieldsButton = document.querySelector('.clear-all-fields-button');



function revealForm () {
    form.style.display = 'flex';
  form.style.flexDirection= 'column';}

newBookButton.addEventListener('click', revealForm);

function addToLibrary (){
 
let author = document.getElementById('author').value;
     
let title = document.getElementById('title').value;
let numberOfPages = document.getElementById('numberOfPages').value;
let readStatus =  document.getElementById('readStatus').value;


const newBook = new Book (author, title, numberOfPages, readStatus);
    myLibrary.push(newBook);
    // form.style.display='none';
//    if (cardDiv1){ remove.cardDiv1();}
    // remove.cardDiv2();
    // remove.cardDiv3();
    // remove.cardDiv4();
    // remove.deleteButton();
    // remove.changeReadStatus();

    displayBooks();

  
 }



//Constructor function WORKS
function Book (author, title, numberOfPages, readStatus) {
this.author = author;
this.title = title;
this.numberOfPages = numberOfPages;
this.readStatus = readStatus;

 }



addToLibraryButton.addEventListener('click', preventSubmit);
function preventSubmit (event)
{event.preventDefault();}

addToLibraryButton.addEventListener('click', addToLibrary);


    
   
// { myLibrary.splice(1, i)}

function displayBooks (newBook) {

    libraryContainer.innerHTML=" ";

    let colLabel1 = document.createElement('div');
            let colLabel2 = document.createElement('div');
            let colLabel3 = document.createElement('div');
            let emptyDiv1 = document.createElement('div');
            let emptyDiv2 = document.createElement('div');
            colLabel1.style.fontWeight='bold';
            colLabel2.style.fontWeight='bold';
            colLabel3.style.fontWeight='bold';
            emptyDiv1.style.fontWeight='bold';
            emptyDiv2.style.fontWeight='bold';






            colLabel1.innerText='Author';
            colLabel2.innerText='Title';
            colLabel3.innerText='No. of pages';
            colLabel3.style.justifySelf='center';
            emptyDiv1.innerText=' ';
            emptyDiv2.innerText=' ';

            document.querySelector('.library-container').appendChild(colLabel1);
            document.querySelector('.library-container').appendChild(colLabel2);
            document.querySelector('.library-container').appendChild(colLabel3);
            document.querySelector('.library-container').appendChild(emptyDiv1);
            document.querySelector('.library-container').appendChild(emptyDiv2);



    for (let i=0; i<myLibrary.length; i++)
   
        // {let bookDisplay =  myLibrary[i];
          { 
        




            let cardDiv1 = document.createElement('div');
            let cardDiv2 = document.createElement('div');
            let cardDiv3 = document.createElement('div');
          
            let deleteButton = document.createElement('button');
            let changeReadStatus = document.createElement('button');
           deleteButton.style.width='6rem';
           deleteButton.style.alignSelf='right';
           changeReadStatus.style.width='6rem';
           changeReadStatus.style.alignSelf='right';
            
            

            cardDiv1.innerText=myLibrary[i].author;
            cardDiv2.innerText=myLibrary[i].title;
            cardDiv3.innerText=myLibrary[i].numberOfPages;

            cardDiv1.style.alignSelf='center';
            cardDiv2.style.alignSelf='center';  
            cardDiv3.style.alignSelf='center';




            cardDiv3.style.justifySelf='center';
        

          
            
          
            changeReadStatus.innerText=myLibrary[i].readStatus;
            changeReadStatus.style.backgroundColor='green';
            deleteButton.innerText="Delete";
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
    console.log(myLibrary[i].readStatus);
    
    if (
      changeReadStatus.innerText==='Read')

      
      
      
{changeReadStatus.innerText='Unread'
changeReadStatus.style.backgroundColor='red';
  myLibrary[i].readStatus = 'Unread'
  console.log(myLibrary[i]);
}

   
        
          
        

   else {changeReadStatus.innerText='Read'
   changeReadStatus.style.backgroundColor='green';

    myLibrary[i].readStatus='Read';
    console.log(myLibrary[i]);

   }

   }
  )

  


 


  }      

 


clearAllFieldsButton.addEventListener('click', preventSubmit);
// function preventSubmit (event)
// {event.preventDefault();}
     
clearAllFieldsButton.addEventListener('click', function () {
  author.value =' '
  title.value = ' '
  numberOfPages.value = ' '
});  



} 

  
            // deleteButton.addEventListener('click', myLibrary.splice(1, [i]));