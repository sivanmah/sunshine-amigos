function ApplyFrame(frameID)
{
    disableScroll(); // Disable scroll while animation is on-going.
    setTimeout(() => {enableScroll();}, 2500); // Change this per frame, only if needed. 2500 = 2500ms delay
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

    var a= document.getElementsByClassName('verse');
    if(wd < 0) {
        if(i==a.length) return;
        i++;
    } else {
        if(i==0) return; // Cap minimum frame to 0
        i--;
    }

    currFrame = i;
    console.log("Current frame: " + i);
    ApplyFrame(i);
});