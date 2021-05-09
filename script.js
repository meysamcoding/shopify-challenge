$(document).ready(() => {
    $('#search').on('submit', (e) => {

        let searchText = $('#search-bar').val();
        e.preventDefault();
        var queryURL = "https://www.omdbapi.com/?s=" + searchText + "&apikey=ab1e78c1";
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            let movieli = response.Search.length;
            console.log(response);
            console.log(movieli);
            $('#result').empty();
            $('#list-movie').empty();

            $('#result').append("Results for " + '"' + searchText + '"');
            
            for (var i = 0; i <= response.Search.length; i++) {
                $("#list-movie").append('<li>' + response.Search[i].Title + "(" + response.Search[i].Year + ")" +
                    '<input type="button"  id="nominate" value="nominate"/> ' + '</li>');
                $("li").addClass("li-movie");

                $(".li-movie").on("click", function (e) {
                    e.preventDefault();
                    var $sel = $(this).text();
                    console.log($sel + i);
                    $("#nominate").css('background', 'yellow');                   
                        $("#list-naminated").append('<li id="li-movie">' + $(this).text() +
                            '<button  id="nominate"> nominated </button>' + '</li>');
                    


                });
            }

        });


    });



});


