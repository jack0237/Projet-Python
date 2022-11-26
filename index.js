const menuHamburger = document.querySelector('#menuHamburger');
const navigator = document.querySelector('#navigator');

menuHamburger.addEventListener('click', ()=>{
    navigator.classList.toggle('mobile-menu');
})
