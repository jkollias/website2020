
//////Menu Events
// var toggleMenu = function(){
//   document.getElementById('open-menu-icon').classList.toggle("open");
//   document.getElementById('nav-panel').classList.toggle("open");
//   document.getElementById('page').classList.toggle("shrink");
//   document.getElementById('nav-overlay').classList.toggle("show");
// }


var addClass = function(ele,cla){
  document.getElementById(ele).classList.toggle(cla);
}

var toggleMenu = function(menu){
  document.getElementById(menu).classList.toggle('activated');
  console.log(menu);
}


var togglePanel = function(id){
  document.getElementById(id).classList.toggle('activated');
}

/*////Pop Up For Print//////*/

var fadeIn = function(ele){
  setTimeout(function(){
    document.getElementById(ele).classList.add("fade-in");
    document.getElementById("applause").play();
  }, 250);
}


var imgUrl = "assets/img/print/";

var showPopup = function(item){
  document.body.style.overflowY = "hidden";
  let popUp = document.createElement("div");
  let btn = document.createElement("button");
  let image = document.createElement("img");
  btn.classList.add("close-btn");
  btn.onclick = function() { removePopUp(item); };
  btn.innerHTML = "<span>Close</span>";
  popUp.id = item+"-popup";
  popUp.classList.add("pop-up");
  image.src = imgUrl+item+"-large.jpg";
  document.body.appendChild(popUp);
  popUp.appendChild(btn);
  popUp.appendChild(image);
  fadeIn(item+"-popup");
  if(image.width > image.height){
    image.setAttribute("style","width: 80%; height: auto; max-width:" +image.naturalWidth+ "px");
  // }else if(image.width < image.height){
  //   image.setAttribute("style","width: auto; height: 80%;");
  }else{
    //image.setAttribute("style","width: 80%; height: 80%;");
    image.setAttribute("style","width: auto; height: 70%;");
  }
}

var removePopUp = function(item){
  document.body.style.overflowY = "scroll";
  document.getElementById(item+"-popup").classList.add("fade-out");
  let popUp = document.getElementById(item+"-popup");
  setTimeout(function(){
    document.body.removeChild(popUp);
  }, 500);
}
