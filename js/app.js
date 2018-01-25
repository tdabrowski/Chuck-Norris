$(function(){

    let $title = $('.title');
    let $url = 'http://api.icndb.com/jokes/random';
    function responseHandler(response){
        let $joke = $('<h2 class="joke">'+response.value.joke+'</h2>');
        $title.after($joke);
    }
    
    $.ajax({
    	url:$url,
    	type:'GET',
    }).done(function(response){
        responseHandler(response);
    }).fail(function(error){
    	console.log('Connection error - status: ' + error.statusText);
    });


});
