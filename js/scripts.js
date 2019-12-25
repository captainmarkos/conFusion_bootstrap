$(document).ready(function() {
    /* $('[data-toggle="tooltip"]').tooltip(); */  // => turn on tooltips

    $('#my-carousel').carousel({ interval: 1000 });

    $('#carousel-button').click(function() {
        var span = $('#carousel-button').children('span');

        if(span.hasClass('fa-pause')) {
            $('#my-carousel').carousel('pause');
            span.removeClass('fa-pause');
            span.addClass('fa-play');
        } else {
            $('#my-carousel').carousel('cycle');
            span.removeClass('fa-play');
            span.addClass('fa-pause');
        }
    });

    $('#login-modal-button').on('click', function() {
        $('#login-modal').modal('toggle');
    });

    $('#reserve-table-button').on('click', function() {
        $('#reservation-modal').modal('toggle');
    });
});