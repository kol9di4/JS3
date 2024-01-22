var divs  = document.querySelectorAll('div');
var score = document.querySelector('h1');

for (var i = 0; i<divs.length;i++){
    divs[i].onclick = function(){
        if (this.classList.contains('active')){
            this.classList.remove('active');
            score.innerHTML = parseInt(score.innerHTML)+1;
        }
        else
            score.innerHTML = parseInt(score.innerHTML)-1;    
    }
}
setInterval(
    function(){
        var rand = Rand(0,divs.length);
        active.call(divs[rand]);
    }
    ,500);
function active (e){
    this.classList.toggle('active');
    console.log(e);
}
function Rand(min, max){
    return Math.floor(Math.random()*(max-min));
}