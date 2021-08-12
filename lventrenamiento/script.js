var prevScrollpos = window.pageYOffset;
var onMobile = false;


if(window.innerWidth <= 450){
  onMobile = true;
}

if(!onMobile)
  {
    window.onscroll = function() {
      var currentScrollPos = window.pageYOffset;
    
      
      if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
      } else {
        document.getElementById("navbar").style.top = "-50px";
      }
    
      prevScrollpos = currentScrollPos;
      
    }  
  }


function toggleNav() {

  var nav = document.getElementById("nav-list");
  var icon = document.getElementById("hamburger-icon");

  if(nav.style.display == "block")
  {
    nav.style.display = "none";
    icon.style.backgroundImage = "url('https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/800px-Hamburger_icon.svg.png')";
  }
  else{
    nav.style.display = "block";
    icon.style.backgroundImage = "url('media/close.png')";
  }
}

function ocultar()
{
  if(onMobile)
  {
    document.getElementById("nav-list").style.display = "none";
    document.getElementById("hamburger-icon").style.backgroundImage = "url('https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/800px-Hamburger_icon.svg.png')";
  }

}