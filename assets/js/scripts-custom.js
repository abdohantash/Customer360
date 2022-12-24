"use strict";
// menu
$(document).on('click', '.super-agent-btn', function () {
    $('.super-agent').addClass('active');
    $('.overlay-menu').addClass('active');
    $('body').addClass('no-scroll');
});

$(document).on('click', '.close-menu,.overlay-menu', function () {
    $('.super-agent').removeClass('active');
    $('.overlay-menu').removeClass('active');
    $('body').removeClass('no-scroll');
});

// toggle btn
$(document).on('change', '.certificate .form-check-input', function () {
    if (this.checked){
        $(this).closest('.certificate').find('.certificate-ul input').prop("type", "text")
    }
    else {
        $(this).closest('.certificate').find('.certificate-ul input').prop("type", "password")
    }   
});

$(document).on('change', '.phone-part .form-check-input', function () {
    if (this.checked){
        $(this).closest('.phone-part').find('.phone-ul input').prop("type", "text")
    }
    else {
        $(this).closest('.phone-part').find('.phone-ul input').prop("type", "password")
    }   
});


// super agent active
$(document).on('click', '.agentbox ul li', function () {
    $('.agentbox ul li').removeClass('active');
    $(this).addClass('active');
});

// toggle light & dark mode
$(document).on('click', '.toggle-mode', function () {
    $('html').attr('data-theme',
    $('html').attr('data-theme') == 'dark' ? 'light' : 'dark')
});