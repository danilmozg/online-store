$(document).ready(function () {

    $('#owl-first').owlCarousel({
        items: 1,
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        smartSpeed: 450,
        navText: ['&#8249;', '&#8250;'],
        responsive: {
            0: { items: 1 },
            768: { items: 1 },
            1200: { items: 1 }
        }
    });

    $('#owl-second').owlCarousel({
        items: 1,
        loop: true,
        margin: 10,
        nav: false,
        dots: true,
        autoplay: true,
        autoplayTimeout: 6000,
        autoplayHoverPause: true,
        smartSpeed: 450
    });

    $('#owl_products').owlCarousel({
        items: 5,
        loop: false,
        margin: 10,
        nav: true,
        dots: false,
        autoplay: false,
        smartSpeed: 400,
        navText: ['&#8249;', '&#8250;'],
        responsive: {
            0: { items: 1 },
            480: { items: 2 },
            768: { items: 3 },
            992: { items: 4 },
            1200: { items: 5 }
        }
    });

    $(document).on('click', '.bcounter_plus', function () {
    const $counter = $(this).closest('.bcounter');
    const $input = $counter.find('.bcounter_holder');
    const max = +$input.attr('max') || 999;
    const value = +$input.val();

    if (value < max) {
        $input.val(value + 1);
    }
    updateMinusState($counter);
    });

    $(document).on('click', '.bcounter_minus', function () {
        const $counter = $(this).closest('.bcounter');
        const $input = $counter.find('.bcounter_holder');
        const min = +$input.attr('min') || 1;
        const value = +$input.val();

        if (value > min) {
            $input.val(value - 1);
        }
        updateMinusState($counter);
    });

    // Ручной ввод
    $(document).on('input', '.bcounter_holder', function () {
        const $input = $(this);
        const min = +$input.attr('min') || 1;
        const max = +$input.attr('max') || 999;
        let value = parseInt($input.val()) || min;

        if (value < min) value = min;
        if (value > max) value = max;

        $input.val(value);
        updateMinusState($input.closest('.bcounter'));
    });

    function updateMinusState($counter) {
        const $input = $counter.find('.bcounter_holder');
        const min = +$input.attr('min') || 1;
        const value = +$input.val();
        $counter.find('.bcounter_minus').prop('disabled', value <= min);
    };
});