var progressBarProgressID = '#progressbar__progress';

function createProgress(seconds)
{
    $('#progressbar').addClass('progressbar--shown');

    var progBarProgress = $(progressBarProgressID);
    progBarProgress.css('transition','none');
    progBarProgress.removeClass('progressbar__progress--finished');
    void progBarProgress[0].offsetWidth;

    progBarProgress.css({'transition' : 'all '+seconds+'s linear'});
    progBarProgress.addClass('progressbar__progress--finished');
}

function updateProgressFrames(frameID)
{
    $('#progressbar p').html(frameID+' / '+frameMax);
}