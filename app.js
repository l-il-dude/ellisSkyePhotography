// nav bar
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

let i = 0;
let images = [];
let time = 3000;

///image list

images[0] = 'pi.jpg';
images[1] = 'pic2.jpg';
images[2] = 'pic3.jpg';

function changeImg() {
  document.slide.src = images[i];

  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }
  setTimeout('changeImg()', time);
}

window.onload = changeImg;