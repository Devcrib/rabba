/**
 * @author
 * Banjo Mofesola Paul
 * Chief Developer, Planet NEST
 * mofesolapaul@planetnest.org
 * Monday, 20th March, 2017
 */

$(function() {

    var swags, mode;
    var maleSwags = [], femaleSwags = [], leSwags = [];

    $.getJSON('swags.json', function(data) {
        swags = data;
        categorizeSwags();
    });

    var categorizeSwags = function() {
        // categorize the swags based on gender
        swags.map(function(swag) {
            if (swag.gender == 1) femaleSwags.push(swag);
            else if (swag.gender == 2) maleSwags.push(swag);
            else {
                femaleSwags.push(swag);
                maleSwags.push(swag);
            }
        });

        setTimeout(swagsReady, 2000);
    };

    var swagsReady = function() {
        $('.lid').addClass('swags-loaded');
    };

    // on mode-switcher buttons click
    $('.mode-switcher').click(function(e) {
        e.preventDefault();
        mode = $(this).data('mode');
        leSwags = mode == 1? femaleSwags:maleSwags;

        $(this).addClass('selected');
        setTimeout(showRaba, 500);
    });

    // show raba
    var showRaba = function() {
        $('.raba').addClass('shown');
        $('.lid').remove();
        $('.intro').css('display', 'block');

        // start ellipsis animation
        ellipsisLoading();

        // start raba pulsing
        pulseRabaBg();

        // show mode icon
        $('#mode-' + mode).addClass('make-visible');
    }

    // ellipsis animation sequence
    var ell = 0;
    var ellipsisLoading = function() {
        if (!$('.intro').is(':visible')) setTimeout(ellipsisLoading, 5000);

        ell = ell < 3? ell+1:0;
        var pell = ell == 0? 3:ell-1;

        $('.ellip').removeClass( 'd' + pell );
        $('.ellip').addClass( 'd' + ell );

        setTimeout(ellipsisLoading, 1000);
    }

    // raba bg pulsing
    var bg_i = 0;
    var pulseRabaBg = function() {
        bg_i = bg_i < 5? bg_i+1:1;
        var rem_bg = bg_i == 1? 5:bg_i-1;

        $('.raba').addClass('bg-' + (bg_i));
        $('.raba').removeClass('bg-' + rem_bg);

        setTimeout(pulseRabaBg, 5000);
    }

    // circle clicks
    var clicked_circles_counter = 0;
    var currencies = ['&#8358;', '$', '&pound;', '&yen;', '&#8355;', '&curren;', '&cent;', '&#x20B9;', '&euro;', '&#8359;', '&#8373;', '&#8369;', '&#8365;', '&#8362;', '&#8363;', '&#8356;'];
    $('.circle').click(function(e) {
        e.preventDefault();
        if ( $(this).html() != '' ) {
            $('#raba-instruction').text("click on the other circles");
            return;
        }

        var i = Math.floor(Math.random() * currencies.length);
        $(this).html( currencies[i] );
        $('#raba-instruction').text("click on all circles");

        clicked_circles_counter++;
        showMeTheMoney();
    });

    // show me the money
    var showMeTheMoney = function() {
        if (clicked_circles_counter != 3) return;

        $('.intro').css('display', 'none');

        var i = Math.floor(Math.random() * leSwags.length);
        $('#swag').text( leSwags[i].swag );
        $('#ta-lo-so').text( leSwags[i].author );
        $('.money-is-relevant').css('display', 'block');
    }

    // game reset
    $('#game-reset').click(function(e) {
        e.preventDefault();

        clicked_circles_counter = 0;
        $('.circle').html('');

        $('.money-is-relevant').css('display', 'none');
        $('.intro').css('display', 'block');
    });

    // mode change
    $('#mode-1, #mode-2').click(function(e) {
        location.reload();
    });
});
