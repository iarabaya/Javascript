//html es un lenguaje de etiquetas
//lenguaje de programacion como Java, php, node.js para el backend

//genera contenido html dinámico
// document.write("<p>mi primer javascript</p>");
// alert("Hola mundo");
// var edad = prompt("ingrese su edad");

// if (edad >= 18){
//     document.write("puede ingresar a a la pagina");
// }else{
//     document.write("no puede ingresar a la pagina");
// }

function sumar(){
    let a = document.getElementById('a').value;
    let b = document.getElementById('b').value;

    let resultado = parseInt(a) + parseInt(b);
    document.getElementById('resultado').innerHTML = a + ' más ' + b + ' es igual a ' + resultado;
}
