function ApplyFrame(frameID)
{
    disableScroll(); // Disable scroll while animation is on-going.
    var frameDuration = 3000;
    var frameContainer = $('body');

    switch(frameID) {
        case 1:
            frameContainer.addClass('frame-nb1');
            break;
        
        case 2:
            frameContainer.addClass('frame-nb2');
            break;

        case 3:
            frameContainer.addClass('frame-nb3');
            break;

        case 4:
            frameContainer.addClass('frame-nb4');
            break;
        
        case 5:
            frameDuration = 5000;
            frameContainer.addClass('frame-nb5');
            break;
    }
    setTimeout(() => {enableScroll();}, frameDuration);
}