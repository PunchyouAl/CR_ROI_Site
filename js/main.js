//NUMBERS

const totalRevenue = 193740; // Enter as a number with no decimals or commas
const roiOnProfit = 44; // percentage
const averageGrowth = 24; // percentage
const increaseLastQuarter = 61; // percentage
const averageRevenuePerUser = 983; 
const activeUsers = 60;
const averageProgrammeUsers = 36;
const averageMonthlyRevenue = 189085;

//DOM Elements

const revenueNumber = document.getElementById('revenueNumber');
const analysisStatOne = document.getElementById('roiProfitStat');
const analysisStatTwo = document.getElementById('averageGrowthStat');
const analysisStatThree = document.getElementById('increaseLastStat');
const analysisStatFour = document.getElementById('activeUsersStat');


// Apply NUMBERS to ELEMENTS

revenueNumber.setAttribute('data-count', totalRevenue);
revenuePerUserStat.textContent = "£" + averageRevenuePerUser;


//settings

/*

let last_known_scroll_position = 0;
let ticking = false;

window.addEventListener('scroll', function (e) {

    last_known_scroll_position = window.scrollY;

    if (!ticking) {
        window.requestAnimationFrame(function () {
            openLaptop(last_known_scroll_position);
            ticking = false;
        });

        ticking = true;
    }
});


function openLaptop(scroll_pos) {

    let height = window.innerHeight;

    if (scroll_pos > height * 0.25) {
        $('#laptopOuter').removeClass('closed');
    }
}

function activateStat(scroll_pos) {

    let height = window.innerHeight;

    if (scroll_pos > height * 0.25) {
        $('#laptopOuter').removeClass('closed');
    }
}

*/



function applyTotalRevenue(totalRev) {

    // Create our number formatter.
    var formatter = new Intl.NumberFormat('en-UK', {
        style: 'currency',
        currency: 'GBP'
    });

    var formatted = formatter.format(totalRev)

    formatted = formatted.slice(0, -3);

    console.log(formatted);

    var html = "";
    var digits = ("" + formatted).split("");
    for (var i = 0; i < digits.length; i++) {
        html += "<span>" + digits[i] + "</span>";
    }

    console.log(digits);
    revenueNumber.innerHTML = html;
};



function applyStatAnim(elem, num) {

    $(elem).find('.statBitter').append(num + "<span class='percent'>%</span>");

    var circleFill = num * 6,
        radius = $(elem).find('circle').attr('r'),
        percent = num,
        circum = 2 * radius * Math.PI,
        draw = '' + percent * circum / 100 + 'px 999px';

    //    console.log("radius = " + radius + ", percent = " + percent + ", circum = " + circum + ", draw = " + draw)

    //    $(elem).find('circle').css("stroke-dasharray", draw);

    $(elem).find('circle').attr("dasharray", draw);

    $(elem).find('.statBitter').delay(2000).addClass('bounce-in-top');

};

applyTotalRevenue(totalRevenue);
applyStatAnim(analysisStatOne, roiOnProfit);
applyStatAnim(analysisStatTwo, averageGrowth);
applyStatAnim(analysisStatThree, increaseLastQuarter);
applyStatAnim(analysisStatFour, activeUsers);

// SCROLLMAGIC

$(function () {

    // Init
    var scrollMagicController = new ScrollMagic.Controller();

    // Animations
    var laptopAnim = TweenMax.to('#laptopOuter img:first-child', 0.5, {
        transform: 'rotate3d(1, 0, 0, "-60deg")'
    });

    var revenueAnim = TweenMax.staggerFromTo('#revenueNumber span', 0.5, {
        top: 100,
        opacity: 0
    }, {
        top: 0,
        opacity: 1,
        ease: Back.easeOut
    }, 0.15);

    var statsTimeline = new TimelineMax();

    var roiProfitAnim = TweenMax.to('#roiProfitStat circle', 1.5, {
        strokeDasharray: $('#roiProfitStat circle').attr('dasharray')
    });

    var averageGrowthAnim = TweenMax.to('#averageGrowthStat circle', 1.5, {
        strokeDasharray: $('#averageGrowthStat circle').attr('dasharray')
    });

    var increaseLastAnim = TweenMax.to('#increaseLastStat circle', 1.5, {
        strokeDasharray: $('#increaseLastStat circle').attr('dasharray')
    });
    
    statsTimeline.add(roiProfitAnim).add(averageGrowthAnim).add(increaseLastAnim)

    var activeUsersAnim = TweenMax.to('#activeUsersStat circle', 1.5, {
        strokeDasharray: $('#activeUsersStat circle').attr('dasharray')
    });

    

    // Scenes
    var laptop = new ScrollMagic.Scene({
            triggerElement: '#laptopOuter',
            duration: 750,
            offset: -200 /* offset the trigger 150px below #scene's top */
        })
        .setTween(laptopAnim)
//        .addIndicators({
//            name: "Laptop (duration: 750)"
//        })
        .addTo(scrollMagicController);

    var revenue = new ScrollMagic.Scene({
            triggerElement: '#revenueNumber',
            //            duration: 500,
            offset: -200 /* offset the trigger 150px below #scene's top */
        })
        .setTween(revenueAnim)
        .reverse(false)
//        .addIndicators({
//            name: "Revenue (duration: 1000)"
//        })
        .addTo(scrollMagicController);

    var analyseStats = new ScrollMagic.Scene({
            triggerElement: '#statsHolder',
            offset: 0 /* offset the trigger 150px below #scene's top */
        })
        .setTween(statsTimeline)
        .reverse(false)
//        .addIndicators({
//            name: "stats (duration: 0)"
//        })
        .addTo(scrollMagicController);
    
    var activeUsersStats = new ScrollMagic.Scene({
            triggerElement: '#outerUsers',
            offset: 0 /* offset the trigger 150px below #scene's top */
        })
        .setTween(activeUsersAnim)
        .reverse(false)
//        .addIndicators({
//            name: "stats (duration: 0)"
//        })
        .addTo(scrollMagicController);

});