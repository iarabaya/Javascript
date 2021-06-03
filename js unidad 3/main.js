function mayorEdad (edad){
    return edad >= 18? "Usted es mayor de edad" : "Usted no es mayor de edad";
}

let edadUsuario = prompt("Ingrese su edad: ");
alert(mayorEdad(edadUsuario));

/*function validarUsuario(){
   const edadUsuario = parseInt(document.getElementById("usuarioMain").value);
   if(edadUsuario > 99){
       alert("debe ingresar valores validos (numeros entre el 1 y 99)");
       document.getElementById("usuarioMain").value = "";
       document.getElementById("validacionVisitante").innerHTML = "";
   }else{
        document.getElementById("validacionVisitante").innerHTML = mayorEdad(edadUsuario);
   } 
}*/

function compararEdades(array){
    const mayor = array.reduce((acumulador, elemento)=>{ return acumulador < elemento? elemento : acumulador })
    const usuario = array.indexOf(mayor);
    document.getElementById("resultado").innerHTML = `<h2>El mayor es el usuario ${usuario + 1} que tiene ${mayor} años</h2>`
}

function evaluarEdades(){
    let edades =[]
    for (let i = 0; i < 3; i++) {
        let user = parseInt( document.getElementById("usuario"+(i+1)).value);
        edades.push(user);
    }
    
    if(edades.some( e => (isNaN(e) || e > 99))){
        alert("debe ingresar valores validos (numeros entre el 1 y 99)");
        document.getElementById("formEdades").reset();
        document.getElementById("resultado").hidden = true;
    }else {
        compararEdades(edades);
        document.getElementById("resultado").hidden = false;
    }   
}