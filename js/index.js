const palabras = [
  "café",
  "croissant",
  "tostada",
  "zumo",
  "gato",
  "perro",
  "elefante",
];

function modificaPares(arrayPalabras, callback) {
  let tempArray = [];
  arrayPalabras.forEach((palabra, indice) => {
    tempArray.push(indice % 2 !== 0 ? callback(palabra) : palabra);
  });
  return tempArray;
}

const palabrasModificadas = modificaPares(palabras, (palabra) =>
  palabra.toUpperCase()
);

console.log(palabrasModificadas);
