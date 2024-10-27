const Atleta = require('./Atleta.js');

const AtletaApresentar = new Atleta("Cesar Abascal",
30, 80, 1.70, [10, 9.34, 8.42, 10, 7.88]);

console.log("Nome:", AtletaApresentar.obtemNomeAtleta());
console.log("Idade:", AtletaApresentar.obtemIdadeAtleta());
console.log("Peso:", AtletaApresentar.obtemPesoAtleta());
console.log("Altura:", AtletaApresentar.altura);
console.log("Notas:", AtletaApresentar.obtemNotasAtleta().join(","));
console.log("Categoria:", AtletaApresentar.obtemCategoria());
console.log("IMC:", AtletaApresentar.obtemIMC());
console.log("Média válida:", AtletaApresentar.obtemMediaValida().toFixed(8));