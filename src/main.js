const changePage      = document.getElementById('changePage')
const main            = document.getElementById('main')
const h1              = document.getElementById('h1')
const p               = document.getElementById('p')
const pinkSection     = document.getElementById('pinkSection')
const registerSection = document.getElementById('registerSection')
const loginSection    = document.getElementById('loginSection')

changePage.addEventListener('click', function() {

// essa parte aqui apenas puda o arredondamento dos cantos 
// ja que mudam de lado tem que mudar os lados aqui tambem.
    pinkSection.    classList.toggle('rounded-l-lg')
    pinkSection.    classList.toggle('rounded-r-lg')
    loginSection.   classList.toggle('opacity-0')
    registerSection. classList.toggle('opacity-0')
    
   if(!pinkSection.classList.contains('translate-x-full')) {
    pinkSection.classList.add('translate-x-full')
    h1.innerText         = 'Great to See You Again!'
    p.innerText          = 'Back for more? We’ve got it all set up.'
    changePage.innerText = 'Login'
    return
   }
   pinkSection.classList.remove('translate-x-full')
   h1.innerText         = 'Dont have an Account?'
   p.innerText          = 'Sign Up now!'
    changePage.innerText  = 'Sign up'
})


changeSignUp.addEventListener('click', function() {
  loginSection.   classList.toggle('opacity-0')
  registerSection. classList.toggle('opacity-0')
  loginSection. classList.toggle('translate-x-[100%]')
})

changeLogin.addEventListener('click', function() {
  loginSection.   classList.toggle('opacity-0')
  registerSection. classList.toggle('opacity-0')
  loginSection. classList.toggle('translate-x-[100%]')
})