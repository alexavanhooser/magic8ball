// target your button and assign an ask function that outputs a random image to your page
// target your button and assign an ask function that outputs a random image to your page
var random = Math.floor(Math.random() * 21);
var eightBall = '';
  switch( Math.floor(Math.random() * 21)) {
    document.getElementById("button").addEventListener("click", function(){
       document.body.style.backgroundImage = "url('../img/magic8ball_"+random+".png')";
  //  document.getElementById('button');
    eightBall =  document.body.style.backgroundImage = "url(../img/magic8ball_1.png)";
    //'It is certain';
  //  break;
  //  eightBall = document.body.style.backgroundImage = "url(../img/magic8ball_2.png)";
  //  break;
}

console.log('You asked: ' + userQuestion);
console.log('The response was: ' + eightBall);
