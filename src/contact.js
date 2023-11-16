export default function contact() {

    const content = document.querySelector("#content")

    const contactpage = document.createElement("div")

    contactpage.innerHTML =
        `<div class="contactpage">
            <i class="fa-solid fa-location-dot"> Address: Cowrie Creek Estate </i>
            <i class="fa-solid fa-phone"> Phone Number: 08033156908</i>
            <i class="fa-solid fa-envelope-open-text"> E-mail: chilosintergratedservices@gmail.com </i>
        </div>`

    content.appendChild(contactpage)
    console.log('contactpage')

}
