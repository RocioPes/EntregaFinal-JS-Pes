const theweekndPresentation = document.getElementById("theweeknd-presentation")
theweekndPresentation.innerHTML=` <h1>The Weeknd</h1>
<h2>18 de octubre</h2>
<h2>19 de octubre</h2>

<div class="clearfix">
    <img src="/imagenes/the-weekend-2.jpg" class="col-md-6 float-md-end mb-3 ms-md-3 img-bands" alt="the-weeknd">
  
    <p class="text-band">The Weeknd se presentará el 18 y 19 de octubre en el estadio Más Monumental de River Plate. </p>
    <p class="text-band">A seis años de su única visita al país, el artista desembarcará con su gira mundial "After Hours Til Dawn: Global Stadium Tour", dónde presentará sus últimos dos discos de estudio: After Hours (2020) y Dwan FM (2022).

    </p>
      </div>
      <h3> ¡Escuchá lo mejor de The Weeknd!</h3>
      <div class="video"><iframe width="560" height="315" src="https://www.youtube.com/embed/aj4ijDB6P9k?si=C_gz6znIVQbIB1uN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>`
const ticketsContainer = document.getElementById("tickets-weeknd")
let addButton = document.querySelectorAll(".btn-success")

// ARRAY OF TICKETS 

const tickets = [
    {
        id: 14,
        location: "THE WEEKND: Campo delantero",
        price: 40000,
        stock: 300,
        
    },

    {
        id: 15, 
        location: "THE WEEKND: Campo trasero",
        price: 20000,
        stock: 800,
    },

    {
        id:16,
        location: "THE WEEKND: Plateas Alta",
        price: 27000,
        stock: 900,
    },

    {
        id: 17,
        location: "THE WEEKND: Plateas medias",
        price: 22000,
        stock: 1000,
    },

    {
        id: 18,
        location: "THE WEEKND: Plateas bajas",
        price: 15000,
        stock: 1000,
    },

      
]

function reloadLocalStorage (){
    const JSONcart = localStorage.getItem("cart-container");
    (JSONcart)?
        cart = JSON.parse(JSONcart): cart = [];
}
  reloadLocalStorage(); 

// DISPLAY OF TICKETS 

function showTickets() {
    tickets.forEach((ticket) => {
            const div = document.createElement("div");
            div.innerHTML=
            `<br></br><p><strong>${ticket.location}</strong></p> 
           <p><strong> Precio: </strong>$ ${ticket.price}</p>
            <p><strong> Disponibles: </strong> ${ticket.stock} entradas</p> 
             <button  class="btn btn-success" id="${ticket.id}" >Comprar</button>`;
    
            ticketsContainer.append(div);
    
            })} 
    
        showTickets();
        


        function buttons () {
            addButton = document.querySelectorAll(".btn-success");
            addButton.forEach(button => {
                button.addEventListener("click", addToCart);
            }
                )
        } 
        

        
        function addToCart (e){
           
            const btn = e.target;    
            const idButton = parseInt(btn.getAttribute(`id`));
            const selectedTicket = tickets.find(ticket => ticket.id === idButton);
            
            if (cart.some(ticket => ticket.id === idButton)){
            const index = cart.findIndex(ticket => ticket.id === idButton);
            cart[index].stock ++;
            } else {
                selectedTicket.stock = 1;
                cart.push(selectedTicket);
                Toastify({
            
                    text: "Has añadido un nuevo ticket, por favor dirígete a MIS ENTRADAS para visualizarlo",
                    
                    duration: 3000
                    
                    }).showToast();
            }
            
            localStorage.setItem("cart-container",JSON.stringify(cart))
            }
             
            buttons();
         