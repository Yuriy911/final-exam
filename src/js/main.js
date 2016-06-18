$(document).ready(function(){
    $('.bxslider').bxSlider();
    function search () {
        var ser = $('input').val();

        $.ajax({
            url: 'http://api.riffsy.com/v1/search?tag='+ser+'&limit=9',
            success: function (data) {
                for (var i = 0; i < data.results.length; i++) {
                    $('#results').append('<div class="col-md-3 col-sm-3 col-xs-6 item">'+'<img src="'+ data.results[i].url +'">'+'</div>')
                }
            }
        });
    }

    $('#search').on('keyup', function (event) {
        if(event.keyCode == 13) {
            search();
        }
    });

    $('.btn').on('click', search);


    var $container = $(".masonry-container");
    $container.imagesLoaded(function () {
        $container.masonry({
            columnWidth: ".item",
            itemSelector: ".item"
        });
        $(".item").imagefill();
    });

});


