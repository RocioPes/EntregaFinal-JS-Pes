const maneskinPresentation = document.getElementById("maneskin-presentation")
maneskinPresentation.innerHTML=`  <h1>Maneskin - Rush! world tour</h1>
<h2>29 de octubre</h2>

<div class="clearfix">
    <img src="/imagenes/Maneskin2.jpg" class="col-md-6 float-md-end mb-3 ms-md-3 img-bands" alt="maneskin">
  
    <p class="text-band">LA BANDA DEL MOMENTO ANUNCIA EL REENCUENTRO CON EL PÚBLICO LOCAL PARA EL DOMINGO 29 DE OCTUBRE EN EL MOVISTAR ARENA



        Justo cuando parecía verdad que los días del rock habían llegado a su fin, desde Italia surgió el fenómeno inesperado Måneskin para decir: el rock nunca morirá. La banda dio uno de los shows más comentados en Argentina en septiembre de 2022, y tanto el público como ellos se quedaron con ganas de repetir. Ahora a marcar el calendario: la banda confirmó fecha para el 29 de octubre de 2023 en el Movistar Arena.
        
        Tras el exitoso lanzamiento del single “GOSSIP” con el guitarrista estrella de Rage Against The Machine Tom Morello, el 2023 viene siendo un gran año para Måneskin. Estrenaron  RUSH!,  su  tercer  álbum  que  incluye  este hit y también el single   “LA
        
         FINE”, con letra en su natal italiano, lanzado a fines de 2022. El ansiado trabajo discográfico a su vez honra al rock que la banda ha sabido resucitar un cover de “If I Can Dream”, el clásico de Elvis Presley que estrenó como parte de Elvis, el film de Baz Luhrmann. Con este nuevo material de largo aliento -17 canciones- la banda promete un show repleto de novedades que den cuenta del momento artístico que están atravesando.
        
        
        
        El cuarteto glam conformado por Victoria (bajo), Damiano (voz), Thomas (guitarra) y Ethan (batería), dio sus primeros shows en 2015 en las calles de Roma, y en pocos años tuvieron un meteórico ascenso que los encuentra hoy entre los nombres más codiciados por los festivales y públicos de todo el mundo. En 2021, Måneskin lanzó su segundo álbum Teatro d'ira: Vol. I (2021), con un gran éxito de ventas y hits como “Vent'anni” y “I Wanna Be Your Slave”, con los que conquistaron mercados mucho más allá del eun con la canción “Zitti e Buoni”. Han sido aclamados a nivel mundial al obtener varios reconocimientos platino y oro en más de 15 países de todo el mundo.</p>
      </div>
      <h3> ¡Escuchá lo mejor de Maneskin!</h3>
      <div class="video"><iframe width="560" height="315" src="https://www.youtube.com/embed/1EpPKpOb78I?si=UxU62_vn0FTS8cxB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
      `

const ticketsContainer = document.getElementById("tickets-maneskin")
let addButton = document.querySelectorAll(".btn-success")

// ARRAY OF TICKETS 

const tickets = [
    {
        id: 5,
        location: "MANESKIN: Campo",
        price: 30000,
        stock: 200,
        
    },

    {
        id: 6, 
        location: "MANESKIN: Plateas altas",
        price: 23000,
        stock: 800,
    },

    {
        id:7,
        location:"MANESKIN: Plateas Medias",
        price: 20000,
        stock: 900,
    },

    {
        id: 8,
        location: "MANESKIN: Plateas bajas",
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
         