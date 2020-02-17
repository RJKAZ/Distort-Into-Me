function timedSlides() {
  setTimeout(myTimeout1, 2000) 
  setTimeout(myTimeout2, 2000) 
  setTimeout(myTimeout3, 2000) 
  setTimeout(myTimeout4, 2000)
  setTimeout(myTimeout5, 2000)
  setTimeout(myTimeout6, 2000)
  }
  function myTimeout1() {
    document.getElementById("demo").innerHTML = '<img class="slides" src=\'Assets/art/slide1.jpg\'>';
  }
  function myTimeout2() {
    document.getElementById("demo").innerHTML = '<img class="slides" src=\'Assets/art/slide2.jpg\'>';
  }
  function myTimeout3() {
    document.getElementById("demo").innerHTML = '<img class="slides" src=\'Assets/art/slide3.jpg\'>';
  }
  function myTimeout4() {
    document.getElementById("demo").innerHTML = '<img class="slides" src=\'Assets/art/slide4.jpg\'>';
  }
  function myTimeout5() {
    document.getElementById("demo").innerHTML = '<img class="slides" src=\'Assets/art/slide5.jpg\'>';
  }
  function myTimeout6() {
    document.getElementById("demo").innerHTML = '<img class="slides" src=\'Assets/art/slide6.jpg\'>';
  }
  function myTimeout7() {
    document.getElementById("demo").innerHTML = '<img class="slides" src=\'Assets/art/slide7.jpg\'>';
  };


var x = document.getElementById("myAudio");

document.getElementById("myBtn").addEventListener("click", function playAudio(){
x.play();
});