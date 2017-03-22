function validateForm(){
	/* Escribe tú código aquí */
  var nombre = document.getElementById('name');
  var apellido = document.getElementById('lastname');
  var email = document.getElementById('input-email');
  var password = document.getElementById('input-password');
  var selecciona = document.getElementById('selecciona');
  var bici = selecciona.options[selecciona.selectedIndex].value;
  var twitter = document.getElementById('input-social');

// Para validaciones de letras y cosas del nombre...
  var soloLetras = /^([a-zñá-ú+\s])*$/;
  var mayus = /^[A-Z]{1}/;

// Desactivo funciones y dejo condicionales
// porque no corren con las funciones!!!!! T_T

// Estos son los obligatorios. Sin buscar el botón.
    //function obligados(){
      if(nombre.value.length == 0){
        alert("Ingrese un nombre");}
      else if(apellido.value.length == 0){
        alert("Ingrese un apellido");}
      else if(email.value.length == 0){
        alert("Ingrese un correo válido");}
      else if(password.value.length < 6){
        alert("Ingrese una contraseña válida");}
      else if(bici == "0"){
        alert("Seleccione un tipo de bicicleta");}
    //}
    //obligados();

    //function adicionales(){
      if(soloLetras.test(nombre.value) || soloLetras.test(apellido.value)){
        alert("Ingrese solo letras en Nombre y/o Apellido");}
      else if(nombre.value.search(mayus)){
        alert("La primera letra de tu nombre debe ser mayúscula");}
      else if(apellido.value.search(mayus)){
        alert("La primera letra de tu apellido debe ser mayúscula");}
      else if(password.value == "password" || password.value == "123456" || password.value =="987654"){
        alert("La contaseña no puede ser "+ password.value);
      }
    //}
    //adicionales();

    // Con esto ya no valida el resto...
    /*document.getElementById('envia').addEventListener('click',function(){
      alert("Gracias por participar");
    });*/

}
