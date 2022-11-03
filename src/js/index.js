let humburger = document.querySelector('#humburger')
let menu = document.querySelector('.menu')
let inputBookmarking = document.querySelector('#bookmarking')
humburger.onclick = function (){
    menu.classList.toggle("open")
    humburger.classList.toggle("text-white")
}
