$('#prev').on('click', function () {
    var last = $('.logo').last().css({opacity: '0', width: '0px'});
    last.prependTo('.showrooms');
    last.animate({opacity: '1', width: '270px'});
});
$('#next').on('click', function () {
    var first = $('.logo').first();
    first.animate({opacity: '0', width: '0px'}, function () {
        first.appendTo('.showrooms').css({opacity: '1', width: '270px'});
    });
});
/*search box*/
$( document ).ready(function() {
    $('[data-toggle=search-form]').click(function() {
        $('.search-form-wrapper').toggleClass('open');
        $('.search-form-wrapper .search').focus();
        $('html').toggleClass('search-form-open');
    });
    $('[data-toggle=search-form-close]').click(function() {
        $('.search-form-wrapper').removeClass('open');
        $('html').removeClass('search-form-open');
    });
    $('.search-form-wrapper .search').keypress(function( event ) {
        if($(this).val() == "Search") $(this).val("");
    });

    $('.search-form-wrapper').click(function(event) {
        $('.search-form-wrapper').removeClass('open');
        $('html').removeClass('search-form-open');
    });
});

/*--------------------*/
var $slider = $('.slider');

if ($slider.length) {
    var currentSlide;
    var slidesCount;
    var sliderCounter = document.createElement('div');
    sliderCounter.classList.add('slider__counter');

    var updateSliderCounter = function(slick, currentIndex) {
        currentSlide = slick.slickCurrentSlide() + 1;
        slidesCount = slick.slideCount;
        $(sliderCounter).text(currentSlide + '/' +slidesCount)
    };

    $slider.on('init', function(event, slick) {
        $slider.append(sliderCounter);
        updateSliderCounter(slick);
    });

    $slider.on('afterChange', function(event, slick, currentSlide) {
        updateSliderCounter(slick, currentSlide);
    });

    $slider.slick();
}
