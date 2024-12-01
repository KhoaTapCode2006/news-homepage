function display_menu(){
  document.getElementById("menu-mobile-ver").style.display = "grid"
  document.getElementById("background-menu-mobile").style.display = "block"
  document.getElementById("background-menu-mobile").style.opacity = "0.4"
document.getElementById("menu-mobile-ver").style.right = "0"
}

function close_menu(){
  document.getElementById("menu-mobile-ver").style.display = "none"
  document.getElementById("background-menu-mobile").style.display = "none"
  document.getElementById("background-menu-mobile").style.opacity = "0"
document.getElementById("menu-mobile-ver").style.right = "-70%"
}
