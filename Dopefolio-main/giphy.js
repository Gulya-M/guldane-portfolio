$('button').on('click', function () {
    let smth = $('input').val()
    $.ajax({
        method: 'GET',
        url: `https://api.giphy.com/v1/gifs/search?api_key=i8Fi75mkV4UeP4xZbYhKUza0jNtyiqD0&q=${smth}&limit=25&offset=0&rating=g&lang=en`
    }).then(function (response) {

        for (i = 0; i < response.data.length; i++) {
            console.log(response.data[i].images.fixed_height.url)
            let img = document.querySelector('img')
            img.setAttribute('src', response.data[i].images.fixed_height.url)
            $('.gifs').append(img)

        }
    })

})
$('.cat').on('click', function () {

    $.ajax({
        method: 'GET',
        url: `https://api.giphy.com/v1/gifs/search?api_key=i8Fi75mkV4UeP4xZbYhKUza0jNtyiqD0&q=cat&limit=25&offset=0&rating=g&lang=en`
    }).then(function (response) {

        for (i = 0; i < response.data.length; i++) {
            console.log(response.data[i].images.fixed_height.url)
            let img = document.querySelector('img')
            img.setAttribute('src', response.data[i].images.fixed_height.url)
            $('.gifs').append(img)
        }
    })

})
$('.happy').on('click', function () {

    $.ajax({
        method: 'GET',
        url: `https://api.giphy.com/v1/gifs/search?api_key=i8Fi75mkV4UeP4xZbYhKUza0jNtyiqD0&q=happyt&limit=25&offset=0&rating=g&lang=en`
    }).then(function (response) {

        for (i = 0; i < response.data.length; i++) {
            console.log(response.data[i].images.fixed_height.url)
            let img = document.querySelector('img')
            img.setAttribute('src', response.data[i].images.fixed_height.url)
            $('.gifs').append(img)
        }
    })

})
$('.motivated').on('click', function () {

    $.ajax({
        method: 'GET',
        url: `https://api.giphy.com/v1/gifs/search?api_key=i8Fi75mkV4UeP4xZbYhKUza0jNtyiqD0&q=motivated&limit=25&offset=0&rating=g&lang=en`
    }).then(function (response) {

        for (i = 0; i < response.data.length; i++) {
            console.log(response.data[i].images.fixed_height.url)
            let img = document.querySelector('img')
            img.setAttribute('src', response.data[i].images.fixed_height.url)
            $('.gifs').append(img)
        }
    })

})
$('.developer').on('click', function () {

    $.ajax({
        method: 'GET',
        url: `https://api.giphy.com/v1/gifs/search?api_key=i8Fi75mkV4UeP4xZbYhKUza0jNtyiqD0&q=developer&limit=25&offset=0&rating=g&lang=en`
    }).then(function (response) {

        for (i = 0; i < response.data.length; i++) {
            console.log(response.data[i].images.fixed_height.url)
            let img = document.querySelector('img')
            img.setAttribute('src', response.data[i].images.fixed_height.url)
            $('.gifs').append(img)
        }
    })

})
$('.hello').on('click', function () {

    $.ajax({
        method: 'GET',
        url: `https://api.giphy.com/v1/gifs/search?api_key=i8Fi75mkV4UeP4xZbYhKUza0jNtyiqD0&q=hello&limit=25&offset=0&rating=g&lang=en`
    }).then(function (response) {

        for (i = 0; i < response.data.length; i++) {
            console.log(response.data[i].images.fixed_height.url)
            let img = document.querySelector('img')
            img.setAttribute('src', response.data[i].images.fixed_height.url)
            $('.gifs').append(img)
        }
    })

})
$('.thanks').on('click', function () {

    $.ajax({
        method: 'GET',
        url: `https://api.giphy.com/v1/gifs/search?api_key=i8Fi75mkV4UeP4xZbYhKUza0jNtyiqD0&q=thanks&limit=25&offset=0&rating=g&lang=en`
    }).then(function (response) {

        for (i = 0; i < response.data.length; i++) {
            console.log(response.data[i].images.fixed_height.url)
            let img = document.querySelector('img')
            img.setAttribute('src', response.data[i].images.fixed_height.url)
            $('.gifs').append(img)
        }
    })

})
$('.haha').on('click', function () {

    $.ajax({
        method: 'GET',
        url: `https://api.giphy.com/v1/gifs/search?api_key=i8Fi75mkV4UeP4xZbYhKUza0jNtyiqD0&q=haha&limit=25&offset=0&rating=g&lang=en`
    }).then(function (response) {

        for (i = 0; i < response.data.length; i++) {
            console.log(response.data[i].images.fixed_height.url)
            let img = document.querySelector('img')
            img.setAttribute('src', response.data[i].images.fixed_height.url)
            $('.gifs').append(img)
        }
    })

})