// Bloom — Week Project Settimana V
//
// Aggiungi qui il codice JavaScript se serve (es. modale, scroll handler).
// Per la Versione Base spesso non serve niente: tutto si fa in CSS.
const darkmode = document.querySelector('#darkmode')
const body = document.querySelector('body')
const nav = document.querySelector('nav')
const card = document.querySelectorAll('.card')
const li = document.querySelectorAll('li')
console.log(card)
darkmode.addEventListener('click',()=>{
    console.log('cliccato')
    body.classList.toggle('darkmode')
    nav.classList.toggle('darkmode')
    card.forEach(c=>{
            c.classList.toggle('cardDark')

    })
  li.forEach(l=>{
    l.classList.toggle('whiteList')
  })
   
})