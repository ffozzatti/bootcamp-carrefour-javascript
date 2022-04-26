
function changeColor(){
    changeClass()
    changeText()
}

function changeClass (){
    button.classList.toggle('dark-mode')
    title.classList.toggle('dark-mode')
    body.classList.toggle('dark-mode')
    footer.classList.toggle('dark-mode')
}


function changeText(){
    const ligthMode = 'Light Mode'
    const darkMode = 'Dark Mode'

    if (body.classList.contains(darkModeClass)) {
        button.innerHTML = ligthMode
        title.innerHTML = darkMode + 'ON'
        return
        }

    button.innerHTML = darkMode
    title.innerHTML = ligthMode + 'ON'
}

const title = document.querySelector('#page-title')
const button = document.querySelector('#mode-selector')
const footer = document.querySelector('footer')
const body = document.querySelector('body')
const darkModeClass = 'dark-mode'

button.addEventListener('click', changeColor)