$(document).ready(function(){

	$('#register-popup').submit(function(e){

		

		var username = $('#username').val();
		var email = $('#email').val();
		var password = $('#password').val();

		if ( !username || !email || !password) {
			$('#reg-note').html("Please make sure all fields have been filled");

			return;
		}

		$.ajax({

			type: "POST",
			url: "http://sarah.lyne.yoobee.net.nz/ajax_yoobee/ajaxyoobee.php",
			data: {
				username: username,
				email: email,
				password: password,
			},
			success: function(serverData){
				console.log(serverData);
			},
			error: function(){

			},

		});


	})

});