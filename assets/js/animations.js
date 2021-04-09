function ApplyFrame(frameID)
{
    disableScroll(); // Disable scroll while animation is on-going.
    var frameDuration = 3000;

    switch(frameID) {
        case 1:
            $('body').addClass('frame-nb1');
            break;
        
        case 2:
            $('body').addClass('frame-nb2');
            break;

        case 3:
            $('body').addClass('frame-nb3');
            break;

        case 4:
            $('body').addClass('frame-nb4');
            break;
        
        case 5:
            frameDuration = 5000;
            $('body').addClass('frame-nb5');
            break;
    }
    setTimeout(() => {enableScroll();}, frameDuration);
}