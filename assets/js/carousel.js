// Testimonial Carousel
$('.testimonial').owlCarousel({
    loop: true,
    margin: 5,
    nav: false,
    responsive: {
        0: { items: 1 },
        1300: { items: 1 }
    }
});


// Services Carousel
$('.company-services').owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    responsive: {
        0: { items: 1 },
        576: { items: 2 },
        768: { items: 3 },
        1300: { items: 3 }
    }
})

// OUR WORK Carousel
$('.our-work').owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    responsive: {
        0: { items: 1 },
        576: { items: 2 },
        1600: { items: 3 }
    }
});