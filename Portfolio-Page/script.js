
var toggleOn = true;
var toggleButton = document.getElementById("toggle-button");
var prevScrollpos = window.pageYOffset;

if(window.innerWidth<=835)
{
  toggleOn = false;
}

else{
  toggleOn = true;
}

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if(toggleOn)
  {
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-50px";
    }
  }
  prevScrollpos = currentScrollPos;
} 

function toggleMenu()
{
  var x = document.getElementById("toggle");
  if(x.style.display == "block")
  {
    x.style.display = "none";
  }
  else{
    x.style.display = "block";
  }
}

function toggleNight()
{
  
  document.getElementById("form-background-one").style.backgroundImage = "url('media/Fondo1-dia.svg')";

  document.getElementById("form-background-two").style.backgroundImage = "url('media/Fondo2-dia.svg')";

  document.getElementById("contact-section").style.backgroundImage = "none";
}