$(document).ready(function(){

    const owl = $('.owl-carousel');
    const prev = $('.slider-button.prev');
    const next = $('.slider-button.next');
    const statistics = document.querySelector('.statistics');
    const numbers = $('.number');
    const header = $('.header');
    const form = document.querySelector('#form');
    const titles = document.querySelectorAll('.title');

    let show = true;

    owl.owlCarousel({
        loop:true,
        items: 1,
        smartSpeed: 600,
        margin:4,
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
    // Scrolling
    $(window).on('scroll', (e) => {

        // Header
        if (window.scrollY > 0 && !header.hasClass('is-active')) {
            header.addClass('is-active');
        }
        else if (window.scrollY === 0 && header.hasClass('is-active')) {
            header.removeClass('is-active');
        }
        // Spin numbers
        if (isPartiallyVisible(statistics) && show){

            show = false;

            numbers.css('opacity', '1');
            numbers.spincrement({
                thousandSeparator: "",
                duration: 2000
            });
        }

        if (!isPartiallyVisible(statistics)) {
            numbers.css('opacity', '0');
            show = true;
        }
        // Animation
        for (let i = 0; i < titles.length; i++) {
            const title = titles[i];

            if (isPartiallyVisible(title) && !title.classList.contains('active')) {
                title.classList.add('active');
            }
            else if (title.classList.contains('active') && !isPartiallyVisible(title)) {
                title.classList.remove('active');
            }
        }
    });
    // Form
    validateForm(form);
});