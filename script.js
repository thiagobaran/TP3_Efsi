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
            
            const unDiv = document.createElement("div");
            unDiv.classList.add("col-md-3");

            unDiv.innerHTML = `
            <div class="card">
                <img src="${element.images[0]}" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">${element.title}</h5>
                <p class="card-text">${element.description}</p>
                <a href="#" class="btn btn-dark" onclick="verDetalle('${element.title}','${element.price}','${element.discountPercentage}','${element.rating}','${element.stock}','${element.brand}','${element.category}')">Ver detalle</a>
                </div>
            </div>
            `;

            cardsContainer.appendChild(unDiv);
            
        });

        
    })
}


const verDetalle = (nombre,precio,porc,rating,stock,marca,categoria) => {
    const divTitulo = document.getElementById("headerModal");
    const bodyModal = document.getElementById("bodyModal");
    divTitulo.innerHTML="";
    bodyModal.innerHTML="";
    const titulo = document.createElement("h5");
    titulo.classList.add("modal-title");
    const texto = document.createElement("p");

    titulo.innerHTML = nombre;
    texto.innerHTML = "Precio: "+ precio + '<br>' + "Porcentaje de descuento: " + porc +'<br>' + "Rating: " + rating +'<br>' + "Stock: " + stock +'<br>' + "Marca: " + marca +'<br>' + "Categoria: " + categoria;

    
    divTitulo.appendChild(titulo);
    bodyModal.appendChild(texto);
    const myModal = new bootstrap.Modal('#sa', {
        keyboard: false
    })
    myModal.show(true);
}