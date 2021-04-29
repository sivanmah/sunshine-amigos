var frameClass = 'body__frame';

function ForceFrame(frameID)
{
    var frameContainer = $('body');

    frameContainer.addClass(frameClass+frameID);
    frameContainer.removeClass(frameClass+(frameID+1));
}

function ApplyFrame(frameID)
{
    disableScroll(); // Disable scroll while animation is on-going.
    const frameDuration = 3000;
    var frameContainer = $('body');

    frameContainer.addClass(frameClass+frameID);
    frameContainer.removeClass(frameClass+(frameID+1)); // In case we scroll back

    switch(frameID) {
        case 5:
            frameDuration = 5000;
            break;
    }
    setTimeout(() => {enableScroll();}, frameDuration);
}