// target your button and assign an ask function that outputs a random image to your page
// target your button and assign an ask function that outputs a random image to your page
var random = Math.floor(Math.random() * 21);
var eightBall = '';
  //switch( Math.floor(Math.random() * 21)) {
  let userQuestion = "";
    document.getElementById("button").addEventListener("click", function(){
       document.getElementById("magic-8").style.backgroundImage = "url('img/magic8ball_"+random+".png')";
userQuestion = document.getElementsByClassName('question').value;
    //eightBall =  document.body.style.backgroundImage = "url(img/magic8ball_1.png)";
    //'It is certain';
  //  break;
  //  eightBall = document.body.style.backgroundImage = "url(../img/magic8ball_2.png)";
  //  break;
});

console.log('You asked: ' + userQuestion);
console.log('The response was: ' + eightBall);
