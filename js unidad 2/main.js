let nombreAlumno = "";
let nota1;
let nota2;
let nota3;
let promedio = 0;

nombreAlumno = prompt("Ingrese nombre del alumno: ");

nota1 = prompt ("ingrese su primera nota: ");
nota2 = prompt ("ingrese su segunda nota: ");
nota3 = prompt ("ingrese su tercera nota: ");
promedio = (parseInt(nota1) + parseInt(nota2) + parseInt(nota3))/3;

alert("Su nombre es "+ nombreAlumno + " y su promedio es " + promedio);

document.getElementById("info").innerHTML = `<table class="table">
<thead class="table-dark">
  <tr>
    <th scope="col">Nombre</th>
    <th scope="col">Nota 1</th>
    <th scope="col">Nota 2</th>
    <th scope="col">Nota 3</th>
    <th scope="col">Promedio</th>
  </tr>
</thead>
<tbody>
  <tr>
    <th scope="row">${nombreAlumno}</th>
    <td>${nota1}</td>
    <td>${nota2}</td>
    <td>${nota3}</td>
    <td>${promedio}</td>
  </tr>
  </tbody>
  </table>`;

