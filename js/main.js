$(document).ready(function(){ 


$(".btn").click(function(){
    var ciudad = $("#ciudad").val();

        $.ajax({
            url: 'https://api.darksky.net/forecast/0123456789abcdef9876543210fedcba/42.3601,-71.0589,409467600?exclude=currently,flags',
             type: 'GET',
            dataType: 'json'         
        })

        .done(function(el) {            
            $("#datos").append('<h3>ciudad</h3>'+'<br>'+'<h5>'+el.timezone+'</h5>');
            /*console.log(el);*/
        })

        .fail(function() {
            console.log("error");
        })
        .always(function() {
            console.log("complete");
        }); 

        $("#ciudad").val("");
    })
})