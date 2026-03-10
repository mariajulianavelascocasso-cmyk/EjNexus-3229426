export function fnmostrar() {
  let numeros = [];
  for (let i = 1; i <= 10; i++) {
    numeros.push(i);
  }
  const resultado = numeros.join(", ");
  alert(`Números del 1 al 10: ${resultado}`);
  console.log(`Números del 1 al 10: ${resultado}`);
  return resultado;
}