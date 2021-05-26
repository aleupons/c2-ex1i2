const p = "paraula";

function ex1 (paraula) {
  return paraula.charAt(0).toUpperCase() + paraula.slice(1,paraula.length);
}

console.log(`Exercici 1`);
console.log(`Abans: ${p}`);
console.log(`Després: ${ex1(p)}`);
