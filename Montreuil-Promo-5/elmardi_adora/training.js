var score = 0;
var price = 50;
var multiplier = 1;

function increase() {
    document.getElementById('display').innerHTML = ++score;
    //var val = document.getElementById('display');
    //val.innerHTML = ++score;
}

function augmenterMultiplicateur() {
  if (score >= price ) {
     multiplier = multiplier * 2;
    score = score - price;
    price = price * 2;
    var result = document.getElementById('multiply');
    result.innerHTML = "multiply x " + multiplier + " next multiply, price " + price;
}
}
function auto() {
    if (score > 20) {
        score = score - 20;
        var test = document.getElementById('test');
        setInterval(function() {
            score = score + 1;
            var display = document.getElementById('display');
            display.innerHTML = score;
        }, 1000);
        display.innerHTML = score;
    }
}
/*function augmenterMultiplicateur() {
    if (score >= price) {
        counterclik = counterclik * 2;
        score = score - price;
        price = price * 2;
        var result = document.getElementById('multiply');
        result.innerHTML = "multiply x " + counterclik + " next multiply, price " + price;
    }
}

/*var score = 0,
    view = document.getElementById('view');

function increase() {
    view.innerHTML = ++score;
}

/*
var mySetInterval = function(func, time) {
  setTimeout(function () {
    func();
    mySetInterval(func, time);
  }, time);
};


setInterval(increase, 1000);

var g = function(n) {
    for (var i = 10; i >= 0; --i) {
        console.log(i);
    }
};

var f = function(n) {
    console.log(n);
    if (n > 0) f(n - 1);
};

g(10);
f(10);
*/
