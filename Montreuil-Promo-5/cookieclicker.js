  var click = document.getElementById('click');
  var score = 0;
  var view = document.getElementById('view');
  var multiplier = document.getElementById('multi');
  var countClick = 1;
  var price = 10;
  var autoclick = document.getElementById('autoclick');
  var bonus1 = document.getElementById('bonus');
  var time = 30;
  var test;

  var myVar;



  var addScore = function(){
     if (score >= 0) {
         score = score + countClick;
         view.innerHTML = score;
         }

  }
  click.addEventListener("click", addScore);

  var multiple = function(){


     if (score >= price) {
         countClick = countClick * 2;
         score = score - price;
         price = price * 2;
         multiplier.value = "multiply x" + countClick + " next multiply, price " + price;

     }
  }
  multiplier.addEventListener("click", multiple);

  var auto = function(){
     if (score > 10){
         score = score - 10;
         setInterval(addScore,1000);
     }
     autoclick.style.display  = "none";
  }
  autoclick.addEventListener("click", auto);

  function bonus2() {

         test = setInterval(function(){
         bonus1.value = "BONUS : +200% " + time;
         time--;
         },1000);

  }



  bonus1.addEventListener("click", function(){
     if (score >= 10) {
     myVar = countClick;
     countClick = countClick * 2;
     bonus2();
     setTimeout(function(){countClick = myVar ; time = 30;bonus1.value = "BONUS : +200% " + time; clearInterval(test);}, 30000);
     }
  });
