const mainIndex = document.getElementById("main-index")
mainIndex.innerHTML=`
<h1>Ticket To Go</h1>
    <h2>Todos los recitales en un solo sitio</h2>
<div class="cards-index"> 
<div class="row align-items-center text-center">
    <div class="card" style="width: 18rem;">
        <img src="/imagenes/evanescence.jpg" class="card-img-top" alt="evanescence">
        <div class="card-body">
          <h5 class="card-title">Evanescence</h5>
          <p class="card-text">17 de Octubre</p>
          <p class="card-text">Movistar Arena</p>
          <a href="/shows/evanescence.html" class="btn btn-primary">Comprar</a>
        </div>
      </div>

<div class="card" style="width: 18rem;">
        <img src="/imagenes/Maneskin.jpg" class="card-img-top" alt="Maneskin">
        <div class="card-body">
          <h5 class="card-title">Maneskin</h5>
          <p class="card-text">29 de Octubre</p>
          <p class="card-text">Movistar Arena</p>
          <a href="/shows/maneskin.html" class="btn btn-primary">Comprar</a>
        </div>
      </div>

    <div class="card" style="width: 18rem;">
        <img src="/imagenes/red-hot-chili-peppers.jpg" class="card-img-top" alt="red hot chili peppers">
        <div class="card-body">
          <h5 class="card-title">Red Hot Chili Peppers</h5>
          <p class="card-text">24 y 26 de Noviembre</p>
          <p class="card-text">Estadio River Plate</p>
          <a href="/shows/redhotchilipeppers.html" class="btn btn-primary">Comprar</a>
        </div>
      </div>

      <div class="card" style="width: 18rem;">
      <img src="/imagenes/the-weekend.jpg" class="card-img-top" alt="the weeknd">
      <div class="card-body">
        <h5 class="card-title">The Weeknd</h5>
        <p class="card-text">18 y 19 de Octubre</p>
        <p class="card-text">Estadio River Plate</p>
        <a href="/shows/theweekend.html" class="btn btn-primary">Comprar</a>
      </div>
    </div>
</div>
</div>
`