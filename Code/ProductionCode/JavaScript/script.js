var usePreBuiltData = true;
var loadData = false;

// var loadedData = null; // used in the load file option

let globalChart; // Chart Global Object
//const ctx = document.getElementById('chart'); // Canvas Global Element
const canvas = document.getElementById("chart");
const ctx = canvas.getContext("2d");

// Function for displaying the side menu
function displayMenu() {
    document.getElementById("menu").style.left = "0";
    document.getElementById("cross").style.display = "block";
    document.getElementById("bars").style.display = "none";
    document.getElementById("popup").style.left = "0";
    document.getElementById("chartContainer").style.left = "275px";
    document.getElementById("chartContainer").style.width = "calc(100% - 275px)";
    document.getElementById("nav").style.top = "30px";
}

// Function for hiding the side menu
function closeMenu() {
    document.getElementById("menu").style.left = "-275px";
    document.getElementById("cross").style.display = "none";
    document.getElementById("bars").style.display = "block";
    document.getElementById("popup").style.left = "-275px";
    document.getElementById("chartContainer").style.left = "0px";
    document.getElementById("chartContainer").style.width = "100%";
    document.getElementById("nav").style.top = "50px";
}

// Function for displaying the info menu
function displayInfo() {
    document.getElementById("info-menu").style.right = "0";
    document.getElementById("info-cross").style.display = "block";
    document.getElementById("info").style.display = "none";
}

// Function for hiding the info menu
function closeInfo() {
    document.getElementById("info-menu").style.right = "-675px";
    document.getElementById("info-cross").style.display = "none";
    document.getElementById("info").style.display = "block";
}

// code to update the file name on the size menu once file is loaded
document.querySelector("#userImportButton").onchange = function() {
    document.querySelector("#file-name").textContent = this.files[0].name;
}