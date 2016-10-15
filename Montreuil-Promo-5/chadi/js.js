/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var score = 0;
var btn = document.getElementById("btn");
btn.onclick = function () {

    if (click >= 1) {   //ckeck the value of Multiply
        score = score + click;// Add the value of multiply to display
    } else {
        score = score + 1;
    }
    document.getElementById("display").innerHTML = score;
};
var multiply = document.getElementById("multiply");
var click = 0;
multiply.onclick = function augmenterMultiplicateur() {// add click counter
    var price =  click * 50 ;// the price off multiplier
    if (score > price || 50 ){  // check the score if more then Price or 50 for not  return negative score
    click++;
    if (price !== 0){  //for count  the first multiplier
    
 }else {
   score = score - 50;   
 }
     document.getElementById("display").innerHTML = score;// take 50 from the score
     
    }
    multiply.innerHTML = "x"+ click;// show the number of click
    ;
};

