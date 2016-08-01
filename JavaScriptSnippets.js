//Understandind Local & Global scope of variables
t1();

function t1() {
    var a = 1;
    b = 2;
	console.log('Inside Fun');
    console.log('a: ' + a);
    console.log('b: ' + b);
}

var b = 5;
t1();
var c;

console.log('Outside Fun');
console.log('b: ' + b);
console.log('c: ' + c);

var myVar;
undefined = null;

console.log(typeof myVar=== 'undefined');
console.log(myVar === undefined);


//-----------------//


/* Hoisting */

function fun(doit) {
    var color = "red";
    number = 9;
    
    if(doit){
    	var color = "blue";
        number = 10;
        console.log("inside if : " + color + " " + number);
    }
        console.log(color + " " + number);
}

fun(true);

//--------------//


//--------Javascript Function Expression and Closures 

var add = (function () {
    var counter = 0;
    return counter += 1;
});
console.log(add);
console.log(add());


var add = (function () {
    var counter = 0;
    return counter += 1;
})();
console.log(add);
console.log(add());


var add = (function () {
    var counter = 0;
    return function () {return counter += 1};
});
console.log(add);
console.log(add()); 


var add = (function () {
    var counter = 0;
    return function () {return counter += 1};
})();
console.log(add);
console.log(add()); 

//---------------//


//---Drawing Concentric Squares ---//

<div class="square"></div>

.square {
    position: absolute;
    top: 50%;
    left: 50%;
    border: 1px solid #333;
}

var noOfSquares = prompt('No. of squares: ');

var size = 20;
function drawTheSquare (noOfSquares) {
	
    for(var c = 0; c < noOfSquares; c++){
    	size += 30;
        $('body').append("<div class='square' style='height:" + size + "px; width: " + size + "px; margin: -"+ size/2 + "px 0 0 -" + size/2 +"px'></div>");
    }
}

drawTheSquare (noOfSquares);

//------//