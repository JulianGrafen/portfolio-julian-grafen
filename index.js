var timesClicked = 1;
var easterEgg = "You are curious (⊙ _ ⊙ )"
       


function fadeInText(element){
    timesClicked ++;
    console.log (easterEgg)

    if (timesClicked % 2 === 0){
        element.style.animation="fadeIn 2s"
        element.style.opacity="1";

    } else {
        element.style.animation="fadeOut 2s"
        element.style.opacity="0";
    }  
}

function expandBox(element){

    if (timesClicked % 2 === 0){
        element.style.height="15rem";
    

    } else {
        element.style.height="5rem";
    }  
}