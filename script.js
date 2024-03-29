const menu = document.querySelector('.menu');
const navbarList = document.querySelector('.navbar__list')
const project = document.querySelector('.project__wrapper')
import { projects } from "./project.js"; 

menu.addEventListener('click',()=>{
    navbarList.classList.toggle('show')
})


// console.log(projects);

function projectHtml(){
    let Html = ''

    projects.forEach((project)=>{
        let stack = ''
        project.teckStack.forEach((item)=>{
            stack += `
                <img alt="${item.tech}" src="${item.img}">
                `
        })

        Html += `
            <div class="project__row">
                <div class="project__title">
                    <p>${project.title}</p>
                    <?xml version="1.0" encoding="UTF-8"?>
                    <svg width="44px" height="44px" version="1.1" viewBox="0 0 700 700" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                     <g>
                      <path d="m471.57 270.35-104.77 123.99v-276.74c0-9.2773-7.5195-16.801-16.801-16.801-9.2773 0-16.801 7.5195-16.801 16.801v273.31l-99.031-120.39c-5.8906-7.1641-16.48-8.2031-23.648-2.2969-7.1641 5.8906-8.1914 16.477-2.2969 23.648l129.83 157.84c3.1641 3.8477 7.875 6.0938 12.863 6.125h0.11328c4.9453 0 9.6445-2.1797 12.828-5.9531l133.37-157.84c5.9922-7.0898 5.1016-17.684-1.9805-23.676-7.1055-5.9922-17.703-5.0898-23.68 1.9883z"/>
                     </g> 
                    </svg>
                    <div class="project__link">
                    <a href="${project.sourceCode}" target="_blank">source code</a>
                    <a href="${project.live}"  target="_blank">view live</a>
                    </div>
                </div>
                <div class="project__subtitle">
                    <p>${project.desc}</p>
                    <div id="tech-stack">
                        <p>TECK STACK</p>
                        <div>
                            ${stack}
                        </div>
                    </div>
                </div>
            </div>
        `
    })
    return Html
}

function renderProjects (){
    project.innerHTML = projectHtml()
}

renderProjects()