$(document).ready(function(){
    window.onunload = function(e) {
        return 'Please press the Logout button to logout.';
    };
    var start_btn = $(".game_start");
    var main_car = $(".main_car");
    var road_left_offset = $(".road_section").offset().left;
    var main_car_left_offset = $(".main_car").offset().left;
    var main_top_offset = $(".road_section").offset().top;
    
    var m_car_f_road_left = Math.floor(main_car_left_offset - road_left_offset);
    
    var road_width = $(".road_section").width();
    var road_height = $(".road_section").height();
    

    var max_car_left_offset = m_car_f_road_left + road_width;
    
    var score = 0;
    var car1_left = 0;
        var car1_top = 0;
        var car2_left = 0;
        var car2_top = 0;
        var car3_left = 0;
        var car3_top = 0;
    start_btn.click(function(){
        $(this).hide();
        $(".main_car").removeClass("hide");
        $(".main_car").show();        
        $(".road_section").addClass("start");
        $(".stop").show();
        $(".over_take_cars").removeClass("hide");
        $(".over_take_cars").show();
        setInterval(function(){
            $(".score_section h3 span").text(score);
            score++;
        },1000);
        
        
        setInterval(function(){
            car1_left = Math.floor(Math.random() * 50)+20;
            var car1_top = Math.floor(Math.random() * 30);

            car2_left = Math.floor(Math.random() * 70)+100;
            car2_top = Math.floor(Math.random() * 40);

            car3_left = Math.floor(Math.random() * 90)+200;
            car3_top = Math.floor(Math.random() * 100);
            $(".car1").css("top",car1_top+"px");
            $(".car1").css("left",car1_left+"px");

            $(".car2").css("top",car2_top+"px");
            $(".car2").css("left",car2_left+"px");

            $(".car3").css("top",car3_top+"px");
            $(".car3").css("left",car3_left+"px");
            console.log($(".car1").offset().top);
        },2000)

    });
    var left = 300;
    
    var top = 354;
    
    // alert(m_car_f_road_left);
    $(document).keydown(function(e) {
        if(e.which == 37 && left > 60){
            left = left-4;
        }
        if( e.which == 39 && left < 292){
            left = left+4;
        }
        if( e.which == 38 && top > 0){

            top = top-4;
        }
        if( e.which == 40 && top < 352){

            top = top+4;
        }
        $(main_car).css("left",left+"px");
        $(main_car).css("top",top+"px");
        
        e.preventDefault(); // prevent the default action (scroll / move caret)
    });
   
    $(".stop").click(function(){
        $(".game_start").show();
        $(".main_car").hide();
        $(".road_section").removeClass("start");
        $(".over_take_cars").hide();
        $(this).hide();
    });
    if(car1_left == left ){
        alert("game over");
    }
    
});