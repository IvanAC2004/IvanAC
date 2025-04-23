// r:1

const esPar = numero => numero % 2 === 0;   
console.log(esPar(4)); 
console.log(esPar(5)); 


//r:2

function procesarArreglo(arreglo, callback) {
    const resultado = [];
    for (let num of arreglo) resultado.push(callback(num));
    return resultado;
  }
  
  const duplicar = num => num * 2;
  
  console.log(procesarArreglo([100, 2, 13], duplicar));
  
//r:3

let contador = 5;
const intervalo = setInterval(() => {
  console.log(contador);
  contador--;
  if (contador < 0) {
    clearInterval(intervalo);
    console.log("CATACORAAAAAAAAAAAAA");
    setTimeout(() => {
      console.log("HELLO KITTY = HOLA DEMONIO 😨😧🫢");
    }, 1000);
  }
}, 1000);


//r:4

const libros = [
    { id: 1, titulo: "EVO MORALES AYMA_LA PELICULA 😎😎", autor: "Gabriel García Márquez", año: 1967 },
    { id: 2, titulo: "BAJA ZUÑIGA 😈", autor: "Isabel Allende", año: 1982 },
    { id: 3, titulo: "Rayuela", autor: "Julio Cortázar", año: 1963 },
    { id: 4, titulo: "El código N0 COMPILA 😭🥶🤧", autor: "Dan Brown", año: 2005 }
  ];
  
  for (let libro of libros) {
    if (libro.id === 3) {
      libro.titulo = "Final del juego";
    }
  }

  //r:5

  function mostrarTitulos(libros) {
    for (let libro of libros) {
      console.log(libro.titulo);
    }
  }
  
  mostrarTitulos(libros);
  