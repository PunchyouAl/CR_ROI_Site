// IMAGES

const clientLogo = "img/ROI_Logo-10.png"; // Add the image path location in inverted commas
const clientScreenshot = "img/ROI_laptopScreen.png"; // Add the image path location in inverted commas

//NUMBERS

const reportDates = "01/01/2016 - 31/08/2019" // Add the dates in inverted commas
const totalRevenue = 193740; // Enter as a number with no decimals or commas
const roiOnProfit = 44; // percentage
const averageGrowth = 24; // percentage
const increaseLastQuarter = 61; // percentage
const averageRevenuePerUser = 983; // number
const activeUsers = 60; // percentage
const averageProgrammeUsers = 36; // number
const averageMonthlyRevenue = '12,985'; // number in inverted commas



/*

ALICE - DO NOT TOUCH ANYTHING BELOW THIS LINE! YOUR DOMAIN IS ABOVE!

*/


//DOM Elements

const logo = document.getElementById('logoTwo');
const screen = document.getElementById('screenImg');
const revenueNumber = document.getElementById('revenueNumber');
const analysisStatOne = document.getElementById('roiProfitStat');
const analysisStatTwo = document.getElementById('averageGrowthStat');
const analysisStatThree = document.getElementById('increaseLastStat');
const analysisStatFour = document.getElementById('activeUsersStat');
const averageNumber = document.getElementById('averageMonthlyRevenue');

// Apply NUMBERS to ELEMENTS

revenueNumber.setAttribute('data-count', totalRevenue);
revenuePerUserStat.textContent = "£" + averageRevenuePerUser;
averageNumber.textContent = "£" + averageMonthlyRevenue;


// Apply IMAGES

function applyImages(imgOne, imgTwo) {
    logo.setAttribute('src', imgOne);
    screen.setAttribute('src', imgTwo);
}

//settings

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
applyImages(clientLogo, clientScreenshot),

// SCROLLMAGIC

$(function () {

    // Init
    var scrollMagicController = new ScrollMagic.Controller();

    // Animations
    var laptopAnim = TweenMax.to('#laptopOuter img:first-child', 0.5, {
        transform: 'rotate3d(1, 0, 0, "-60deg")',
        filter: 'brightness(1)'
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

    var userImagesOneAnim = TweenMax.to('#outerUsers img:nth-of-type(1)', 1, {
        left: -100,
        opacity: 1
    });

    var userImagesTwoAnim = TweenMax.to('#outerUsers img:nth-of-type(2)', 1, {
        scale: 1
    });
    
    var userImagesThreeAnim = TweenMax.to('#outerUsers img:nth-of-type(3)', 1, {
        top: 100,
        opacity: 1
    });
    
    var sectionSixBgAnim = TweenMax.to('#sectionSix', 1, {
        backgroundScale: 1.2
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

    var userImagesOne = new ScrollMagic.Scene({
            triggerElement: '#sectionFive #outerUsers',
            duration: 200,
            offset: 0 /* offset the trigger 150px below #scene's top */
        })
        .setTween(userImagesOneAnim)
        .reverse(true)
//        .addIndicators({
//            name: "images (duration: 0)"
//        })
        .addTo(scrollMagicController);

    var userImagesTwo = new ScrollMagic.Scene({
            triggerElement: '#sectionFive #outerUsers',
            duration: 200,
            offset: 0 /* offset the trigger 150px below #scene's top */
        })
        .setTween(userImagesTwoAnim)
        .reverse(true)
//        .addIndicators({
//            name: "images (duration: 0)"
//        })
        .addTo(scrollMagicController);

    var userImagesThree = new ScrollMagic.Scene({
            triggerElement: '#sectionFive #outerUsers',
            duration: 200,
            offset: 0 /* offset the trigger 150px below #scene's top */
        })
        .setTween(userImagesThreeAnim)
        .reverse(true)
//        .addIndicators({
//            name: "images (duration: 0)"
//        })
        .addTo(scrollMagicController);
    
    var sectionSixBgMove = new ScrollMagic.Scene({
            triggerElement: '#sectionSix',
            duration: 500,
            offset: 0 /* offset the trigger 150px below #scene's top */
        })
        .setTween(sectionSixBgAnim)
        .reverse(true)
//        .addIndicators({
//            name: "sectionSix (duration: 900)"
//        })
        .addTo(scrollMagicController);

});