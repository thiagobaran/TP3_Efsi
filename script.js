const traerProd = (url) => {
    axios.get(url)
        .then(res => {
        const prodUl = document.getElementById("products");
        
        res.data.products.forEach(element => {
            const unLi = document.createElement("li");
            unLi.innerHTML = `<b> ${element.title} </b>`;
            prodUl.appendChild(unLi);
        });
        })
}
traerProd('https://dummyjson.com/products');

const botonBuscar = document.getElementById("buscar");
let inputProducto = document.getElementById("productos");

botonBuscar.onclick = () =>{
    const cardsContainer = document.getElementById("cards");
    cardsContainer.innerHTML = "";
    axios.get("https://dummyjson.com/products/search?q=" + inputProducto.value)
    .then(res => {
        const tabla = document.getElementById("tablaProd");
        console.log(res.data.products);
        res.data.products.forEach(element => {
            
            /*const comienzoCard = document.getElementById("comienzoCard");
            const cardProd = document.getElementById("cardProd");
            const unaImg = document.createElement("img");
            const titleProd = document.createElement("h5");
            const descProd = document.createElement("p");
            const cBody = document.getElementById("cBody");
            const body = document.createElement("div");


            unaImg.innerHTML = `<img src ${element.images} class="card-img-top" alt="...">`;

            titleProd.innerHTML = `<h5> ${element.title} </h5>`;
            descProd.innerHTML = `<p> ${element.description} </p>`;
            body.innerHTML=`<h5> ${element.title} </h5> <p> ${element.description} </p>`;*/
            const unDiv = document.createElement("div");
            unDiv.classList.add("col-md-3");


            unDiv.innerHTML = `
            <div class="card">
                <img src="${element.images[0]}" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">${element.title}</h5>
                <p class="card-text">${element.description}</p>
                <a href="#" class="btn btn-primary" onclick="verDetalle('${element.title}${element.price}${element.discountPercentage}${element.rating}${element.stock}${element.brand}${element.category}')">Ver detalle</a>
                </div>
            </div>
            `;

            cardsContainer.appendChild(unDiv);
            
        });

        
    })
}


const verDetalle = (nombre,precio,porc,rating,stock,marca,categoria) => {
    <div class="modal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>Modal body text goes here.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
}