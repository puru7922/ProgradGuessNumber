let random = parseInt(Math.floor(Math.random()*100));
function calculate(){
    let num = document.getElementById('number').value;
    if(num == random){
        document.getElementById('num').innerHTML = "Correct Number!!!";
    }
    else if(num > random){
        document.getElementById('num').innerHTML = "Guess a Smaller Number";
    }
    else{
        document.getElementById('num').innerHTML = "Guess a Larger Number";
    }
}