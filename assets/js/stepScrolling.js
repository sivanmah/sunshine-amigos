// Remember to include animations.js BEFORE this file in your HTML.

disableScroll(); // Start by disabling scroll
var initialFrame = 3000; // 3000 ms
setTimeout(() => {enableScroll();}, initialFrame);

var delay = false;
var i = 1;

function outputCurrentFrame() {console.log("Current frame: " + i);}
outputCurrentFrame();

function nextFrame() {
    i++;
    outputCurrentFrame();
    ApplyFrame(i);
}

function previousFrame() {
    if(i==1) return;
    i--;
    outputCurrentFrame();
    ForceFrame(i);
}


$(document).on('mousewheel DOMMouseScroll', function(event) {
    event.preventDefault();
    if(delay || !scrollingEnabled) return;

    delay = true;
    setTimeout(function(){delay = false},200);

    var wheelDelta = event.originalEvent.wheelDelta || -event.originalEvent.detail;

    if(wheelDelta < 0) {
        nextFrame();
    } else {
        previousFrame();
    }
});

// MOBILE TOUCH CODE BELOW BY
// STACKOVERFLOW USER givanse
//
// https://stackoverflow.com/a/23230280

document.addEventListener('touchstart', handleTouchStart, false);        
document.addEventListener('touchmove', handleTouchMove, false);

var xDown = null;                                                        
var yDown = null;

function getTouches(evt) {
  return evt.touches ||             // browser API
         evt.originalEvent.touches; // jQuery
}                                                     

function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];                                      
    xDown = firstTouch.clientX;                                      
    yDown = firstTouch.clientY;                                      
};                                                

function handleTouchMove(evt) {
    if ( !xDown || !yDown || delay || !scrollingEnabled) {
        return;
    }

    delay = true;
    setTimeout(function(){delay = false},200);

    var xUp = evt.touches[0].clientX;                                    
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {
        if ( xDiff > 0 ) {
            /* left swipe */ 
        } else {
            /* right swipe */
        }                       
    } else {
        if ( yDiff > 0 ) {
            /* up swipe */ 
            nextFrame();
        } else { 
            /* down swipe */
            previousFrame();
        }                                                                 
    }

    /* reset values */
    xDown = null;
    yDown = null;                                             
};