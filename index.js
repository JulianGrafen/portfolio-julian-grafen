var timesClicked = 1;
var iconClicked =1;
var projectClicked= 1;
var toolClicked =1;
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

function expandProject(project,readMore,projectsContainer){
  projectClicked ++;
  console.log(projectClicked);
  if (projectClicked % 2 === 0){
    projectsContainer.style.height ="60rem";
    readMore.style.opacity = "0";
    project.style.height="17rem";
   
} else {
  projectsContainer.style.height ="40rem";
    project.style.height="4rem";
    readMore.style.opacity = "1";

}  
}


function expandBox(element){
  iconClicked ++;
  console.log(timesClicked)
    if (iconClicked % 2 === 0 && /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)){
element.style.height ="30rem"  } 
else if(iconClicked % 2 === 0){
  element.style.height="15rem"
}else{
  element.style.height="5rem"
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