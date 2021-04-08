function ApplyFrame(frameID)
{
    disableScroll(); // Disable scroll while animation is on-going.
    var frameDuration = 1000;

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