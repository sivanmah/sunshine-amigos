function ApplyFrame(frameID)
{
    disableScroll(); // Disable scroll while animation is on-going.
    var frameDuration;

    switch(frameID) {
        case 1:
            frameDuration = 2500; // 2500ms
            // Perform your animation here
            break;
        
        case 2:
            frameDuration = 1500; // 1500ms
            break;
    }
    setTimeout(() => {enableScroll();}, frameDuration);
}

var currFrame = 0;

var delay = false;
var i = 1;
console.log("Current frame: " + i);
$(document).on('mousewheel DOMMouseScroll', function(event) {
    event.preventDefault();
    if(delay) return;
    if(!scrollingEnabled) return;

    delay = true;
    setTimeout(function(){delay = false},200)

    var wd = event.originalEvent.wheelDelta || -event.originalEvent.detail;

    var a = document.getElementsByClassName('verse');
    if(wd < 0) {
        if(i==a.length) return;
        i++;
    } else {
        if(i==1) return; // Cap minimum frame to 1
        i--;
    }

    currFrame = i;
    console.log("Current frame: " + i);
    ApplyFrame(i);
});