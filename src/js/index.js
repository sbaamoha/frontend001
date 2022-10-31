let humburger = document.querySelector('#humburger')
let menu = document.querySelector('.menu')
let titleOne = document.querySelector(".title1")
let titleTwo = document.querySelector(".title2")
let titleThree = document.querySelector(".title3")
let one = document.querySelector(".one")
let two = document.querySelector(".two")
let three = document.querySelector(".three")
humburger.onclick = function (){
    menu.classList.toggle("open")
    humburger.classList.toggle("text-white")
}

