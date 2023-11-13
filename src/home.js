export default function home () {

    const content = document.querySelector("#content");

    const homepage = document.createElement("div");

    homepage.innerHTML = 
    `<div class="home">
        <h1>Welcome to Chilo's Foods!</h1>
        <h1>Chilos Food</h1>
        <p>Your One Stop Shop to healthy meals in Lagos!</p>
        <h2 id="open" > Opening Times </h2>
        <ul>
            <li> Mondays to Fridays: 9am to 8pm</li>
            <li> Saturdays and Sundays: 11am to 6pm </li>
        </ul>
    </div>`
console.log('home module executed')
    content.appendChild(homepage)

}