export default function contact () {

    const content = document.querySelector("#content")

    const contactpage = document.createElement("div")

    contactpage.innerHTML = 
    `<div class="contactpage">
            <div> Address: Cowrie Creek Estate</div>
            <div> Phone Number: 08033156908</div>
            <div> E-mail: chilosintergratedservices@gmail.com </div>
    </div>`

    content.appendChild(contactpage)
    console.log('contactpage')

}
