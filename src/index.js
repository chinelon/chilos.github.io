import home from './home';
import menu from './menu';
import contact from './contact';

console.log('the website is working')

const contentContainer = document.querySelector("#content");

const main = (() => {
    home()
    const tab = document.createElement("div");
    
    const getMenu = document.createElement('button');
    getMenu.textContent = 'Menu';
    getMenu.addEventListener('click', () => {
       //contentContainer.innerHTML = '';
        menu()
        console.log('mainmenu')
    });


    const getContact = document.createElement('button');
    getContact.textContent = 'Contact';
    getContact.addEventListener('click', contact);

    const getHome = document.createElement('button');
    getHome.textContent = 'Home';
    getHome.addEventListener('click', function(){
        home()
        console.log('home index')
    });

    tab.appendChild(getMenu);
    tab.appendChild(getContact);
    tab.appendChild(getHome);

    contentContainer.appendChild(tab);

    console.log('main')
})();