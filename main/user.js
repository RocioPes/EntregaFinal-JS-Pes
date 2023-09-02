const formContainer = document.getElementById ("form-container")

formContainer.innerHTML=`<div class="card-header card text-center"><h1>Datos personales</h1></div>
<br>
<br>
        <form id="form" action="">
      <ul><div class="card-body text-center">
        <li class="card-title"><label for="name">Usuario</label>
      <input type="text" id="user-name" name="name" required></li> 
      <br>
      <li class="card-title"><label for="email">Correo Electrónico</label>
      <input type="email" name="email" id="user-email" required></li>
      <br>
     <li class="card-title">
      <label for="text">Contraseña</label>
      <input type="password" name="password" id="user-password" required></li>
    </div>
    </ul>
    <div class="text-center">
      <button class="btn btn-secondary btn-lg" type="submit" id="submit-button">Guardar</button>
      <button class="btn btn-secondary btn-lg" type="reset" >Borrar información</button>
    </div>
  <br>
<br></form>`


formContainer.addEventListener("submit", function(e){
    e.preventDefault();

    const userName = document.getElementById("user-name").value;
    const userEmail =document.getElementById("user-email").value;
    const password = document.getElementById("user-password").value;

const passwordValid = password.length >= 8;

const userInformation = passwordValid ?
{
name: userName,
email: userEmail,
password: password,

} : null;

passwordValid? confirmationData(): invalidPassword();


const savedInformation = JSON.parse(localStorage.getItem("userInformation")) || [];

savedInformation.push(userInformation);

localStorage.setItem("userInformation", JSON.stringify(savedInformation))
})

const submitButton = document.getElementById("submit-button")

submitButton.addEventListener("click",confirmationData)

function invalidPassword (){

Swal.fire({
  icon: 'error',
  title: 'Error',
  text: 'La contraseña debe tener 8 o más caracteres',

})}


function confirmationData(){
Swal.fire({
  position: 'top-end',
  icon: 'success',
  title: 'Tus datos han sido guardados',
  showConfirmButton: true,
  timer: 1500
})}

