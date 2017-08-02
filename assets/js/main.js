$(document).ready(function(){ 
    
    $.ajax({
        url: 'https://api.darksky.net/forecast/abdc2567013fbe4c13e25ed3fd8867f3/-33.5762278,-70.64466470000002',
        type: 'GET',
        dataType: 'jsonp'   
    })

    .done(function(el){  
        $(".btn").click(function(){                
            $("#datos").append("<h3>El tiempo en: " + el.timezone + "</h3>");
            $("#datos").append("<img src='iconos/1498814593_sun.png'>");
            $("#datos").append("<h3>" + el.currently.temperature + " grados C°</h3>"); 
            $("#datos").append("<h2>" + el.currently.icon + "</h2>");
            $("#datos").append("<h2>" + el.currently.summary + "</h2>");
        })
    })

    .fail(function() {
        console.log("error");
    })
    .always(function() {
        console.log("complete");
    }); 
    
    $.ajax({
        url: 'http://api.flickr.com/services/rest/?method=flickr.photos.search&api_key={44b8d490c8637b86a351dfda508a4254}&tags=flower&per_page=3&format=json&nojsoncallback=1',
        type: 'GET',
        dataType: 'json'   
    })

    .done(function(el){                     
            $("#dibujo").append("<img src='" + el.photos.photo.id + "'>");         
    })

    .fail(function() {
        console.log("error");
    })
    .always(function() {
        console.log("complete");
    });
    

})

