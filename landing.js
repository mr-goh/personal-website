document.addEventListener("DOMContentLoaded", function() {
    var i = 0;
    var txt = 'Hi, I\'m Jonathan.'; 
    var speed = 50; 
  
    function typeWriter() {
      if (i < txt.length) {
        document.getElementById("landingIntro").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      }
    }
  
    typeWriter();
  });