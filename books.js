const myLibrary = new Array();

function Book(title, author, pages, read){
    if (!new.target){
        throw Error("You must use the 'new' operator to call the constructor");
    }
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function(){
        return `${title} by ${author}, ${pages} pages, ${ read ? "read" : "Not read yet"}`;
    };
};


function checkValid(title, author, pages, read) {
    if (title instanceof String &&
        author instanceof String &&
        pages instanceof Number &&
        read instanceof Boolean){
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