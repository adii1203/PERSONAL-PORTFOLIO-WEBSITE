const menu = document.querySelector('.menu');
const navbarList = document.querySelector('.navbar__list')

menu.addEventListener('click',()=>{
    navbarList.classList.toggle('show')
})