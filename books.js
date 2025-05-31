const myLibrary = new Array();
const booksDom = document.querySelector('.books');
const newBookBtn = document.querySelector('.add-book');
const addBookBtn = document.querySelector('form');
const dialog = document.querySelector('dialog');

function Book(title, author, pages, read){
    if (!new.target){
        throw Error("You must use the 'new' operator to call the constructor");
    }
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read
    this.info = function(){
        return `${title} by ${author}, ${pages} pages, ${ read ? "read" : "Not read yet"}`;
    };
};

Book.prototype.toogle = function() {
    this.read = this.read ? false:true;
}

function checkValid(title, author, pages, read) {
    if (typeof title === "string" &&
        typeof author === "string" &&
        typeof pages === "number" &&
        typeof read === "boolean") {
        return true;
    }
    return false;

}

function addBookToLibrary(title, author, pages, read) {
    if (!checkValid(title, author, pages, read)){
        return false
    }
    let book = new Book(title.trim(), author.trim(), pages, read);
    myLibrary.push(book);
    htmlStructure = `<article class="book" data-id="${book.id}">
                        <p class="title">${book.title}</p>
                        <p><span class="bold">Author : </span> ${book.author}</p>
                        <p><span class="bold" >Pages : </span> ${book.pages}</p>
                        <p><span class="bold" >Read : </span> ${book.read ? "✅" : "❎"}</p>
                        <button class="delete" onclick=delete_book('${book.id}')>Delete</button>
                        <button class="read" onclick=toogle_read('${book.id}')>Toogle Read</button>
                    </article>`;
    booksDom.insertAdjacentHTML('beforeend', htmlStructure);
}

addBookToLibrary("hiyui", "gjhg", 6, false)
addBookToLibrary("hiyui", "gjhg", 6, false)
addBookToLibrary("hiyui", "gjhg", 6, false)
addBookToLibrary("hiyui", "gjhg", 6, false)



newBookBtn.addEventListener('click', () =>   dialog.showModal());
addBookBtn.addEventListener('submit', (e) => {
    e.preventDefault();
    dialog.close();
    const title = document.getElementById('title').value.trim();
    const author = document.getElementById('author').value.trim();
    const pages = parseInt(document.getElementById('pages').value);
    const read = document.getElementById('read').checked;const formdata = new FormData(addBookBtn);
    addBookToLibrary(title, author, pages, read);
});


function delete_book(id){
    let elem = document.querySelector(`[data-id="${id}"]`);
    elem.remove();
}

function toogle_read(id){
    let elem = document.querySelector(`[data-id="${id}"]`);
    let book = myLibrary.find((e) => e.id == id);
    book.toogle()
    elem.innerHTML = `<p class="title">${book.title}</p>
                        <p><span class="bold">Author : </span> ${book.author}</p>
                        <p><span class="bold" >Pages : </span> ${book.pages}</p>
                        <p><span class="bold" >Read : </span> ${book.read ? "✅" : "❎"}</p>
                        <button class="delete" onclick=delete_book('${book.id}')>Delete</button>
                        <button class="read" onclick=toogle_read('${book.id}')>Toogle Read</button>`
}