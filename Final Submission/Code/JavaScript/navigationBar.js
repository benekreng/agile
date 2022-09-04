// function to see if pre-loaded data is selected to update the nav bar
const dropDownMenu = document.getElementById("dataSelectorDropDown")
const navBar1 = document.getElementById("navBar1");
const navBar2 = document.getElementById("navBar2");
const navBar3 = document.getElementById("navBar3");


dropDownMenu.addEventListener("change", function(e) {
    
    if (dropDownMenu.value == "Pre_Loaded_Data") {
        navBar1.style.backgroundColor = "grey"
        
        // remove elemnts that aren't appropriate to pre-loaded data
        document.getElementById("fileBrowser").style.display = "none";

        // add other pre-loaded elements back
        document.getElementById("generateGraphsButton").style.display = "block";
        
        document.getElementById("first-phase").style.backgroundColor = "#548235";
        document.getElementById("first-pass").style.color = "#548235";
        document.getElementById("second-phase").style.borderColor = "#548235";
    }
    
    else {
        navBar1.style.backgroundColor = "inherit";
        navBar2.style.backgroundColor = "inherit";
        navBar3.style.backgroundColor = "inherit";
        
        // Show file input and options
        document.getElementById("fileBrowser").style.display = "flex";

        // remove pre-loaded options
        document.getElementById("generateGraphsButton").style.display = "none";
        document.getElementById("randomize").style.display = "none";
        document.getElementById("lineChartBtn").style.display = "none";
        document.getElementById("barChartBtn").style.display = "none";
        document.getElementById("doughnutChartBtn").style.display = "none";
        document.getElementById("pieChartBtn").style.display = "none";
        document.getElementById("bubbleChartBtn").style.display = "none";
        document.getElementById("exportGraphicArea").style.display = "none";

        // correct navigation bar
        document.getElementById("first-phase").style.backgroundColor = "#E7E6E6";
        document.getElementById("first-phase").style.borderColor = "#548235";
        document.getElementById("first-pass").style.color = "#7F7F7F";
        document.getElementById("second-phase").style.backgroundColor = "#E7E6E6";
        document.getElementById("second-phase").style.borderColor = "#7F7F7F";
        document.getElementById("second-pass").style.color = "#7F7F7F";
        document.getElementById("third-phase").style.backgroundColor = "#E7E6E6";
        document.getElementById("third-phase").style.borderColor = "#7F7F7F";
    }
})

// File selected is located on the fileSelector.js file