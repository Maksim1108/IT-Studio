$('.header__burger').on('click', function() {
    $(this).toggleClass('active');
    $('.header__burger-line').toggleClass('active');
    $('.header__menu').toggleClass('active');
    $('html').toggleClass('lock');
})