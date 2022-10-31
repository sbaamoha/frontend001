let humburger = document.querySelector('#humburger')
let menu = document.querySelector('.menu')

humburger.onclick = function (){
    menu.classList.toggle("open")
    humburger.classList.toggle("text-white")
}