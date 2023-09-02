const redhotchilipeppersPresentation = document.getElementById("redhotchilipeppers-presentation")
redhotchilipeppersPresentation.innerHTML=`<h1>Red hot chili peppers</h1>
    <h2>24 de noviembre</h2>
    <h2>26 de noviembre</h2>
    <div class="clearfix">
        <img src="/imagenes/red-hot-chili-peppers2.jpg" class="col-md-6 float-md-end mb-3 ms-md-3 img-bands" alt="redhotchilipeppers">
      
        <p class="text-band">
            La icónica banda vendrá con su formación más clásica, integrada por Anthony Kiedis, Flea, Chad Smith y el eximio guitarrista John Frusciante, que volvió a sumarse después de 10 años, para brindar dos presentaciones en Argentina los días 24 y 26 de noviembre en el Estadio River Plate.
        </p>
    </div>
    <div>
    <h3> ¡Escuchá lo mejor de Red Hot Chili Peppers!</h3>
      <div class="video"><iframe width="560" height="315" src="https://www.youtube.com/embed/QOBpzVksZmI?si=WaNsr2eZzfe6isxW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
    </div>

   `


const ticketsContainer = document.getElementById("tickets-rhcp");
let addButton = document.querySelectorAll(".btn-success")


//ARRAY OF PRODUCTS


const tickets = [
    {
        id: 9,
        location: "RED HOT CHILI PEPPERS: Campo Delantero",
        price: 48000,
        stock: 400,
        
        
    },

    {
        id: 10, 
        location: "RED HOT CHILI PEPPERS: Campo Trasero",
        price: 23000,
        stock: 500,
    },

    {
        id:11,
        location:"RED HOT CHILI PEPPERS: Plateas Altas",
        price: 32000,
        stock: 3000,
    },

    {
        id: 12,
        location: "RED HOT CHILI PEPPERS: Plateas Medias",
        price: 48000,
        stock: 3000,
    },

    {
        id:13,
        location: "RED HOT CHILI PEPPERS: Plateas Bajas",
        price:52000,
        stock:4000,
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

