
var img = document.getElementsByClassName("img");
for (i=0; i< img.length; i++){
    img[i].onmouseenter = function(mouse) {
        var edge = closestEdge(mouse, this);
        console.log(edge);
      }
    img[i].onmouseleave = function(mouse) {
    var edge = closestEdge(mouse, this);
    console.log(edge);
    }
}

  
  function closestEdge(mouse, elem) {
    var elemBounding = elem.getBoundingClientRect();
  
    var elementLeftEdge = elemBounding.left;
    var elementTopEdge = elemBounding.top;
    var elementRightEdge = elemBounding.right;
    var elementBottomEdge = elemBounding.bottom;
  
    var mouseX = mouse.pageX;
    var mouseY = mouse.pageY;
  
    var topEdgeDist = Math.abs(elementTopEdge - mouseY);
    var bottomEdgeDist = Math.abs(elementBottomEdge - mouseY);
    var leftEdgeDist = Math.abs(elementLeftEdge - mouseX);
    var rightEdgeDist = Math.abs(elementRightEdge - mouseX);
  
    var min = Math.min(topEdgeDist,bottomEdgeDist,leftEdgeDist,rightEdgeDist);
  
    switch (min) {
      case leftEdgeDist:
       
      elem.style.boxShadow = "#000 -12px 2px 1px 8px";
    //   elem.style.borderRight = "none";
    //   elem.style.borderTop = "none";
    //   elem.style.borderBottom = "none";
        return "left";

      case rightEdgeDist:
        
      elem.style.boxShadow = "#000 15px 2px 1px 8px";
    //   elem.style.borderLeft = "none";  
     
    //   elem.style.borderTop = "none";
    //   elem.style.borderBottom = "none";
        return "right";

      case topEdgeDist:
      elem.style.boxShadow = "#000 0px -12px 1px 8px";
    //   elem.style.borderLeft = "none";      
    //   elem.style.borderRight = "none";
     
    //   elem.style.borderBottom = "none";
        return "top";


      case bottomEdgeDist:
      elem.style.boxShadow = "#000 0px 16px 1px 8px";
    //   elem.style.borderLeft = "none";      
    //   elem.style.borderRight = "none";
    //   elem.style.borderTop = "none";
      
        return "bottom";
    }
  }