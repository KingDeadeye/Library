const myLibrary = [];
const body = document.querySelector('body');
const output = document.getElementById('output');
const fav = document.getElementById('fav');
const form = document.querySelector('form');
const confirmBtn = document.getElementById('confirmBtn');
const closeBtn = document.getElementById('js-close');

function addBookToLibrary(form) {
    const author = form.elements['author'].value;
    const title = form.elements['title'].value;
    const pages = form.elements['pages'].value;
    const read = form.elements['read'].checked;

    const obj = {
        namee: author,
        titlee: title,
        pagess: pages,
        readvall: read,
    };

    myLibrary.push(obj);
    displayBooks();
}

function displayBooks() {
    output.innerHTML = '';

    for (let i = 0; i < myLibrary.length; i++) {
        const bookCard = document.createElement('div');
        for (const key in myLibrary[i]) {
            bookCard.innerText += `${key}: ${myLibrary[i][key]} \n`;
        }

    
        bookCard.setAttribute('data-index', i);

        const bt = document.createElement('button');
        bt.innerText = 'Remove';
        bookCard.appendChild(bt);

        output.appendChild(bookCard);

        bt.addEventListener('click', () => {
            
            
            const indexToRemove = parseInt(bookCard.getAttribute('data-index'), 10);
            myLibrary.splice(indexToRemove, 1);
            displayBooks();
        });
    }
}

document.querySelector('.btn1').addEventListener('click', () => {
   
    fav.showModal();

});

closeBtn.addEventListener("click", () => {
    fav.close();
});

form.addEventListener('submit', (event) => {
    event.preventDefault();
    addBookToLibrary(form);
    removeent();
    fav.close();
});


function removeent(){
    document.getElementById("myForm").reset();
}