//const retract = document.querySelector(".retract");
//const links = document.querySelector(".menu");
//
//retract.addEventListener("click", function() {
//    links.classList.toggle("active");
//})

function displayMenu() {
    document.getElementById("menu").style.display = "flex";
    document.getElementById("cross").style.display = "block";
    document.getElementById("bars").style.display = "none";
}

function closeMenu() {
    document.getElementById("menu").style.display = "none";
    document.getElementById("cross").style.display = "none";
    document.getElementById("bars").style.display = "block";
}

document.querySelector("#my-file").onchange = function(){
  document.querySelector("#file-name").textContent = this.files[0].name;
}