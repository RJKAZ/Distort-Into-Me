var i = 0; //start point
var images = [];
var time = 3000;

//image list
images[0] = '1.jpg';
images[1] = '2.jpg';
images[2] = '3.jpg';
images[3] = '4.jpg';

//Change Image

function changeImg(){
  document.slide.src = images[i];

  if(i < images.length -1) {
    i++;
 } else {
   i = 0;
 }

 setTimeout("changeImg()", time);

}

window.onload = changeImg;