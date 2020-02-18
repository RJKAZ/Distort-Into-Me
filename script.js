function timedSlides() {
  setTimeout(myTimeout1, 2000) 
  setTimeout(myTimeout2, 8000) 
  setTimeout(myTimeout3, 12000) 
  setTimeout(myTimeout4, 15000)
  setTimeout(myTimeout5, 20000)
  setTimeout(myTimeout6, 25000)
  setTimeout(myTimeout7, 30000)
  }
  function myTimeout1() {
    document.getElementById("demo").innerHTML = '<img class="slides" src=\'Assets/art/1.jpg\'>';
  }
  function myTimeout2() {
    document.getElementById("demo").innerHTML = '<img class="slides" src=\'Assets/art/2.jpg\'>';
  }
  function myTimeout3() {
    document.getElementById("demo").innerHTML = '<img class="slides" src=\'Assets/art/3.jpg\'>';
  }
  function myTimeout4() {
    document.getElementById("demo").innerHTML = '<img class="mySlides w3-animate-fading" style="width:50%" style="height:50%" src=\'Assets/art/4.jpg\'>';
  }
  function myTimeout5() {
    document.getElementById("demo").innerHTML = '<img class="slides" src=\'Assets/art/5.jpg\'>';
  }
  function myTimeout6() {
    document.getElementById("demo").innerHTML = '<img class="slides" src=\'Assets/art/6.jpg\'>';
  }
  function myTimeout7() {
    document.getElementById("demo").innerHTML = '<img class="slides" src=\'Assets/art/7.jpg\'>';
  };


var x = document.getElementById("myAudio");

document.getElementById("myBtn").addEventListener("click", function playAudio(){
x.play();
});