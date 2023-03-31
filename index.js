for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
    
    document.querySelectorAll(".drum")[i].addEventListener("click",function()
    {    console.log("clicked");
        let val= this.textContent; 
        console.log(val);
        playSound(val);
        playAnimation(val);
        // var col=this.style.color;
        // if(col=="white")
        // {
        //     this.style.color ="rgb(220, 4, 101)";
        // }
        // else{
        //     this.style.color ="white";

        // }
     });
}
document.addEventListener("keypress",function(Event){
    playSound(Event.key);
    playAnimation(Event.key);
    
})
function playSound(i)
{
    switch(i)
    {

    case "w":
    var audio=new Audio("sounds/crash.mp3");
    audio.play();

    break;
    case "a":
    var audio=new Audio("sounds/kick-bass.mp3");
    audio.play();

    break;
    case "s":
    var audio=new Audio("sounds/snare.mp3");
    audio.play();

    break;
    case "d":
    var audio=new Audio("sounds/tom-1.mp3");
    audio.play();

    break;
    case "j":
    var audio=new Audio("sounds/tom-2.mp3");
    audio.play();

    break;
    case "k":
    var audio=new Audio("sounds/tom-3.mp3");
    audio.play();

    break;
    case "l":
    var audio=new Audio("sounds/tom-4.mp3");
    audio.play();

    break;
            
    }
}
function playAnimation(val)
{
    var active=document.querySelector("."+val);
    active.classList.add("pressed");
    setTimeout(function()
    {
        active.classList.remove('pressed');
    },100);
}