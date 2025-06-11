$(document).ready(function(){

    const owl = $('.owl-carousel');
    const prev = $('.slider-button.prev');
    const next = $('.slider-button.next');

    owl.owlCarousel({
        loop:true,
        items: 1,
        smartSpeed: 600,
        margin:5,
    });

    prev.on('click', (e) => {
        e.preventDefault();

        owl.trigger('prev.owl.carousel');

        e.stopPropagation();
    });
    next.on('click', (e) => {
        e.preventDefault();

        owl.trigger('next.owl.carousel');

        e.stopPropagation();
    });

    //     Gallery
    Fancybox.bind("[data-fancybox]", {
        Thumbs: {
            type: "modern",
        },
        Toolbar: {
            display: {
                left: ["infobar"],
                middle: ["zoomIn", "zoomOut"],
                right: [ "slideshow", "thumbs","close"],
            },
        },
    });

});