var nombreAlumno = "";
var nota1;
var nota2;
var nota3;
var promedio = 0;

nombreAlumno = prompt("Ingrese nombre del alumno: ");
nota1 = prompt ("ingrese su primera nota: ");
nota2 = prompt ("ingrese su segunda nota: ");
nota3 = prompt ("ingrese su tercera nota: ");

promedio = (parseInt(nota1) + parseInt(nota2) + parseInt(nota3))/3;

console.log(promedio);

alert("Su nombre es "+ nombreAlumno + " y su promedio es " + promedio);

document.write("<h3>Su nombre es "+ nombreAlumno +"</h3>");
document.write("<h2>Y su promedio es " + promedio + "</h2>");
