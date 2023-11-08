//alert('my name is chinelo')
const home = (() => {

    const content = document.querySelector("#content")

    const homepage = document.createElement("homepage")

    homepage.innerHTML = `<div>
    <p>HELLO THERE</p>
    <img src="../assets/chilos-food.png" alt="Chilos Food Logo" style="align-items: center;">
    <h1 style="color: rgb(110, 216, 110);">Chilos Food</h1>
    <p>This Restaurant is great and it sells extremely healthy food stuff</p>
    </div>`

    content.appendChild(homepage)

})()

export default home;