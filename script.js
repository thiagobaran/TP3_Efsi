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
    axios.get("https://dummyjson.com/products/search?q=" + inputProducto.value)
    .then(res => {
        const tabla = document.getElementById("tablaProd");
        console.log(res.data.products);
        res.data.products.forEach(element => {
            const tbody = document.getElementById("tablaProd");
            const unTr = document.createElement("tr");
            const tdProducto = document.createElement("td");
            const tdDesc = document.createElement("td");

            tdProducto.innerHTML = `<td> ${element.title} </td>`;
            tdDesc.innerHTML = `<td> ${element.description} </td>`;

            unTr.innerHTML=`<td> ${element.title} </td> <td> ${element.description} </td>`;
            
            tablaProd.appendChild(unTr);
        });

        
    })
}
