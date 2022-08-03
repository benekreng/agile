//const retract = document.querySelector(".retract");
//const links = document.querySelector(".menu");
//
//retract.addEventListener("click", function() {
//    links.classList.toggle("active");
//})
var usePreBuiltData = true
var loadData = false


// var loadedData = null; // used in the load file option

let globalChart; // Chart Global Object
const ctx = document.getElementById('chart'); // Canvas Global Element


//https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onerror
window.onerror = function (msg, url, lineNo, columnNo, error) {
    const string = msg.toLowerCase();
    const substring = 'script error';
    
    if (string.indexOf(substring) > -1) {
        alert('Script Error: See Browser Console for Detail');
    }
    
    else {
        const message = [
            'Message: ' + msg,
            'URL: ' + url,
            'Line: ' + lineNo,
            'Column: ' + columnNo,
            'Error object: ' + JSON.stringify(error)
        ].join('\n - ');

        console.log(message);
        document.getElementById("logText").innerHTML = msg;
        displayError(true)
    }

    return false;
};

function displayError(status) {
    let logDiv = document.getElementById("log");
    status ? logDiv.style.display = 'flex' :  logDiv.style.display = 'none';
}

// Function for displaying the side menu
function displayMenu() {
    document.getElementById("menu").style.left = "0";
    document.getElementById("cross").style.display = "block";
    document.getElementById("bars").style.display = "none";
}

// Function for hiding the side menu
function closeMenu() {
    document.getElementById("menu").style.left = "-275px";
    document.getElementById("cross").style.display = "none";
    document.getElementById("bars").style.display = "block";
}

// code to update the file name on the size menu once file is loaded
document.querySelector("#userImportButton").onchange = function() {
    document.querySelector("#file-name").textContent = this.files[0].name;
}

//show options
function displayOptions() {
    var element = document.getElementById("popup");
    element.classList.toggle("popupActive");
    console.log('yes')
}