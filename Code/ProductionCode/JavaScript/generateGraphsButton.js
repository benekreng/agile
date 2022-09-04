// TODO implement charts.js link for all options
const generateGraphsButton = document.getElementById("generateGraphsButton");

generateGraphsButton.addEventListener("click", function(e) { 

    navBar2.style.backgroundColor = "gray"
    navBar1.style.backgroundColor = "gray"

    //check to see if globalChart is in use and destroy
    if (globalChart != null) {
        globalChart.destroy();
        console.log("chart destroyed");
    }

    console.log("generate graphs function activated")

    var dropDownSelection = document.getElementById("dataSelectorDropDown").value

    // Pre loaded Data option
    if (dropDownSelection == "Pre_Loaded_Data") {
        if(globalChart != undefined) globalChart.destroy();
        // show extra options
        document.getElementById("randomize").style.display = "block";
        document.getElementById("lineChartBtn").style.display = "block";
        document.getElementById("barChartBtn").style.display = "block";
        document.getElementById("doughnutChartBtn").style.display = "block";
        document.getElementById("pieChartBtn").style.display = "block";
        document.getElementById("bubbleChartBtn").style.display = "block";

        // update the navigation bar
        document.getElementById("navBar2").style.backgroundColor = "gray";
        document.getElementById("second-phase").style.backgroundColor = "#548235";
        document.getElementById("second-pass").style.color = "#548235";
        document.getElementById("third-phase").style.borderColor = "#548235";
        
        console.log("globalChart status", globalChart)
        globalChart = new Chart(ctx, {
            type: "bar",
            data: globalChart == undefined ? mainConfig : presetConfig,
            options: updator
        });

        document.getElementById("exportGraphicArea").style.display = "flex";
    }

    // Loaded data from file 
    else if (dropDownSelection == "Data_From_File") {
      // determine if data has been loaded yet
        if(loadedData == null){
            console.log("data generation not possible as no data has been loaded")
        }
        else {
            console.log(loadedData)
        }
    }

    // Unknown state 
    else{
        console.log("Unknown state with charts.js Data load")
    }
})