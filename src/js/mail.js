//// Contact form submit data and reset the form
/*$(document).ready(function() {
	$("#contact-form").submit(function() {
     $.ajax({
        type: "POST",
        url: "src/php/mail.php",
        data: $(this).serialize()
         
    }).done(function() {
        $(this).find("input").val("");
        $("#result").append('<div class="alert alert-success" role="alert"> Form submitted! <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>')
        $("#contact-form").trigger("reset");
    });
    return false;
    
    }); 
        
});*/

$(document).on('ready', function () {
        var $form = $('#contact-form');

        evt.preventDefault();
    
        $form.submit(function () {
            $.ajax({
                type: 'POST',
                url: "https://studiolamby.nl/src/php/mail.php",
                data: $form.serialize(),
                success: function (response) {
                    alert(response);
                }
            });

            return false;
        });
    });


