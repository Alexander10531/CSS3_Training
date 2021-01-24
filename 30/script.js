var actualPosition = 0;

function leftButton(){

    var elementList = document.getElementsByClassName("element-list");
    actualPosition = actualPosition - 80;
    for(var i = 0; i < elementList.length; i++){
        
        elementList[i].style.left = actualPosition + "px";

    }

}

function rigthButton(){

    var elementList = document.getElementsByClassName("element-list");
    actualPosition = actualPosition + 80;
    for(var i = 0; i < elementList.length; i++){
        
        elementList[i].style.left = actualPosition + "px";

    }

}