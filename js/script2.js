const contenedorProductos = document.getElementById("contenedor-productos")
const carritoCompras = document.getElementById("carritoCompras")
const contenedorCarrito = document.getElementById("contenedor-carrito")
const cantidadCarrito = document.getElementById("cantidadCarrito")

let carrito = JSON.parse(localStorage.getItem("carrito")) || []

const obtenerProductos = async () => {
    const response = await fetch("data.json")
    const data = await response.json()
    
    data.forEach((producto) => {
        let content = document.createElement("div")
        content.className = "producto-titulo"
        content.innerHTML = `
        <img class= "producto-imagen" src= "${producto.imagen}"
        <h3 >${producto.titulo}</h3>
        <p class= "producto-precio">$ ${producto.precio}</p>
        `
        contenedorProductos.append(content)
    
        let comprar = document.createElement("button")
        comprar.innerText = "comprar"
        comprar.className = "producto-comprar"
    
        content.append(comprar)
    
        comprar.addEventListener("click", () => {
            Toastify({
    
                text: "Agregaste un producto al carrito ✔",
                duration: 3000,
                style: {
                    background: "linear-gradient(to right, #00b09b, #96c93d)",
                },
            }).showToast();
        })
    
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
            
            pintarCarrito()
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
        carritoBoton.innerText = "Vaciar Carrito"
        carritoBoton.className = "carrito-boton"
        carritoBoton.addEventListener("click", () => {
            contenedorCarrito.style.display = "none"
    
            carrito = []
            carritoContador()
            saveLocal()
            Swal.fire('Vaciaste Tu Carrito 😒')
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
    
            eliminar.addEventListener("click", () => {
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
    
    setTimeout( () => {
        Swal.fire('COMPRA HOY CON UN 50% OFF! ❤')
    }, 3000)
}

obtenerProductos()



const saveLocal = () => {
    localStorage.setItem("carrito", JSON.stringify(carrito))
}

