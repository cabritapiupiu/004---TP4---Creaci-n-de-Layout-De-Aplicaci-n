fetch('../json/local.json')
.then(response => response.json())
.then(data => {
data.forEach(e => {
e.stock.forEach(stock => {
if (localStorage.getItem("id_prenda") == stock.id) {
document.querySelector(".pic").setAttribute("src", stock.image);
console.log(stock.descuento)
document.querySelector('.datos').innerHTML += `

    <h1> ${stock.prenda}</h1>
    <div class="ofertas">
        <p class="f30 descuento ">$${stock.descuento}</p>
        <p class=" f20 precio_viejo">$${stock.precio_viejo}</p>
    </div>
    <div class="description">
        <p>${stock.description}</p>
    </div>

`
}
});
});
});