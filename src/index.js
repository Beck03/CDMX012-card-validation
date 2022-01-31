import validator from './validator.js';


const miboton = document.getElementById("miboton");

const inpuntNumero = document.getElementById ("inputNumero");

const valida = document.getElementById("validacion");


miboton.addEventListener("click", function (){
  let oculta = validator.maskify(inpuntNumero.value);
  let residuo1 = validator.isValid(inpuntNumero.value);
  

  if (residuo1 == true){
        valida.innerHTML="¡Tu tareta fue registrada con éxito!"
      }                                 
      else {
        valida.innerHTML="¡Ups! Verifica tu numero de tarjeta"

      }

  console.log(oculta);
});




/*for (let i = 0; i < inpuntNumero.length - 4; i++)
{
    return "*" (inpuntNumero[i]);
}*/



/*codigo para que no puedan meter un caracter distinto a un numero*/

  var tarjeta = document.getElementById("inputNumero")

tarjeta.addEventListener("keyup" , (e) => {
    var numerodetarjetae = e.target.value;

    tarjeta.value = numerodetarjetae
                                      //elimina espacios en blanco /s es una expresion regular
    .replace(/\s/g, "")               //se considera tipo de validacion?
 /*   .replace(/\D/g, "");        */      //eliminar las letras \D significa que va a buscar todos los 
                                    // digitos que sean letras y los va a reemplazar (.replace) 
                                    //por lo que señale dentro de las comillas en este caso nada */
                                       //se considera tipo de validacion?
})


