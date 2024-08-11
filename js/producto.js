fetch('../json/local.json')
    .then(response => response.json())
    .then(data => {
        data.forEach(e => {
            e.stock.forEach(stock => {
                if (localStorage.getItem("id_prenda") == stock.id) {
                    document.querySelector(".pic").setAttribute("src", stock.image);
                    console.log(stock.descuento)
                    
                    document.querySelector('main').innerHTML += `
                        <div class="datos">
                        <h2> ${stock.prenda}</h2>
                        <div class="ofertas">
                <p class="f30 descuento ">$${stock.descuento}</p>
                <p class=" f20 precio_viejo">$${stock.precio_viejo}</p>
                <p>${stock.description}</p>
                
            </div>
        </div>
                    `
                }
            });
        });
    });
