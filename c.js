ScrollReveal().reveal('.logo', { delay: 400, reset: true });
ScrollReveal().reveal('.vscode', { delay: 400, reset: true });
ScrollReveal().reveal('.namelogo', { delay: 400, reset: true });
ScrollReveal().reveal('.logo', { delay: 375, reset: true });
ScrollReveal().reveal('.logo', { delay: 375, reset: true });
let dark = document.querySelector('.darkon')
let main = document.querySelector('.main')
let nav = document.querySelector('.navbar')
let input = document.querySelector('.input1')
let cont = document.querySelector('.container')
let ps = document.querySelector('.problemsolve')
let autotext = document.querySelector('.text-container')
let vscode = document.querySelector('.vscode')


    dark.onclick = function(){
    dark.classList.toggle('active')
    main.classList.toggle('active')
    nav.classList.toggle('active')
    input.classList.toggle('active')
    autotext.classList.toggle('active')
    vscode.classList.toggle('active')
    ps.classList.toggle('active')
}

//auto typer
