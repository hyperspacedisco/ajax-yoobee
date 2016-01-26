$(document).ready(function(){

	$('#register-popup').submit(function(e){

		e.preventDefault();

		var username = $('#username').val();
		var email = $('#email').val();
		var password = $('#password').val();

		if ( !username || !email || !password) {
			$('#reg-note').html("Please make sure all fields have been filled");
			return;
		}

		
	})

});