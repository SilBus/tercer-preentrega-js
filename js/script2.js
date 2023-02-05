const productos = [
    {
        id: 1,
        titulo: "Mamaderas",
        imagen: "./img/MAMADERA.jpg",
        precio: 800,
        cantidad: 1,
    },
    {
        id: 2,
        titulo: "Vasos",
        imagen: "./img/VASOS.jpg",
        precio: 750,
        cantidad: 1,
    },
    {
        id: 3,
        titulo: "Chupetes",
        imagen: "./img/CHUPETES.png",
        precio: 1200,
        cantidad: 1,
    },
    {
        id: 4,
        titulo: "Platos",
        imagen: "./img/PLATOS.jpg",
        precio: 1000,
        cantidad: 1,
    },
    {
        id: 5,
        titulo: "Cubiertos",
        imagen: "./img/CUBIERTOS.jpg",
        precio: 500,
        cantidad: 1,
    },
    {
        id: 6,
        titulo: "Baberos",
        imagen: "./img/BABEROS.jpg",
        precio: 400,
        cantidad: 1,
    },
    {
        id: 7,
        titulo: "Portachupetes",
        imagen: "./img/PORTACHUPETES.jpeg",
        precio: 300,
        cantidad: 1,
    },
    {
        id: 8,
        titulo: "Sonajero",
        imagen: "./img/SONAJERO.jpg",
        precio: 800,
        cantidad: 1,
    }
]

const contenedorProductos = document.getElementById("contenedor-productos")
const carritoCompras = document.getElementById("carritoCompras")
const contenedorCarrito = document.getElementById("contenedor-carrito")
const cantidadCarrito = document.getElementById("cantidadCarrito")

let carrito = JSON.parse(localStorage.getItem("carrito")) || []

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
        const repeat = carrito.some((repeatProduct) => repeatProduct.id === producto.id)

        if (repeat) {
            carrito.map((product) => {
                if (product.id === producto.id) {
                    product.cantidad++
                }
            })
        } else {

            carrito.push({
                id: producto.id,
                imagen: producto.imagen,
                titulo: producto.titulo,
                precio: producto.precio,
                cantidad: producto.cantidad
            })
        }
        console.log(carrito)
        carritoContador()
        saveLocal()
    })
})

const pintarCarrito = () => {
    contenedorCarrito.innerHTML = ""
    contenedorCarrito.style.display = "flex"
    const carritoHeader = document.createElement("div")
    carritoHeader.className = "carrito-header"
    carritoHeader.innerHTML = `
    <h1 class= "carrito-header-titulo"> Mi Carrito </h1>
    `
    contenedorCarrito.append(carritoHeader)

    const carritoBoton = document.createElement("h1")
    carritoBoton.innerText = "vaciar carrito"
    carritoBoton.className = "carrito-boton"
    carritoBoton.addEventListener("click", () => {
        contenedorCarrito.style.display = "none"
    })

    carritoHeader.append(carritoBoton)

    carrito.forEach((producto) => {
        let carritoContent = document.createElement("div")
        carritoContent.className = "carrito-content"
        carritoContent.innerHTML = `
    <img class= "img-carrito" src="${producto.imagen}">
    <h3 class= "titulo-carrito">${producto.titulo}</h3>
    <p class= "p-carrito">$ ${producto.precio}</p>
    <p class = "p-carrito">Cantidad: ${producto.cantidad}</p>
    <span class= "delete-producto"> ❌ </span>

    `
        contenedorCarrito.append(carritoContent)
        console.log(carrito.length)

        let eliminar = carritoContent.querySelector(".delete-producto")

        eliminar.addEventListener("click", () =>{
            eliminarProducto(producto.id)
        })

    })

    const total = carrito.reduce((acc, el) => acc + el.precio, 0)

    const totalCompra = document.createElement("div")
    totalCompra.className = "total-compra"
    totalCompra.innerHTML = `Total a pagar: $${total}`

    contenedorCarrito.append(totalCompra)
}

carritoCompras.addEventListener("click", pintarCarrito)

const eliminarProducto = (id) => {
    const foundId = carrito.find((element) => element.id === id)
    carrito = carrito.filter((carritoId) => {
        return carritoId !== foundId
    })
    carritoContador()
    saveLocal()
    pintarCarrito()
}

const carritoContador = () => {
    cantidadCarrito.style.display = "block"

    const carritoLength = carrito.length
    localStorage.setItem("carritoLength", JSON.stringify(carritoLength))
    cantidadCarrito.innerText = JSON.parse(localStorage.getItem("carritoLength"))
}

carritoContador()

/* LOCAL STORAGE */
const saveLocal = () => {
localStorage.setItem("carrito", JSON.stringify(carrito))
}

