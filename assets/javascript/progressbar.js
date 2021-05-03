var progressBarProgressID = '#progressbar__progress';

function createProgress(seconds)
{
    $('#progressbar').addClass('progressbar--shown');

    var progBarProgress = $(progressBarProgressID);
    progBarProgress.css('transition','none');
    progBarProgress.removeClass('progressbar__progress--finished');

    /*
        This is here to reset the element, so the animation can "restart"
        If you don't believe me, try commenting it:
    */
    void progBarProgress[0].offsetWidth;
    /////////////////////////////////////////////////////////////////////

    progBarProgress.css({'transition' : 'all '+seconds+'s linear'});
    progBarProgress.addClass('progressbar__progress--finished');
}

function updateProgressFrames(frameID)
{
    $('#progressbar p').html(frameID+' / '+frameMax);
}