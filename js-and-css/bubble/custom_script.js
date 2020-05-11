document.addEventListener("mousemove",function(event){
        
    var circle = document.createElement("div");
    var color = ["red","green","blue"];

    circle.setAttribute("class","circles");

    document.body.appendChild(circle);

    circle.style.left = event.clientX + 'px';
    circle.style.top = event.clientY + 'px';

    var b_color = color[Math.floor(Math.random() * color.length)];

    circle.style.borderColor = b_color;
    circle.style.transition = "all 2s linear 0s";
    circle.style.left = circle.offsetLeft - 20 + "px";
    circle.style.top = circle.offsetTop - 20 + "px";
    circle.style.width = "50px";
    circle.style.height = "50px";
    circle.style.opacity = "0";

    
});    
