const alfabeto = /^[A-Za-z]+$/;
var contador = 1;

function getName(){
    var name = document.getElementById("nombre").value;

    if(name != ''){
        if(!name.match(alfabeto)){
            alert("ingrese un nombra valido!");
            document.getElementById("nombre").value = "";
        }else{

            document.getElementById("datos").hidden = false;
            let addname = document.getElementById("alumno");
            addname.innerHTML += `<p>${name}</p>`;

            let div = document.getElementById("notas");
            div.style.display = "block";

            document.getElementById("name-btn").hidden = true;
        }
    }else{
        alert("el campo de nombre no puede estar vacío");
    }

}

function ingresaNota(){
    let nota = document.getElementById("nota").value;
    let addgrade = document.getElementById("alumno");
    addgrade.innerHTML += `<p>Nota ${contador}: ${nota} </p>`;
    document.getElementById("nota").value = "";
    contador ++;
}