import {pageLoad} from './pgload'
import {home} from './home';
import menu from './menu';
import contact from './contact';

console.log('the website is working')

const contentContainer = document.querySelector("#content");

//const tab = document.createElement("div")

const getMenu = document.createElement('button')

getMenu.addEventListener('click', function () {
    menu()
})
contentContainer.appendChild(getMenu);

const getContact = document.createElement('button')

getContact.addEventListener('click', function () {
    contact()
})
contentContainer.appendChild(getContact);

const getHome = document.createElement('button')

getHome.addEventListener('click', function () {
    
    home()
})
contentContainer.appendChild(getHome);
/*
    tab.innerHTML =
    `<button id='menupage'> menu </button>
    <button id='contactpage'> </button>
    <button id='homepage'></button>`*/
