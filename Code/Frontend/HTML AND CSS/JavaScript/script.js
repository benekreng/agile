//const retract = document.querySelector(".retract");
//const links = document.querySelector(".menu");
//
//retract.addEventListener("click", function() {
//    links.classList.toggle("active");
//})
var usePreBuiltData = true
var loadData = false

var loadedData = null; // used in the load file option

let globalChart; // Chart Global Object
const ctx = document.getElementById('chart'); // Canvas Global Element


//https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onerror
window.onerror = function (msg, url, lineNo, columnNo, error) {
  const string = msg.toLowerCase();
  const substring = 'script error';
  if (string.indexOf(substring) > -1){
    alert('Script Error: See Browser Console for Detail');
  } else {
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

function displayError(status){
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
document.querySelector("#my-file").onchange = function(){
  document.querySelector("#file-name").textContent = this.files[0].name;
}



// Listener on the FILE SELECTOR button 
// SOURCE https://www.youtube.com/watch?v=-AR-6X_98rM
const input = document.querySelector('input[type="file"]');

input.addEventListener('change', function(e)
{
    // TESTING display FileList object to show file is loaded
    // console.log(input.files)

    // create FileReader object to view the file
    const reader = new FileReader()

    // display the  contents of the .csv file
    reader.onload = function()
    {
        //? find a way to determine file extension to be used in different file parsing later 

        // parsed results
        loadedData = reader.result.split('\n').map(function(line){return line.split(',')})
        
        // TESTING display parsed results
        console.log(loadedData)
    }

    // read the data as text 
    reader.readAsText(input.files[0])

}, false)






// Listener on the GENERATE GRAPHS button
// TODO implement charts.js link for all options
const generateGraphsButton = document.getElementById("generateGraphsButton");

generateGraphsButton.addEventListener("click", function(e){ 
  console.log("generate graphs function activated")

  var dropDownSelection = document.getElementById("dataSelectorDropDown").value

  // Pre loaded Data option
  if(dropDownSelection == "Pre_Loaded_Data"){
    globalChart = new Chart(
      ctx,
      preLoadedConfig
    );
  }

  // Loaded data from file 
  else if (dropDownSelection == "Data_Frome_File"){
    // determine if data has been loaded yet
    if(loadedData == null){
      console.log("data generation not possible as no data has been loaded")
    }
    else{
      // TODO add charts.js link with loadedData variable here 
      console.log(loadedData)
    }
  }

  // Google Big Query
  else if (dropDownSelection == "Google_Big_Query"){
    // TODO add charts.js link here with GBQ data
    // Insert GBQ data code here
  }

  // Unknown state 
  else{
    console.log("Unknown state with charts.js Data load")
  }


})


// Function to export the user generated graphics
function exportGraphic()
{
  // find the export option that the use has selected
  let exportOption = document.getElementsByName('dataExport');
  for(let x = 0; x < exportOption.length; x++)
  {
    if(exportOption[x].checked == true)
    {
      var fileExtension = exportOption[x].value;
      break;
    }
  }

  // set the string used for data export
  let exportStr = "image/";
  exportStr += fileExtension;

  // find chart and convert to URL
  let graphArea = document.getElementById("chart");
  let img = graphArea.toDataURL("image/png");

  // create and write new graphic to new tab
  var newTab = window.open("")
  newTab.document.write('<img src="'+img+'"/>')
}