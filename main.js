$(function(){
    //cache the window object
    var $window = $(window);
    //Parallax background effect
    $('section[data-type="background"]').each(function(){
        var $bgobj = $(this); //assigning the object
        $(window).scroll(function(){
            //scroll the background at var speed
            //the yPosition is a negative value because we're scrolling it up!
            var yPosition = -($window.scrollTop() / $bgobj.data('speed'));
            //Put together our final background position
            var coords= '50%' + yPosition + 'px';
            //Move the background
            $bgobj.css({ backgroundPosition: coords });
        });//End window Scroll
    });
});