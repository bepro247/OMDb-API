// main document ready function to check if dom is loaded fully or not
let data;
let pos;
let stars;
let rockh=[];
let movieToken=[];
let i;

let value;
$(document).ready(() => {
    var wHeight = window.innerHeight;
    //search bar middle alignment
    $('#mk-fullscreen-searchform').css('top', wHeight / 2);
    //reform search bar
    jQuery(window).resize(function() {
      wHeight = window.innerHeight;
      $('#mk-fullscreen-searchform').css('top', wHeight / 2);
    });
    // Search
    $('#search-button').click(function() {
      console.log("Open Search, Search Centered");
      $("div.mk-fullscreen-search-overlay").addClass("mk-fullscreen-search-overlay-show");
    });
    $("a.mk-fullscreen-close").click(function() {
      console.log("Closed Search");
      $("div.mk-fullscreen-search-overlay").removeClass("mk-fullscreen-search-overlay-show");
    });

    $.ajax({
        type: 'GET',
        dataType: 'json',
        async: true,
        url: 'http://www.omdbapi.com/?i=tt3896198&apikey=6799549e',


        success: (response) => {

           

            console.log(response);
            data=response;
            rockh=data.Title;
            movieToken=value;
            $('#oneT').append(data.Title);
            
            
            
            
            
           


        }, error: (err) => {

            console.log(err.responseJSON.error.message);
            alert(err.responseJSON.error.message)

        }
    });

    $('.btn').click(function(){
		$('#myModal').modal({
            backdrop: 'static',
            
		});
	}); 
   

});






    
$("#callme").on("click", function(){
   $("#callme").removeClass('line-1');
   
    $.ajax({
        type: 'GET',
        dataType: 'json',
        async: true,
        url: 'http://www.omdbapi.com/?i=tt3896198&apikey=6799549e',


        success: (response) => {

           

            console.log(response);
            data=response;
            pos=response.poster;
         
            $('#movietitle').append(data.Title);
           $('#poster').attr("src",data.Poster);
             $('#year').append(data.Year);
            $('#date').append(data.Released);
            $('#rate').append(data.imdbRating);
            $('#prod').append(data.Production);
            $('#collect').append(data.BoxOffice); 
            $('#direct').append(data.Director);
            $('#star').append(data.Actors);
            $('#genr').append(data.Genre);
            $('#lang').append(data.Language);
            $('#plot').append(data.Plot);
            $('#run').append(data.Runtime);
            $('#county').append(data.Country);
            $('#award').append(data.Awards);
            $('#imdbid').append(data.imdbID);
            $('#rated').append(data.Rated);
            $('#web').append(data.Website);
            $('#vote').append(data.imdbVotes);
            $('#source').append(data.Ratings[0].Source);
            $('#source1').append(data.Ratings[1].Source);
            $('#source2').append(data.Ratings[2].Source);
            $('#value').append(data.Ratings[0].Value);
            $('#value1').append(data.Ratings[1].Value);
            $('#value2').append(data.Ratings[2].Value);
            
            
           
            
            
            
           


        }, error: (err) => {

            console.log(err.responseJSON.error.message);
            alert(err.responseJSON.error.message)

        }

    });// end ajax call 


    
   
  });



  $('#close').on("click",function(){
   
    

    document.location.reload();
  })

$('#more').on("click", function(){

    var input = $(this).find('.qty1');
    input.val(parseInt(input.val())+ 1);
    
})






    

function searchToggle(obj, evt){
    var container = $(obj).closest('.search-wrapper');

    if(!container.hasClass('active')){
            container.addClass('active');
            evt.preventDefault();
    }
    else if(container.hasClass('active') && $(obj).closest('.input-holder').length == 0){
            container.removeClass('active');
            // clear input
            container.find('.search-input').val('');
            // clear and hide result container when we press close
            container.find('.result-container').fadeOut(100, function(){$(this).empty();});
    }
}

function submitFn(obj, evt){
    value = $(obj).find('.search-input').val().trim();

    _html = "Searching for: ";
    if(!value.length){
        _html = "Ehem, I can't search nothing";
    }
    else{
      
        for(i in value)
                    { 
                        if(value[i] == rockh[i]){
                            document.getElementById("callme").click();
                            
                            break;
                        }
                else{
                    _html = "Ehem, I can't search nothing";
                    
                     document.location.reload();
                }

    }
}

    $(obj).find('.result-container').html('<span>' + _html + '</span>');
    $(obj).find('.result-container').fadeIn(100);

    evt.preventDefault();
}



