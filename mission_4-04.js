function omikujishow()
{
    var omikuji = ["凶","小吉","吉","中吉","大吉"];

var number1 = Math.random();
var number2 = number1 * 5;
var number = Math.floor(number2);

var message = omikuji[number];

var object = document.getElementById("omikuji");
object.innerText = message;

}
