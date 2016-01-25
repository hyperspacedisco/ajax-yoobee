$(document).ready(function({

	$('#note-form').submit(function(e){


		e.preventdefault();

		//grab note from form
		$('#note').val();

		if ( ($.trim('#note').val()) == 0 ){

			return;
		}
		
		$.ajax({
			url: "http://sarah.lyne.yoobee.net.nz/ajax_yoobee/ajax-yoobee/api/ajaxyoobee.php",
			data: { note: $('#note').val()},
			success: function(serverData){
				console.log(serverData);

			},
			error: function(){
				alert("there was a problem");
			}
			});
		
	});


}));