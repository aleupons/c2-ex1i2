const frase = "frase_escrita_en_format_snake_case";
const frase2 = "fraseEscritaEnFormatCamelCaseA";

function ex2 (snake) {
  const paraules = snake.split("_");
  let camelCase = "";
  for (const paraula of paraules.slice(1)) {
    camelCase += ex1(paraula);
  }
  return paraules[0] + camelCase.replaceAll(",","");
}

function ex1 (paraula) {
  return paraula.charAt(0).toUpperCase() + paraula.slice(1,paraula.length);
}

function ex2v2 (camel) {
  const paraules = camel;
  let snakeCase = "";
  for (const paraula of paraules.slice(0,paraules.length)) {
    if(isUpperCase(paraula)) {
      snakeCase += "_";
      snakeCase += paraula.toLowerCase();
    }
    else {
      snakeCase += paraula;
    }
  }
  return snakeCase + paraules.charAt(paraules.length);
}

function isUpperCase(char)
{
  return (char >= 'A') && (char <= 'Z');
}

console.log(`Exercici 2`);
console.log(`Abans: ${frase}`);
console.log(`Després: ${ex2(frase)}`);

console.log(`Exercici 2.2`);
console.log(`Abans: ${frase2}`);
console.log(`Després: ${ex2v2(frase2)}`);
