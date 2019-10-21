//NUMBERS

const totalRevenue = 8130655;
const roiOnProfit = 98; // percentage
const averageGrowth = 24; // percentage
const increaseLastQuarter = 61; // percentage
const averageRevenuePerUser = 28428;
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

console.log(revenuePerUserStat);

//settings

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




// Counters

$({
    counter: 0
}).animate({
    counter: 8130655
}, {
    //Animate over a period of 2seconds
    duration: 5000,
    //Progress animation at constant pace using linear
    easing: 'swing',
    step: function () {
        //Every step of the animation, update the number value
        //Use ceil to round up to the nearest whole int

        $('#revenueNumber').text(`£${Math.ceil(this.counter)}`)
    },
    complete: function () {
        //Could add in some extra animations, like a bounc of colour change once the count up is complete.
    }
});



function applyStatAnim(elem, num) {

    $(elem).find('.statBitter').append(num + "<span class='percent'>%</span>");

    var circleFill = num * 6,
        radius = $(elem).find('circle').attr('r'),
        percent = num,
        circum = 2 * radius * Math.PI,
        draw = '' + percent * circum / 100 + 'px 999px';


    console.log("radius = " + radius + ", percent = " + percent + ", circum = " + circum + ", draw = " + draw)

    $(elem).find('circle').css("stroke-dasharray", draw);

    //    $(elem).find('.statBitter').show().animate({
    //        top: 305
    //    });

    
    $(elem).find('.statBitter').delay(2000).addClass('bounce-in-top');
        
//    
//    $(elem).find('.statBitter').delay(500).show().animate({
//        opacity: '1'
//    }, {
//        
//    });

};

applyStatAnim(analysisStatOne, roiOnProfit);
applyStatAnim(analysisStatTwo, averageGrowth);
applyStatAnim(analysisStatThree, increaseLastQuarter);
applyStatAnim(analysisStatFour, activeUsers);