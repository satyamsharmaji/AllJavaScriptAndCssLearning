$(document).ready(function(){
    $("button").click(function(){
        var str = $("#enter_t").val();
        var ar_str = str.split("");
        var main_ul = "<ul class='text-animation anim'>";
        for(i = 0; i < ar_str.length; i++){
            main_ul += "<li>"+ar_str[i] +"</li>";
        }
        main_ul += "</ul>";
        $("body").html(main_ul);
        $("body").attr("style","background:linear-gradient(to bottom right, red, yellow)");
        setInterval(function(){
            $(".text-animation").removeClass("anim");
        },500);
    });
    
   
});