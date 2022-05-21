let nota1: number;
let nota2: number;
let nota3: number;
let nombre: string = "";
let aux: number;
let contador: number;
let error: number = 0;
let notaFinal: number;

nombre = String(prompt("Ingrese el nombre del alumno: "));

while (nombre !== "") {
  console.log("Nombre del alumno: " + nombre);
  error = 0;
  for (contador = 1; contador <= 3; contador++) {
    aux = Number(prompt("Ingrese la nota " + contador + " del alumno"));
    if (contador === 1) {
      nota1 = aux;
      if (nota1 >= 0 && nota1 <= 10) {
        nota1 = nota1 * 0.1;
        console.log("Práctica: " + nota1);
      } else {
        console.log("error en nota 1");
        error = 1;
      }
    } else if (contador === 2) {
      nota2 = aux;
      if (nota2 >= 0 && nota2 <= 10) {
        nota2 = nota2 * 0.5;
        console.log("Problema: " + nota2);
      } else {
        console.log("error en la nota 2");
        error = 2;
      }
    } else if (contador === 3) {
      nota3 = aux;
      if (nota3 >= 0 && nota3 <= 10) {
        nota3 = nota3 * 0.4;
        console.log("Teoría: " + nota3);
      } else {
        console.log("error en la nota 3");
        error = 3;
      }
    }
  }
  if (error) {
    console.log("Error en la carga de notas");
  } else {
    notaFinal = nota1 + nota2 + nota3;
    console.log("La notafinal de " + nombre + " es: " + notaFinal);
  }
  nombre = String(prompt("Ingrese el nombre del alumno: "));
}
