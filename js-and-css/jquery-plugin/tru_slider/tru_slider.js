jQuery.fn.tru_slider = function (para) { 

    var arg = { width : 800,
                height : 500,
                speed : 4000,
                full_width : false,
                automatic_fade : true,
                show_bullet : false,
                navigation : false,
            };
    var get_value = { width : para.width,
                height : para.height,
                speed : para.speed,
                automatic_fade : para.automatic_fade,
                full_width : para.full_width,
                show_bullet : para.show_bullet,
                navigation : para.navigation,
                };
    $.extend( arg, get_value );
   var width = arg.width;
   var height = arg.height;
   var slider_speed = arg.speed;

   var element = $(this);
   var tru_ul = element.find("ul");
   var tru_li = element.find("li");
   var tru_img_div = element.find(".image");

   if(!arg.full_width){
       
    var element_css = "width:"+width+"px; height: "+height+"px;margin:auto;list-style:none;position:relative;padding-left:0;";
    var tru_ul_css = "width:"+width+"px; height: "+height+"px;list-style:none;position:relative;padding-left:0;";
    var tru_li_css = "width:"+width+"px; height: "+height+"px;list-style:none;position:absolute;top:0;left:0;display:none;";
    var tru_img_div_css = "width:"+width+"px; height: "+height+"px;";
  
   }
   else{
    var element_css = "width:100%; height: "+height+"px;margin:auto;list-style:none;position:relative;padding-left:0;";
    var tru_ul_css = "width:100%; height: "+height+"px;list-style:none;position:relative;padding-left:0;margin:0;";
    var tru_li_css = "width:100%;  height: "+height+"px;list-style:none;position:absolute;top:0;left:0;display:none;";
    var tru_img_div_css = "width:100%; height: "+height+"px;";
   }
   var child_i = 2;
   $(".image").find("img").css({ width : "100%",height:"100%"});
   element.attr("style",element_css);
   tru_ul.attr("style",tru_ul_css);
   tru_li.attr("style",tru_li_css);
   tru_img_div.attr("style",tru_img_div_css);
   
   tru_ul.find("li:nth-child(1)").css({
        display : "block"
    });

    // Bullets for Navigation 

    var bullets_html = '<div id="bullets">';
    for( i = 1; i <= tru_li.length; i++){
         bullets_html += '<span id="bull-'+i+'" class="bullet_point"></span>';
    }
    bullets_html += '</div>';
    
    if(arg.show_bullet == true){
        element.append(bullets_html);
    }
    var bullet_container_css = "position: absolute;bottom: 14px;left: 46%;";
    var bullet_point_css = "width: 20px;height: 20px;background-color: #000;bottom: 1px;margin: 3px 7px;";
    bullet_point_css += "float: left;border-radius: 50%;text-align: center;cursor: pointer;";
    
    $("#bullets").attr("style",bullet_container_css);  
    $(".bullet_point").attr("style",bullet_point_css);  

    var visible = tru_li.filter(":visible").index();
    var show_billet = visible+1;
    $("#bull-"+show_billet).css({
        background: "#eee",
    });
    
    // Bullets for Navigation

    

    // Navigation Arrow 
    navigation_arrow = "<div id='navigation_arrows'><span id='right'>  > </span><span id='left'> < </span></div>";
    if(arg.navigation == true){
        element.append(navigation_arrow);
    }
    var navigation_arrow_css = "position: absolute;top: 50%;width: 100%;margin-left: 0px;";
    $("#navigation_arrows").attr("style",navigation_arrow_css);

    var span_right_css = "float: right;right: 1%;top: 0;position: absolute;color: #fff;background-color: #00000087;";
    span_right_css += "padding: 4px 11px;border-radius: 28%;font-size: 19px;cursor: pointer;";

    $("#right").attr("style",span_right_css);

    var span_left_css = "float: left;left: 1%;top: 0;position: absolute;color: #fff;background-color: #00000087;";
    span_left_css += "padding: 4px 11px;border-radius: 28%;font-size: 19px;cursor: pointer;";

    $("#left").attr("style",span_left_css);


    //End Navigation Arrow



    if(arg.automatic_fade == true){
        
        setInterval(function(){
            var visible_index = tru_li.filter(":visible").index();
            next_child = 2 + visible_index;

            if(next_child > tru_li.length){
                next_child = 1;
            }
            tru_li.fadeOut();
            tru_ul.find("li:nth-child("+next_child+")").fadeIn();

            $(".bullet_point").css({
                background: "#000",
            });
            $("#bull-"+next_child).css({
                background: "#eee",
            });

        },slider_speed);

    }
    if(arg.zoom == true){

        setInterval(function(){
            var visible_index = tru_li.filter(":visible").index();
            next_child = 2 + visible_index;

            if(next_child > tru_li.length){
                next_child = 1;
            }
            tru_li.fadeOut();
            tru_ul.find("li:nth-child("+next_child+")").fadeIn();

            $(".bullet_point").css({
                background: "#000",
            });
            $("#bull-"+next_child).css({
                background: "#eee",
            });

        },slider_speed);
    }
    
    $("#right").click(function(){
        var visible_index = tru_li.filter(":visible").index();
        next_child = 2 + visible_index;

        if(next_child > tru_li.length){
            next_child = 1;
        }
        tru_li.fadeOut();
        tru_ul.find("li:nth-child("+next_child+")").fadeIn();

        $(".bullet_point").css({
            background: "#000",
        });
        $("#bull-"+next_child).css({
            background: "#eee",
        });
        
    });


    $("#left").click(function(){
        var visible_index = tru_li.filter(":visible").index();
        var pre_child = visible_index;
        if(visible_index == 0){
            pre_child = 4;
        }
        tru_li.fadeOut();
        tru_ul.find("li:nth-child("+pre_child+")").fadeIn();

        $(".bullet_point").css({
            background: "#000",
        });

        $("#bull-"+pre_child).css({
            background: "#eee",
        });

    });

    $(".bullet_point").click(function(){
        var bull_id = $(this).attr("id").match(/\d+/g);
        
        tru_li.fadeOut();
        tru_ul.find("li:nth-child("+bull_id+")").fadeIn();

        $(".bullet_point").css({
            background: "#000",
        });

        $("#bull-"+bull_id).css({
            background: "#eee",
        });

    });
 }