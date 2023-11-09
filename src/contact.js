const contact = (() => {

    const content = document.querySelector("#content")

    const contactpage = document.createElement("div")

    contactpage.innerHTML = 
    `<div>
        <ul>
            <li> Address: Cowrie Creek Estate</li>
            <li> Phone Number: 08033156908</li>
            <li> E-mail: chilosintergratedservices@gmail.com </li>
        </ul>
    </div>`

    content.appendChild(contactpage)
    console.log('contactpage')

})()

export default contact;