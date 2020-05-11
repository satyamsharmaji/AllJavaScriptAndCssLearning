
jQuery.fn.flip_it = function(arg){

    var box_width = arg.width;
    var box_heigth = arg.height;
    var transition_time = arg.time;
    
    var element = $(this);
    var image_box =  element.find('.image-box');
    var front = image_box.find('.front');
    var back = image_box.find('.back');
    var image_box_css = "width:"+box_width+"px;height:"+box_heigth+"px; float:left;margin:8px 19px;position:relative;";
    
    var front_css = "width : 100%; height : 100%; ";
    front_css += "transform:perspective(600px) rotateY(0deg);transform-style:preserve-3d;";
front_css += "position:absolute;transition:all "+transition_time+"ms linear; backface-visibility: hidden;";
    
    var back_css = "width : 100%; height : 100%; ";
    back_css += "transform:perspective(600px) rotateY(180deg);transform-style:preserve-3d;";
    back_css += "position:absolute;transition:all "+transition_time+"ms linear;backface-visibility:hidden;";
    
    image_box.attr("style",image_box_css);
    front.attr("style",front_css);
    back.attr("style",back_css);    
    
    image_box.hover(function(){
                
                $(this).find(".front").css({
                    transform : "perspective(600px) rotateY(180deg)"
                });
                $(this).find(".back").css({
                    transform : "perspective(600px) rotateY(0deg)"
                });
        }
        ,function(){
               
                $(this).find(".front").css({
                    transform : "perspective(600px) rotateY(0deg)"
                });
                $(this).find(".back").css({
                    transform : "perspective(600px) rotateY(180deg)"
                });
    });
   

    
}