const validator = { 
                                                      //numero de tarjeta prueba 5470467019911602
isValid (inputNumero){
 
  let   reverseCard = inputNumero.split("").reverse(); //.split("")me ayuda a convertir un objeto de tipo string a un array 
 
 
  //Hasta aqui llega el codigo para revertir el numero de tarjeta
  
 
 let paresX2 =  []; // En esta variable se va a guardar uno de los datos resultados del bucle  
 
 let inpares = []; // es por eso que esta vacia solo con un array para que este dato se guarde como tal
  //Bucle: me ayuda a repetir cierta accion el numero de ves que le indique de esta manera evito hacer tantas variables ja
 

for (let i = 0; i < reverseCard.length; i++){   //cuando declaro .length significa que va a repetir el bucle dependiendo
                                                  //el tamaño del dato origen.
    if ( i % 2 == 0){
      inpares += parseInt(reverseCard [i] )     //.push significa que va a guardar el resultado obtenido en la variable declarada
    }else {                                   // ejemplo: variable.push(y la variable origen de donde se va obtener el valor)

      paresX2 += parseInt(reverseCard [i] * 2)
           
    }
  }
    let numeros = 0; //a las variables se les declara un valor por default para declara el tipo de valor

    for (let i = 0; i < paresX2.length; i++){  
      numeros +=parseInt (paresX2[i]);
    
    }

  let numeros2 = 0;
     
    for (let i = 0; i < inpares.length; i++){
      numeros2 +=parseInt (inpares[i]);
    }
    let resultado = numeros + numeros2;
    let residuo = resultado % 10;
if (residuo === 0){
  residuo = true
}else {
  residuo = false
}

    return residuo;

     

   

},
 
maskify (inputNumero){

  const arry = [];
  const limite = inputNumero.length - 4;
  for (let i= 0; i<inputNumero.length; i++){
    if(i<limite){
    arry.push("#");
    }
    else{
      arry.push(inputNumero[i]);
    }
  } 
  
  
  return arry.join("");

}
}


export default validator;

/*console.log("(par por 2) " + paresX2);
console.log ("inpar " +  inpares);
console.log("prueba " + numeros);
console.log(numeros2);
console.log("resutado " + resultado);*/


  
