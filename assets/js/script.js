/**
 * @author
 * Banjo Mofesola Paul
 * Chief Developer, Planet NEST
 * mofesolapaul@planetnest.org
 * Monday, 20th March, 2017
 */

$(function() {

    var swags;
    var maleSwags = [], femaleSwags = [];
    var mode;

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

        $(this).addClass('selected');
        setTimeout(showRaba, 500);
    });

    // show raba
    var showRaba = function() {
        $('.raba').addClass('shown').addClass('burlywood');
        $('.lid').remove();
        $('.intro').css('display', 'block');
    }
});
