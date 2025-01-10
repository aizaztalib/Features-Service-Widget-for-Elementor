var featuresService = function($scope, $){
    $scope.find('.features-service-wrapper').each( function(){
        var selector = $(this),
            colHandle = selector.find('.features-service-item'),
            bgHandle = selector.find('.features-service-img');
        
            colHandle.each(function(){
                if ($(this).data('default') == 'yes') {
                    bgHandle.removeClass('hover');
                    $(this).next().addClass('hover');
                }
            });
           
                colHandle.hover(
                    function() {
                        bgHandle.removeClass('hover');
                        $(this).next().addClass('hover');
                    }
                );
            
            
    });
};

function fserviceResize(){
    var wraper = $('.features-service-wrapper');
    if(wraper.length){
        wraper.each(function () {
            var item = $(this).find('.features-service-item');
                item.each(function () {
                    var desc = $(this).find('.features-service-desc'),
                        title = $(this).find('.features-service-title'),
                        width = $(window).width();

                    if (width > 1024){
                        var hdesc = desc.outerHeight(!0);
                        title.css({ transform: "translateY(" + hdesc + "px)" }),
                        $(this)
                            .mouseenter(function () {
                                title.css({ transform: "translateY(0px)" });
                            })
                            .mouseleave(function () {
                                title.css({ transform: "translateY(" + hdesc + "px)" });
                            });
                    }
                    else{
                        title.css("transform","");
                        $(this).unbind('mouseenter mouseleave');
                    }
                });
        });
    }  
    
}
function fserviceResize1(){
    var wraper = $('.features-service-wrapper');
    if(wraper.length){
        wraper.each(function () {
            var item = $(this).find('.features-service-item');
                item.each(function () {
                    var desc = $(this).find('.features-service-desc'),
                        width = $(window).width();

                    if (width > 1024){
                        desc.css("max-height","0"),
                        $(this)
                            .mouseenter(function () {
                                desc.css( "max-height","100%" );
                            })
                            .mouseleave(function () {
                                desc.css("max-height","0");
                            });
                    }
                    else{
                        desc.css("max-height","");
                        $(this).unbind('mouseenter mouseleave');
                    }
                });
        });
    }  
    
}

/* --------------------------------------------------
* handle after scroll/load/resize
* --------------------------------------------------*/
$(window).on('scroll', function() {
    lineProgress();
    circleProgress();
    iCounter();
});

$(window).on('load', function () {
    lineProgress();
    circleProgress();
    iCounter();
    fserviceResize();
});

$(window).on('resize', function () {
    lineProgressSize();
    fserviceResize();
});