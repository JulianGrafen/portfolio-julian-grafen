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


jQuery(document).ready(function () {
var words = ['</INNOVATION>', '</WEBDEVELOPMENT>','</CREATIVITY>'],
    part,
    i = 0,
    offset = 0,
    len = words.length,
    forwards = true,
    skip_count = 0,
    skip_delay = 15,
    speed = 70;
    
var wordflick = function () {

  setInterval(function () {
    if (forwards) {
      if (offset >= words[i].length) {
        ++skip_count;
        if (skip_count == skip_delay) {
          forwards = false;
          skip_count = 0;
        }
      }
    }
    else {
      if (offset == 0) {
        forwards = true;
        i++;
        offset = 0;
        if (i >= len) {
          i = 0;
        }
      }
    }
    part = words[i].substr(0, offset);
    if (skip_count == 0) {
      if (forwards) {
        offset++;
      }
      else {
        offset--;
      }
    }
    $('.words').text(part);
  },speed);
};

jQuery(document).ready(function () {
  wordflick();
});
});