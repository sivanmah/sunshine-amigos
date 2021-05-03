var frameClass = 'body__frame';
var frameContainer;
var frameMax = 10;

function ForceFrame(frameID)
{
    frameContainer.addClass(frameClass+frameID);
    frameContainer.removeClass(frameClass+(frameID+1));

    createProgress(0);
    updateProgressFrames(frameID);
}

function ApplyFrame(frameID)
{
    if(frameID > frameMax)
        return;

    disableScroll(); // Disable scroll while animation is on-going.
    var frameDuration = 3000;

    frameContainer.addClass(frameClass+frameID);
    frameContainer.removeClass(frameClass+(frameID+1)); // In case we scroll back

    switch(frameID) {
        case 5:
            frameDuration = 5000;
            break;
    }

    createProgress(frameDuration/1000);
    updateProgressFrames(frameID);

    setTimeout(() => {
        enableScroll();
}, frameDuration);
}

$(document).ready(function() {
    frameContainer = $('body');
});