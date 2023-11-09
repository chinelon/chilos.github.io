const menu = (() => {

    const content = document.querySelector("#content")

    const menupage = document.createElement("div")
    menupage.setAttribute("id", "menupage");
    
    menupage.innerHTML = 
    `<div>
        <div>Fish And Chips</div>
        <div>Salad </div>
        <div>Smoothie</div>
        <div>Oat Bread Loaf</div>
    </div>`

    content.appendChild(menupage)
console.log('menupage')
})()

export default menu;