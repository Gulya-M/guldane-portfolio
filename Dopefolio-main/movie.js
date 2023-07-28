$('button').on('click',function()
{
    var smth=$('input').val()
    $.ajax({
        method:'GET',
        url:'http://www.omdbapi.com/?apikey=80620f2b&t='+smth
    }).then(function(response){
        $('.movie-title').text(response.Title)
        $('.movie-year').text("Year:"+response.Year)
        $('.movie-time').text("Runtime:"+response.Runtime)
        $('.movie-rating').text("imdbRating: "+response.imdbRating)

        $('.movie-genre').text("Genre:"+response.Genre)
        $('.movie-country').text("Country:"+response.Country)
        $('.movie-awards').text("Awards:"+response.Awards)


        $('.movie-plot').text("Plot:"+response.Plot)
         let img=document.querySelector('img')
         img.setAttribute('src',response.Poster)

    console.log(response)
    }).catch(function(err){
        console.log(err)
    })
   

}
)
