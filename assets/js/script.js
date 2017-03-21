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

    $.getJSON('swags.json', function(data) {
        swags = data;
        swagsReady();
    });

    var swagsReady = function() {
        // categorize the swags based on gender
        swags.map(function(swag) {
            if (swag.gender == 1) femaleSwags.push(swag);
            else if (swag.gender == 2) maleSwags.push(swag);
            else {
                femaleSwags.push(swag);
                maleSwags.push(swag);
            }
        });
    };
});
