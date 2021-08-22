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


var buttonEntrenamiento = document.getElementById("b-entrenamiento-funcional");

let buttonPlan = document.getElementById("b-plan");

let buttonVenta = document.getElementById("b-venta");

let banner = document.getElementById("main-banner");


buttonEntrenamiento.onclick = function(){
  let titulo = document.createElement('h2');
  titulo.textContent = "ENTRENAMIENTO FUNCIONAL";

  banner.appendChild(document.createElement('p'));


  banner.appendChild(titulo);


}

/*
let button = document.getElementById("videos-grid");

button.addEventListener('mouseover', () => {
  if(event)
  {
    document.getElementsByClassName('insta-cover')[0].style.display = "block";
  }
  else
  {
    document.getElementsByClassName('insta-cover')[0].style.display = "none";
  }
  
})
*/


let grid = document.getElementById('videos-grid');

function desplazar()
{
  grid.scrollLeft += 300;
}