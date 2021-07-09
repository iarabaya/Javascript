const addBtn = document.getElementById("addBtn");

addBtn.onmouseover = function () {
    addBtn.style.backgroundColor = "yellow";
}

addBtn.onmouseleave = () => {
    addBtn.style.backgroundColor = "aqua"
}
let nroNota = 0;

addBtn.onclick = () => {
    nroNota ++;
    console.log(nroNota);
    const nota = document.createElement('p');
    const contenido = document.getElementById('contenido').value;
    const texto = document.createTextNode('nota '+nroNota +' dice ' + contenido);
    nota.appendChild(texto);

    const div = document.getElementById('notas');
    document.body.insertBefore(nota, div);

    document.getElementById('contenido').value = '';
}

//Escribir alumnos con for y con codigo html directo en el dom
document.open();
const listadoAlumnos = [
    [1, 'Pedro','Sanchez',45352156],
    [2, 'Tamara','Castro', 43115265],
    [3, 'Servando', 'Suarez', 45235567],
    [4, 'Gian', 'Quispe', 45211367],
    [5, 'Juan', 'Lopez', 39118496]
    ]

    for (let i = 0; i < listadoAlumnos.length; i++) {
        document.write(`<h4>Alumno nro ${listadoAlumnos[i][0]}</h4>`)
        document.write(`<p>Nombre y Apellido: ${listadoAlumnos[i][1]} ${listadoAlumnos[i][2]}</p>`)
        document.write(`DNI: ${listadoAlumnos[i][3]}`);
        document.write('<br>');
    }

document.close();