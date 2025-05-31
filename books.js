const myLibrary = new Array();
const booksDom = document.querySelector('.books');

function Book(title, author, pages, read){
    if (!new.target){
        throw Error("You must use the 'new' operator to call the constructor");
    }
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read ? "✅" : "❎";
    this.info = function(){
        return `${title} by ${author}, ${pages} pages, ${ read ? "read" : "Not read yet"}`;
    };
};


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
}

addBookToLibrary("l", "hh", 6768, true);
addBookToLibrary("l", "hh", 6768, false);
addBookToLibrary("l", "hh", 6768, true);
addBookToLibrary("l", "hh", 6768, false);

myLibrary.forEach((item) => {
    htmlStructure = `<article class="book">
                        <p class="title">${item.title}</p>
                        <p><span class="bold">Author : </span> ${item.author}</p>
                        <p><span class="bold" >Pages : </span> ${item.pages}</p>
                        <p><span class="bold" >Read : </span> ${item.read}</p>
                    </article>`;
    booksDom.insertAdjacentHTML('afterend', htmlStructure);
})