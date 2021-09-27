var rocketContainer = document.querySelector(".rocketContainer");
var bulletVoice     = document.getElementById("bulletVoice");
var bullet          =document.querySelector(".bullet");
var rocketMoveLeftRight=0;
var rocketMoveUpDown=0;
var up=900;
document.addEventListener("keydown",function(eventInfo){
    // console.log(window.innerHeight)
    if(eventInfo.key == "ArrowUp"&& (rocketMoveUpDown<(window.innerHeight-((34*window.innerHeight)/100)))){
            rocketMoveUpDown+=100;
            rocketContainer.style.bottom=(rocketMoveUpDown+'px');
    }
    if(eventInfo.key == "ArrowRight" &&(rocketMoveLeftRight<(window.innerWidth-((15*window.innerWidth)/100)))){
        rocketMoveLeftRight+=50;
        rocketContainer.style.left=(rocketMoveLeftRight+'px');
        console.log(rocketMoveLeftRight+" right")
    
    }
    if(eventInfo.key == "ArrowDown" && rocketMoveUpDown>0){
        rocketMoveUpDown-=50;
        rocketContainer.style.bottom=(rocketMoveUpDown+'px');
        
    }
    if(eventInfo.key == "ArrowLeft"&&rocketMoveLeftRight>0){
        rocketMoveLeftRight-=50;
        rocketContainer.style.left=(rocketMoveLeftRight+'px');
        console.log(rocketMoveLeftRight+" left")

    }
    if(eventInfo.key == ' '){
        bullet.style.visibility='visible';
        bullet.style.bottom=(up+'px');
        bulletVoice.play();
        // bullet.style.bottom=(130+'px');
        // bulletAgain();
        
    }
})

function bulletAgain(){
    bullet.style.visibility='hidden';
    bullet.style.bottom=(130+'px');
}
// bullet.style.bottom=(130+'px');
// bullet.style.visibility='visible';