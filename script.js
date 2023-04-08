function validar() {
    // Obtenemos el valor del input
    //Variables del primer formulario
    var nombre = document.getElementById("nombre").value;
    var telefono = document.getElementById("telefono").value;
    var asunto = document.getElementById("asunto").value;
    var mensaje = document.getElementById("mensaje").value;
   
  
    // Validacion del nombre
    if (nombre == "") {                         // "" es igual a vacio
      alert("Por favor ingrese su nombre");
      return false; // Detenemos el envío del formulario
    }
    
    
    if(nombre.length > 20){                             //length evalua la longitud del caracter 
        alert("El nombre debe menos de 20 caracteres");
        return false;
    }
    if(nombre.length < 3){
        alert("El nombre debe tener mas de 3 caracteres");
        return false;
    }
    

    //validacion del telefono

    if(telefono  == ""){
        alert("debe ingresar un numero de telefono");
        return false;
    }
    var telefonoRegex = /^\d{13}$/;     // /^\d{13}$/  la 'd' signica cualquier decimal. el '$' indica que el patrón debe coincidir con el final de la cadena
    if(!telefonoRegex.test(telefono)){  // ^ indica que el patrón debe coincidir con el inicio de la cadena, el símbolo
        alert("el telefono debe tener 13 digitos");
        return false;
    }

    // Validaciom de Asunto

    if(asunto.length < 5){
        alert("Asunto debe tener entre mas de 5 caracteres");
        return false;
    }
    if(asunto.length > 10){
        alert("Asunto no debe ser mayor a 10 caracteres");
        return false;
    }
    if(mensaje.length < 5){
        alert("Mensaje debe tener entre mas de 5 caracteres");
        return false;
    }
    if(mensaje.length > 128){
        alert("Mensaje no debe ser mayor a 128 caracteres");
        return false;
    }  

    // Si todo está correcto, permitimos el envío del formulario
    return true;
  }

  //cree otra funcion para no usar la anterior porque me facilitaba al comprobar los datos
  function validarDatos(){

     //variables del segundo formulario
     var direccion = document.getElementById("direccion").value;
     var cantidad = document.getElementById("cantidad").value;
     var superficie = document.getElementById("superficie").value;
     var precio = document.getElementById("precio").value;

    //validacion de los datos del segundo formulario
    //validacion de la direccion 

    if(direccion.length < 5){
        alert("Direccion debe tener mas de 5 caracteres");
        return false;
    }
    if(direccion.length > 50){
        alert("Direccion no debe tener mas de 50 caracteres");
        return false;
    }
    if(cantidad < 1){
        alert("Dormitorio debe ser mayor a cero");
        return false;
    }
    if(cantidad > 9){
        alert("Dormitorio no debe ser de dos cifras");
        return false;
    }
    if(superficie < 1){
        alert("Superficie debe ser mayor a cero");
        return false;
    }
    if(superficie > 999){
        alert("Superficie no debe ser de mas de 3 cifras");
        return false;
    }
    if(precio < 1){
        alert("Precio debe ser mayor a cero");
        return false;
    }
    if(precio > 99999){
        alert("Precio no debe ser de mas de 6 cifras");
        return false;
    }


    // Si todo está correcto, permitimos el envío del formulario
    return true;
  }