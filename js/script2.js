const productos = [
    {
        id: 1,
        titulo: "Mamaderas",
        imagen: "./img/MAMADERA.jpg",
        precio: 800
    },
    {
        id: 2,
        titulo: "Vasos",
        imagen: "./img/VASOS.jpg",
        precio: 750
    },
    {
        id: 3,
        titulo: "Chupetes",
        imagen: "./img/CHUPETES.png",
        precio: 1200
    },
    {
        id: 4,
        titulo: "Platos",
        imagen: "./img/PLATOS.jpg",
        precio: 1000
    },
    {
        id: 5,
        titulo: "Cubiertos",
        imagen: "./img/CUBIERTOS.jpg",
        precio: 500
    },
    {
        id: 6,
        titulo: "Baberos",
        imagen: "./img/BABEROS.jpg",
        precio: 400
    },
    {
        id: 7,
        titulo: "Portachupetes",
        imagen: "./img/PORTACHUPETES.jpeg",
        precio: 300
    },
    {
        id: 8,
        titulo: "Sonajero",
        imagen: "./img/SONAJERO.jpg",
        precio: 800
    }
]

const contenedorProductos = document.getElementById("contenedor-productos")
const carritoCompras = document.getElementById("carritoCompras")
const contenedorCarrito = document.getElementById("contenedor-carrito")


let carrito = []

productos.forEach((producto) => {
    let content = document.createElement("div")
    content.className = "producto-titulo"
    content.innerHTML = `
    <img class= "producto-imagen" src= "${producto.imagen}"
    <h3 >${producto.titulo}</h3>
    <p class= "producto-precio">${producto.precio} $</p>
    `
    contenedorProductos.append(content)

    let comprar = document.createElement("button")
    comprar.innerText = "comprar"
    comprar.className = "producto-comprar"

    content.append(comprar)

    comprar.addEventListener("click", () => {
        carrito.push({
            id: producto.id,
            imagen: producto.imagen,
            titulo: producto.titulo,
            precio: producto.precio
        })
        console.log(carrito)
    })
})

carritoCompras.addEventListener("click", () => {
    const carritoHeader = document.createElement("div")
    carritoHeader.className = "carrito-header"
    carritoHeader.innerHTML = `
    <h1 class= "carrito-header-titulo"> Mi Carrito </h1>
    `
    contenedorCarrito.append(carritoHeader)

    const carritoBoton = document.createElement("h1")
    carritoBoton.innerText = "X"
    carritoBoton.className = "carrito-boton"

    carritoHeader.append(carritoBoton)

    carrito.forEach((producto) => {
        let carritoContent = document.createElement("div")
        carritoContent.className = "carrito-content"
        carritoContent.innerHTML = `
    <img src="${producto.imagen}">
    <h3>${producto.titulo}</h3>
    <p>${producto.precio}

    `
        contenedorCarrito.append(carritoContent)
    })

    const total = carrito.reduce((acc, el) => acc + el.precio, 0)

    const totalCompra = document.createElement("div")
    totalCompra.className = "total-compra"
    totalCompra.innerHTML = `total a pagar: ${total} $`

    contenedorCarrito.append(totalCompra)

})