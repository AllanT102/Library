let library = []
const content = document.querySelector('.content')
const addBookButton = document.querySelector('.add-button')
const closeAddButton = document.querySelector('.close-button')
const popup = document.querySelector('.pop-up')
const overlay = document.querySelector('.overlay')
const formInputs = document.querySelectorAll('.form-input')
const addConf = document.querySelector('.add-conf')
const startingInput = document.getElementById('title')



const bookFactory = (title, pages, author) => {
    return { title, pages, author }
}

const addBookToLibrary = (title, pages, author) => {
    const newBook = bookFactory(title, pages, author)
    library.push(newBook)
    displayBooks()
}

const displayBooks = () => {
    for (let i = 0; i < library.length; i++) {
        // check if already on screen
        if (document.querySelector(`[data-id='${i}']`) != null) continue;

        const cardElem = document.createElement('div')
        cardElem.classList.add('card')
        cardElem.dataset.id = i

        const titleName = document.createElement('h1')
        titleName.textContent = library[i].title

        const pageNum = document.createElement('p')
        pageNum.textContent = library[i].pages

        const author = document.createElement('p')
        author.textContent = library[i].author

        cardElem.append(titleName, author, pageNum)
        content.appendChild(cardElem)
    }
}

addBookButton.addEventListener('click', () => {
    popup.classList.add('active')
    overlay.classList.add('active')
    startingInput.focus()
})

closeAddButton.addEventListener('click', () => resetForm())

addConf.addEventListener('click', () => {
    let valid = checkValid()
    if (valid) {
        addBook();
        resetForm()
    }
})

overlay.addEventListener('click', () => {
    if (overlay.classList.contains('active')) {
        popup.classList.remove('active')
        overlay.classList.remove('active')
        resetForm()
    }
})

function addBook() {
    let info = getAllInputs()
    addBookToLibrary(info.title, info.pages, info.author)
}

function checkValid() {
    for (let i = 0; i < formInputs.length; i++) {
        if (formInputs[i].value === "") {
            if (document.querySelector('.error') == null) {
                const error = document.createElement('span')
                error.textContent = 'Please fill out all fields'
                error.classList.add('error')
                popup.appendChild(error)
            }
            return false
        }
    }
    return true
}


function clearInputs() {
    formInputs.forEach(input => {
        input.value = ''
    })
}

function getAllInputs() {
    let info = {}
    let inputNames = []
    formInputs.forEach(input => inputNames.push(input.name))
    for (let i = 0; i < formInputs.length; i++) {
        let name = inputNames[i];
        info[name] = formInputs[i].value
    }
    return info
}

function resetForm() {
    popup.classList.remove('active')
    overlay.classList.remove('active')
    const error = document.querySelector('.error')
    if (error != null) popup.removeChild(error)
    clearInputs()
}