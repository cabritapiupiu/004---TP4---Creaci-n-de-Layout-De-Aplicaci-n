function data_id(id) {
    localStorage.setItem("id_prenda", id);
}

function id_tipo(id){
    localStorage.setItem("id_tipo", id);
}



fetch('json/local.json')

    .then(response => {

        return response.json()
    })

    .then(data => {

        data.forEach(e => {
            e.stock.forEach(stock => {
                document.querySelector(".pic").setAttribute("src", e.urllogo)

                document.querySelector('.article').innerHTML +=

                    `    
                    <a class="card color" href="../producto.html" onclick="data_id(${stock.id})" >
                        
                        <div class="cabecera">
                            <img src="${stock.image}" alt="">
                        </div>
                        <div class="datos">
                                <p>${stock.prenda}</p>
                            <div class="descripciones">
                                <p class="descuento">$${stock.descuento}</p>
                                <p class="precio_viejo">$${stock.precio_viejo}</p>

                            </div>
                    </div>
                </a>
            
        `
            })
        })
    })





