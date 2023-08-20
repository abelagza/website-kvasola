$("a").on('click', function(event) {
    if (this.hash !== "") {
        event.preventDefault();

        var hash = this.hash;

        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800, function(){
            window.location.hash = hash;
        });
    }
});

$(document).ready(function() {
    $("#home-btn").on('click', function(event) {
        event.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 'slow');
    });
});
