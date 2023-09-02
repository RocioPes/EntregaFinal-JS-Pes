const logIn = document.getElementById("log-in")
logIn.innerHTML=`<div class="text-center"><h2 class="card-title"><br><b>Informacion importante</b></h2>
<p class="card-text">Recuerda que debes ingresar con tu usuario para concretar la compra.</p>
<p class="card-text">Si aún no has ingresado, puedes hacerlo mediante el siguiente enlace:</p>
</div>`


const payment= document.getElementById("payment")
payment.innerHTML=`
<div  class="text-center">
<h3>Precios actualizados</h3>
<p>Los precios de las entradas estan sujetos al valor del <b>dolar oficial</b></p>
<p id="dolar-value"></p>
</div>
<br>
<br><hr>`

///////////////////////////////API///////////////////////////////

fetch('https://v6.exchangerate-api.com/v6/6d7364de0308c97ed2d98afd/latest/USD',{
headers:{
 Key: "6d7364de0308c97ed2d98afd"
}})
.then((response) => response.json() ) 
.then((data)=>{
  
const dolarValue = document.getElementById("dolar-value")
dolarValue.innerHTML=`<p><b>Cotización:$${data.conversion_rates.ARS}</b></p>`

})

//////////////////////////////////////////////////////////////



const ticketsInCart = JSON.parse(localStorage.getItem("cart-container"))
const displayCart = document.getElementById("cart-display")


function updateCartDisplay () {
  displayCart.innerHTML="";
if (ticketsInCart && ticketsInCart.length>0){
    const ul = document.createElement("ul");
    ticketsInCart.forEach((ticket,index) => {
        const li = document.createElement("li");
        li.innerHTML=`
        <div><br></br>
        <p><strong>Entrada:</strong> ${ticket.location}</p>
        <p><strong>Cantidad:</strong> ${ticket.stock}</p>
        <p><strong>Precio:$</strong> ${ticket.price}</p></div>
        <button class="delete-ticket btn btn-danger" data-ticket-index="${index}">Eliminar</button>`
        ul.appendChild(li)
        
    });
    displayCart.appendChild(ul);
    
    
} else {
    displayCart.innerText="Aún no has adquirido entradas"
}
const totalToPay = ticketsInCart.reduce((acc, ticket) => acc + ticket.price, 0)
const totalToPay1 = document.createElement("div");
totalToPay1.innerHTML= `<p> Total a pagar: $${totalToPay}`;
displayCart.appendChild(totalToPay1);}



function deleteTicket (index){
 ticketsInCart.splice(index,1);
 localStorage.setItem("cart-container", JSON.stringify(ticketsInCart))
updateCartDisplay()
};
updateCartDisplay();



displayCart.addEventListener("click", function(e){
    if (e.target.classList.contains ("delete-ticket")){
        const index = parseInt(e.target.getAttribute("data-ticket-index"));
    deleteTicket(index);
    }
   
  })


const finishSale = document.getElementById("finish-sale")
const finishSaleButton = document.createElement("button");
finishSaleButton.textContent="Finalizar Compra";
finishSaleButton.style.display="none";
finishSaleButton.className="btn btn-success";
ticketsInCart.length>0 ? finishSaleButton.style.display="block": finishSaleButton.style.display="none";


function finishSale1 () {

    Swal.fire({
        title: '¿Deseas finalizar tu compra?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Finalizar',
        denyButtonText: `Volver`,
      }).then((result) => {
        
        result.isConfirmed?
                    Swal.fire('Compra confirmada.',` `, 'success',
          setTimeout(() => {
            Swal.fire({
              title: '',
              text: 'Comprendo lo mencionado en la imágen y acepto los términos para asistir a los recitales',
              imageUrl: `/imagenes/elementos-prohibidos.png`,
              imageWidth: 500,
              imageHeight: 600,
              imageAlt: 'elementos prohibidos',
      
            })
          }, 3000))
         : 
          Swal.fire('Aún no has finalizado tu compra', '', 'info')
        }
      );
    localStorage.setItem("cart-container", JSON.stringify(ticketsInCart));
    updateCartDisplay();
}
finishSale.appendChild(finishSaleButton);
finishSaleButton.addEventListener("click", finishSale1);
 updateCartDisplay(); 


