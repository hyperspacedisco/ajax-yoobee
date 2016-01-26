$(document).ready(function(){

	$('#note-form').submit(function(e){


		e.preventDefault();

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
			timeout: 5000;
			});
		
	});


});