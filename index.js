var timesClicked = 1;
var iconClicked = 1;
var projectClicked = 1;

function fadeInText(element) {
  timesClicked++;
  element.style.animation = timesClicked % 2 === 0 ? "fadeIn 2s" : "fadeOut 2s";
  element.style.opacity = timesClicked % 2 === 0 ? "1" : "0";
}

function expandProject(project, readMore, projectsContainer) {
  projectClicked++;
  projectsContainer.style.height = projectClicked % 2 === 0 ? "60rem" : "40rem";
  readMore.style.opacity = projectClicked % 2 === 0 ? "0" : "1";
  project.style.height = projectClicked % 2 === 0 ? "17rem" : "4rem";
}

function expandBox(element) {
  iconClicked++;
  element.style.height = (iconClicked % 2 === 0 && /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) ?
    "30rem" : (iconClicked % 2 === 0 ? "15rem" : "5rem");
}

$(document).ready(function () {
  var words = ['</INNOVATION>', '</WEBDEVELOPMENT>', '</CREATIVITY>'],
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
      } else {
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
        forwards ? offset++ : offset--;
      }
      $('.words').text(part);
    }, speed);
  };

  $(document).ready(function () {
    wordflick();
  });
});
