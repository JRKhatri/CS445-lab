(function(){
"use strict"
function getRun(){
    document.getElementById("start").onclick = runAnimation;
    document.getElementById("stop").disabled = true;
    document.getElementById("stop").onclick = stopAnimation;
    document.getElementById("fontsize").onchange = changeFontSize;
    document.getElementById("turbo").onclick = changeTurbo;
}

let frames;
let arrayOfFrame;

function runAnimation(){
    let animation = document.getElementById("animation");
    let animation_option = animation.options[animation.selectedIndex].value;

    frames = ANIMATIONS[animation_option]
    arrayOfFrame = frames.split( "=====\n")
    turboSpeed();

    changeFontSize();
    
    document.getElementById("start").disabled = true;
    document.getElementById("stop").disabled = false;
}

let timerId;

function stopAnimation(){
    window.clearInterval(timerId);
    document.getElementById("text-area").value =frames;
    document.getElementById("start").disabled = false;
    document.getElementById("stop").disabled = true;
    
}

function changeFontSize(){
    let font = document.getElementById("fontsize");
    let size_option = font.options[font.selectedIndex].value;
    document.getElementById("text-area").style.fontSize =size_option;

}

let turboVelocity= 250; 

function turboSpeed(){
    window.clearInterval(timerId);
    let isTurbo = document.getElementById("turbo").checled;
    if(isTurbo){ 
        turboVelocity = 50;
    } else {
        turboVelocity = 250;
    }
    timerId = setInterval(animationFrame, turboVelocity);
}
let frameLength = 0;

function animationFrame(){
    if(frameLength >= arrayOfFrame.length){
        frameLength = 0;
    } else {
        document.getElementById("text-area").value = arrayOfFrame[frameLength];
        frameLength++;
        
    }
}


window.onload = getRun;
}());