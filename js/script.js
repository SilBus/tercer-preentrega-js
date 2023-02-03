// const productos = [
//     { nombre: "mamadera", precio: 900 },
//     { nombre: "chupetes", precio: 450 },
//     { nombre: "vasos", precio: 1200 },
//     { nombre: "platos", precio: 550 }
//     { nombre: "vasos", precio: 900 },
//     { nombre: "sonajero", precio: 450 },
//     { nombre: "baberos", precio: 1200 },
//     { nombre: "portachupetes", precio: 550 }


// ]

// let carrito = []

// let seleccion = prompt("Hola! desea comprar algun producto?")

// while( seleccion != "si" && seleccion != "no"){
//     alert("Por favor ingrese por SI o por NO")
//     seleccion = prompt("Hola! desea comprar algo?")
// }

// if(seleccion == "si"){
//     alert("Seleccione los productos que desee agregar a su carrito")
//     let todoslosProductos = productos.map((producto) => producto.nombre + " " + producto.precio + "$")
//     alert(todoslosProductos.join(" - "))
// }else if(seleccion == "no"){
//     alert("Gracias por venir, hasta pronto")
// }

// while(seleccion != "no"){
//     let producto = prompt("Agrega un producto a tu carrito")
//     let precio = 0

    //  if(producto == "mamadera" || producto == "chupetes" || producto == "vasos" || producto == "platos" || 
    //   producto == "vasos" || producto == "sonajero" || producto == "baberos" || producto == "portachupetes"){
//         switch(producto){
//             case "mamadera":
//             precio = 900
//             break;

//             case "chupetes":
//             precio = 450
//             break;

//             case "vasos":
//             precio = 1200
//             break;

//             case "platos":
//             precio = 550
//             break;

//             default:
//                 break;
//         }

//         let unidades = parseInt(prompt("cuantas unidades quiere llevar"))

//         carrito.push({producto, unidades, precio})
//         console.log(carrito)
//     }else {
//         alert("no tenemos ese producto")
//     }

//     seleccion = prompt("desea seguir comprando?")

//     while(seleccion == "no"){
//         alert("gracias por la compra")
//         carrito.forEach((carritoFinal) =>{
//             console.log(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades}, total a pagar por producto ${carritoFinal.unidades * carritoFinal.precio}`)
//         })
//         break;
//     }
// }

// const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0)
// console.log(`el total a pagar es: ${total}`)

// const iva = 1.21
// console.log(`total iva incluido ${total * iva}`)

// let valorProducto= 0
// let nombreProducto= ""
// let total=0
// let iva=1.21
// let lista=""

// //IVA
// function agregaIva(total,iva){
    
//     return (total * iva)
// }

//SALUDO

// function saludo(){
//     console.log("Hola, bienvenido al Carrito de compras")
//     }

// //LOGIN

// function login(){
//     usuario = prompt("Ingrese su nombre de Usuario")
    
//     if(usuario == ""){
//         alert("INGRESE UN USUARIO VALIDO")
//     }
//     return console.log("Usuario INGRESADO:"+" "+usuario)
    
//     }

//CONSTRUCTOR PRODUCTO

// class Productos {
//     constructor(nombreProducto, valorProducto) {
//         this.nombreProducto = nombreProducto;
//         this.valorProducto = parseFloat(valorProducto);
//     }
// }


// //DECLARACION DE ARRAY VACIA

// const productos = [];
// const productosComprados= [];


// // FUNCION COMPRA

// function compra (){

//     cantidadProductos=Number(prompt("Ingrese cantidad de productos"))

//     for (let i= 0; i<cantidadProductos; i++) {
//         nombreProducto=prompt(`Ingrese el NOMBRE del Producto ${i+1} o ESC para CANCELAR`)
//         if (nombreProducto== "esc"|| "ESC") {
//             break
//         }
//         valorProducto=Number(prompt(`Ingrese el VALOR del producto ${i+1}`))
//         total=valorProducto+total
//         productos.push(new Productos(nombreProducto,valorProducto));
//     }
// }



// saludo()
// login()
// compra()
// informes()



// //INFORME

// function informes(){

//     Productos.forEach((nombreProducto) => console.log(nombreProducto));
//     console.log("El monto total sin IVA es ", total) 
//     console.log("El Total con IVA es: ", agregaIva(total,iva))
    
//}


// let buscar = prompt("desea buscar")

// const resultado = productos.find((producto) => producto.nombre === buscar)

// console.log(resultado)



