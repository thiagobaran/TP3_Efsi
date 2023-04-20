const traerProd = (url) => {
    axios.get(url)
        .then(res => {
        const prodUl = document.getElementById("products");

        res.data.products.forEach(element => {
            const unLi = document.createElement("li");
            unLi.innerHTML = `<b> ${element.title} </b>`;
            prodUl.appendChild(unLi);
        });
        console.log(res);
        })
}
traerProd('https://dummyjson.com/products');

const botonBuscar = document.getElementById("buscar");
let inputProducto = document.getElementById("productos");

botonBuscar.onclick = () =>{
    if(inputProducto.value.length ){
        traerIguales('https://dummyjson.com/products/search?q=');
    }
}


const traerIguales = (url) =>{
    axios.get(`url ${inputProducto}`)
    .then(res => {
        res.data.products.forEach(element => {
            
            
            const prodTabla = document.getElementById("tablaProd");
            
            const prodFiltradostr = document.getElementById("ProductsFiltrados");
            
            const prodFiltradostd = document.createElement("td");
            
            prodFiltradostd.innerHTML = `<b> ${element.title} </b>`;
            
            prodFiltradostr.appendChild(prodFiltradostd);
        });
    })
}
