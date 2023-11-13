export default function pageLoad ()  {
    //container
    const contentContainer = document.querySelector("#content");
  
    const header = document.createElement("header");
    header.innerHTML = `
    <div class="nav-container">
    <img src="../assets/chilos-food.png">
        <div>
            <h2>Chilos Foods</h2>
         </div>
        <div class="tab"> 
            <div class="tab red">Home</div>
            <div class="tab">Menu</div>
            <div class="tab">Contact us</div>
        </div>  
    </div> `;

    const footer = document.createElement("footer");
    footer.innerHTML = 
    `<footer> Created by Chinelo Nwobbi </footer>`
  
      contentContainer.appendChild(header)
      //contentContainer.appendChild(footer)
  };

