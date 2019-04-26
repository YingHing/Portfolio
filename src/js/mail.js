//// Contact form submit data and reset the form
//$(document).ready(function() {
//	$("#contact-form").submit(function() {
//     $.ajax({
//        type: "POST",
//        url: "https://herrkoch.nl/src/php/mail.php",
//        data: $(this).serialize()
//         
//    }).done(function(msg) {
//         console.log(msg);
//        $(this).find("input").val("");
//        $("#result").append('<div class="alert alert-success" role="alert"> Form submitted! <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>')
//        $("#contact-form").trigger("reset");
//    });
//    return false;
//    
//    }); 
//        
//});

$(document).ready(function() {
	$("#contact").submit(function() {
		$.ajax({
			type: "POST",
			url: "src/php/mail.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			alert("Thank you!");
			$("#contact").trigger("reset");
		});
		return false;
	});
});
