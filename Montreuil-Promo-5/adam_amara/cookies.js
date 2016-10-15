var click = document.getElementById('click');
var score = 0;
var view = document.getElementById('view');
var multiply = document.getElementById('multi');
var countClick = 1;
var price = 50;
var autoclick = document.getElementById('autoclick');
var bonus1 = document.getElementById('bonus');
var time = 30;
var resultStatstics = document.getElementById('statstics')
var test;
var myVar;


var addScore = function() {

    if (score >= 0) {
        score = score + countClick;
        view.innerHTML = score;
    }

}
click.addEventListener("click", addScore);


var multiple = function() {
    if (score >= price) {
        countClick = countClick * 2;
        score = score - price;
        price = price * 2;
        multiply.value = "adam" + countClick + " next multiply, price " + price;
        resultStatstics.innerHTML = price;
    }
}
multiply.addEventListener("click", multiple);

var auto = function() {
    if (score > 50) {
        score = score - 50;
        setInterval(addScore, 1000);
    }

}
autoclick.addEventListener("click", auto);

function bonus2() {

    test = setInterval(function() {
        bonus.value = "BONUS : +200% " + time;
        time--;
    }, 30000);
    resultStatstics.innerHTML = test;
}


bonus.addEventListener("click", function() {

        if (score >= 10) {
            
            myVar = countClick;
            countClick = countClick * 2;
            bonus2();
            setTimeout(function() {
                countClick = myVar;
                time = 30;
                bonus.value = "BONUS : +200% " + time;
                clearInterval(test);
            }, 30000);
        }

});
