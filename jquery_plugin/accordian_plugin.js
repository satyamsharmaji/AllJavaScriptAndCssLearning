(function($){
$.fn.cstm_accordion = function() {
    var element = this;
    var acco_box =  element.find(".acco_box");
    
    acco_box.css({
        'border': '1px solid #333',
        'border-top': 'none',
        'margin-top': '10px',
        'border-radius': '5px'
    })

    acco_box.each(function(){
        var acco_tab = $(this).find(".acco_tab");
        var acco_section = $(this).find(".acco_section");
        acco_tab.append("<span class='toggle_icon close'>+</span>");
        acco_section.hide();
        
        acco_tab.css({
            'border': '1px solid #333',
            'border-radius': '5px',
            'border-left':'none',
            'border-right':'none',           
            'font-size': "18px",
            'padding' : "5px",
        })
        $(".toggle_icon").css({
            'float':'right'
        })
        acco_section.css({
            'font-size': "15px",
            'padding' : "5px",
        })
        
        acco_tab.click(function(e){
            if(acco_section.is(":visible")){
                acco_section.slideUp(200);
                acco_tab.find('.toggle_icon').addClass("close");
                $(this).css("background-color","#fff");
                acco_tab.find('.toggle_icon').text("+");
                return;
            }
            $(".acco_section").slideUp(200);
            $(".acco_tab").css("background-color","#fff");
            $(this).css("background-color","#eee");
            $(".toggle_icon").text("+");
            acco_section.slideToggle(200);
            
            acco_tab.find('.toggle_icon').toggleClass("close");
            
            if(acco_tab.find('.toggle_icon').hasClass('close')){
                acco_tab.find('.toggle_icon').text("+");
            }
            else{
                acco_tab.find('.toggle_icon').text("-");
            }
        })
    });
};
}(jQuery));