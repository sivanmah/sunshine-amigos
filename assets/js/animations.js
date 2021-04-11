function ForceFrame(frameID)
{
    var frameContainer = $('body');

    frameContainer.addClass('frame-nb'+frameID);
    frameContainer.removeClass('frame-nb'+(frameID+1));
}

function ApplyFrame(frameID)
{
    disableScroll(); // Disable scroll while animation is on-going.
    var frameDuration = 3000;
    var frameContainer = $('body');

    frameContainer.addClass('frame-nb'+frameID);
    frameContainer.removeClass('frame-nb'+(frameID+1)); // In case we scroll back

    switch(frameID) {
        case 5:
            frameDuration = 5000;
            break;
    }
    setTimeout(() => {enableScroll();}, frameDuration);
}