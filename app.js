let library = []
const content = document.querySelector('.content')
const addBookButton = document.querySelector('.add-button')
const closeAddButton = document.querySelector('.close-button')
const popup = document.querySelector('.pop-up')
const overlay = document.querySelector('.overlay')

const bookFactory = (title, pages, author) => {
    return { title, pages, author }
}

const addBookToLibrary = (bookFactory, title, pages, author) => {
    const newBook = bookFactory(title, pages, author)
    this.library.push(newBook)
}

const displayBooks = () => {
    for (let book in library) {
        const cardElem = document.createElement('div')
        cardElem.classList.add('card')
        cardElem.dataset.id = library.indexOf(book)

        const titleName = document.createElement('h1')
        titleName.textContent = book.title

        const pageNum = document.createElement('p')
        pageNum.textContent = book.pages

        const author = document.createElement('p')
        author.textContent = book.author

        cardElem.append(titleName, author, pageNum)
    }
}

addBookButton.addEventListener('click', () => {
    popup.classList.add('active')
    overlay.classList.add('active')
})

closeAddButton.addEventListener('click', () => {
    popup.classList.remove('active')
    overlay.classList.remove('active')
})

overlay.addEventListener('click', () => {
    if (overlay.classList.contains('active')) {
        popup.classList.remove('active')
        overlay.classList.remove('active')
    }
})
