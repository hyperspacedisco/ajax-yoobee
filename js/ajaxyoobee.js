$(document).ready(function(){

	$('#note-form').submit(function(e){


		e.preventDefault();

		//grab note from form
		$('#note').val();

		if( $.trim($('#note').val()) == '' ){

			return;
		}
		
		$.ajax({
			url: "http://sarah.lyne.yoobee.net.nz/ajax_yoobee/ajaxyoobee.php",
			data: { note: $('#note').val() },
			success: function(serverData){
				console.log(serverData);

			},
			error: function(){
				alert("there was a problem");
			}
			});
		
	});


});