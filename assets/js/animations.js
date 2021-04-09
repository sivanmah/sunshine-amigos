function ApplyFrame(frameID)
{
    disableScroll(); // Disable scroll while animation is on-going.
    var frameDuration = 3000;

    switch(frameID) {
        case 1:
            $('.main-view').addClass('frame-nb1');
            break;
        
        case 2:
            $('.main-view').addClass('frame-nb2');
            break;

        case 3:
            $('.main-view').addClass('frame-nb3');
            break;
    }
    setTimeout(() => {enableScroll();}, frameDuration);
}