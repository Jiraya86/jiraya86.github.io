function validateEmail(){
    var emailField = document.getElementById('email');  

    var validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    if( validEmail.test(emailField.value) ){  

        alert(' el correo es valido continue con el envio del formulario');
		return true;

	}else{
		alert(' el correo no es valido omita el envio de formulario');
		return false;
	}
}   








