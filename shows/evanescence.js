const evanescencePresentation = document.getElementById("evanescence-presentation")
evanescencePresentation.innerHTML=`<h1>Evanescence - South American Tour 2023</h1>
<h2>17 de octubre</h2>

<div class="clearfix">
    <img src="/imagenes/evanescence2.jpg" class="col-md-6 float-md-end mb-3 ms-md-3 img-bands" alt="evanescence">
  
    <p class="text-band">¡EVANESCENCE NUEVAMENTE EN ARGENTINA! La banda liderada por Amy Lee, vuelve al país después de 6 años, en el marco del South American Tour 2023.

Evanescence, ganador de dos premios GRAMMY®, ha dejado huella en personas de todo el mundo. Su álbum debut histórico, “Fallen”, lanzado en 2003, sentó las bases al pasar 43 semanas en el Top 10 de Billboard y vender más de 17 millones de copias en todo el mundo.</p>
        </div>
        <h3> ¡Escuchá lo mejor de Evanescence!</h3>
       <div class="video"> <iframe  width="560" height="315" src="https://www.youtube.com/embed/videoseries?si=sh41giW0x5I9sYbE&amp;list=PL198741246C1CF574" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> </div>
`


const ticketsContainer = document.getElementById("tickets-evanescence")
let addButton = document.querySelectorAll(".btn-success")

// ARRAY OF TICKETS 

const tickets = [
    {
        id: 1,
        location: "EVANESCENCE: Campo",
        price: 30000,
        stock: 200,
        
        
    },

    {
        id: 2, 
        location: "EVANESCENCE: Plateas altas",
        price: 23000,
        stock: 800,
        

    },

    {
        id:3,
        location:"EVANESCENCE: Plateas Medias",
        price: 20000,
        stock: 900,
        

    },

    {
        id: 4,
        location: "EVANESCENCE: Plateas bajas",
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
         