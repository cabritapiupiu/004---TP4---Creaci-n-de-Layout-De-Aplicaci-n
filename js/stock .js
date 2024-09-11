function guardarIDPrenda(idPrenda) {
  let idsGuardados = localStorage.getItem("ids_prendas");
  if (!idsGuardados) {
    idsGuardados = "";
  }
  idsGuardados = idsGuardados ? `${idsGuardados},${idPrenda}` : idPrenda;
  localStorage.setItem("ids_prendas", "");
}


guardarIDPrenda(localStorage.getItem("data_stock"));

// Recuperar las prendas guardadas y convertirlas a un array
let prendas = localStorage.getItem("ids_prendas");
prendas = prendas ? prendas.split(',') : [];

console.log(prendas);

fetch('../json/local.json')
  .then(response => response.json())
  .then(data => {
    data.forEach(e => {
      if (e.id == localStorage.getItem('id_local')) {
        e.stock.forEach(stock => {
          // Iterar sobre las prendas guardadas
          prendas.forEach(prendaId => {
            if (prendaId == stock.id) {

              document.querySelector('.main_stock').innerHTML +=`
                <div class="contenedor">
                <article>
                    <div class="imagen">
                      <img src="${stock.image}" alt="">
                    </div>
                    <div class="description">
                      <h3>${stock.prenda}</h3>
                      <p>${stock.description}</p>
                      <h4>$${stock.descuento}</h4>

                    </div>
                  </article>
                </div>
                  
                `

            }
          });
        });
      }
    });
    
    // const cartHTML = `
    // <a href="./stock.html" onclick="stock(${stock.id})" class="Cart">Add to Cart</a>`;

  // Agregar el contenido al contenedor
  });
