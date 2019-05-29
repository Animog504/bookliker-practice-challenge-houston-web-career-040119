let bookArr = [] //super global array
let thisBook = null

document.addEventListener("DOMContentLoaded", function() {

//code here

/*
<div id="list-panel">
		<ul id="list">

		</ul>
	</div>
	<div id="show-panel"></div>
*/

const bookURL = 'http://localhost:3000/books'
const userURL = 'http://localhost:3000/users'
const ul = document.querySelector("#list")
const showPanel = document.querySelector("#show-panel")


function fetchBooks(){

    fetch(bookURL)
    .then(res => res.json())
    .then(books => {
        books.forEach((book)=>{
            renderBook(book)
            bookArr.push(book)
        })
    })
}//fetchBooks

function renderBook(book){
    // debugger
    let li = document.createElement("li")
    li.innerText = book.title
    ul.append(li)

    //----------------- AddEventListener

    li.addEventListener("click", (e)=>{
        e.preventDefault()
        console.log(`you clicked ${e.target.innerText}`)

        thisBook = bookArr.find((book)=>{
            return book.title == e.target.innerText
        })
        // 1.) we have to get/find the book (X)
        // 2.) we want to display EVEVRYTHING thisBook!! ( )

        displayBook(thisBook)
    })

}//renderBook

function displayBook(book){
    
    /*
        > Title
        > Image
        > Description
        > Users/Readers
        > Button (read button)

        -> put it all in showPanel
    */

    let title = document.createElement("h1")
    title.innerText = book.title
    let image = document.createElement("img")
    image.src = book.img_url
    let desc = document.createElement("p")
    desc.innerText = book.description
    let users = getUsers(book)
    let readBtn = document.createElement("button")
    readBtn.innerText = "Read Book"

    //------- append everything

    showPanel.append(title,image,desc,users,readBtn)

    //START HERE AND MAKE THE READ BUTTON WORK! GOODLUCK!
    

    
}//displayBook

function getUsers(book){
    let ul = document.createElement("ul")
    let result = book.users.forEach((user)=>{ 
        let li = document.createElement("li")
        li.innerText = user.username
        ul.append(li)
    })
    return ul
}//getUsers





















fetchBooks();
// debugger
});//DOMContentLoaded
