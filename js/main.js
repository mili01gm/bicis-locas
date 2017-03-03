function validateForm(){
	/* Escribe tú código aquí */
  var nombre = document.getElementById('name');
  var apellido = document.getElementById('lastname');
  var email = document.getElementById('input-email');
  var password = document.getElementById('input-password');
  var bici = document.getElementById('selecciona');
  var twitter = document.getElementById('input-social');
  var button = document.getElementsById('boton');

  function obligatorio(param){
      is(param == undefined){
        return "<span>"+"Campo obligatorio"+"</span>";
      } else { continue;}
  }

  function nameLast(param){


  }

  button.addEventListener('click', function(){
    email = validateForm(email.value);
    password = validateForm(password.value);
    bici = validateForm(bici.value);
    twitter = validateForm(twitter.value);
  })

}
